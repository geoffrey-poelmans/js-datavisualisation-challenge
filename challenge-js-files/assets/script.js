// AJAX ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var sauvegardeTitre = [];
let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://inside.becode.org/api/v1/data/random.json', true)
xhr.onload = function () {
  if (this.status === 200) {
    let data = JSON.parse(xhr.responseText);
    for (i = 0; i < data.length; i++){
      sauvegardeTitre.push ({
           "premiereData": data[i][0],
           "deuxiemeData": data[i][1]
       });
     }
       myChart = new dimple.chart(dimple.newSvg("#firstHeading", "100%", 550), sauvegardeTitre);
       myChart.setBounds(35, 60, "90%", 450);
       var x = myChart.addCategoryAxis("x", "premiereData");
       x.addOrderRule("premiereData", false);
       var y = myChart.addMeasureAxis("y", "deuxiemeData");
       y.ticks = 15;
       myChart.addSeries(null, dimple.plot.bar);
       myChart.draw();
       updateGraph()
  } else {
    alert("ERROR");
  }
};
xhr.send();

console.log(sauvegardeTitre);

function updateGraph(){
    xhr.open('GET', 'https://inside.becode.org/api/v1/data/random.json', true)
    xhr.onload = function () {
      if (this.status === 200) {
        let data = JSON.parse(xhr.responseText);
        for (i = 0; i < data.length; i++){
          sauvegardeTitre.push ({
               "premiereData": data[i][0],
               "deuxiemeData": data[i][1]
           });
        }
        myChart.data = sauvegardeTitre;
        myChart.draw();
        setTimeout(function(){updateGraph()}, 1000);
        }
    }
    xhr.send()
}


// GRAPH 1 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var div = document.createElement("div");
div.id = "graph1";
var container = document.getElementById("mw-content-text");
container.insertBefore(div, table1);

let data1 = [];
let table = document.getElementById('table1');
let years = table.getElementsByTagName('tr')[1].getElementsByTagName('th');
let yearsArray = [];
for(let i = 2; i < years.length; i++) {
  let content = years[i].innerHTML;
  yearsArray.push(content);
}

let rows = table.getElementsByTagName('tr');

for(let i = 2; i < rows.length; i++) {
  let cells = rows[i].getElementsByTagName('td');

  for (let j = 0; j < cells.length; j++) {
    if(j === 0) {
      var pays = cells[j].innerHTML;
    }
    else {
      if (cells[j].innerHTML != ":") {
        data1.push({data1:cells[j].innerHTML, pays:pays, year:yearsArray[j-1]});
      }
    }
  }

}

console.log(data1);

var svg = dimple.newSvg("#graph1", "100%", 450);
var myChart = new dimple.chart(svg, data1);
myChart.setBounds(30, 110, "90%", 305);
var x = myChart.addCategoryAxis("x", ["year", "pays"]);
var y = myChart.addMeasureAxis("y", "data1");
y.ticks = 15;
myChart.addSeries("pays", dimple.plot.line);
myChart.addLegend(10, 10, "100%", 200);
myChart.draw();

// GRAPH 2 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var div = document.createElement("div");
div.id = "graph2";
var container = document.getElementById("mw-content-text");
container.insertBefore(div, table2);

let data2 = [];
let tableN2 = document.getElementById('table2');
let years2 = tableN2.getElementsByTagName('tr')[0].getElementsByTagName('th');
let yearsArray2 = [];
for(let i = 2; i < years2.length; i++) {
  let content2 = years2[i].innerHTML;
  yearsArray2.push(content2);
}

let rows2 = tableN2.getElementsByTagName('tr');

for(let i = 0; i < rows2.length; i++) {
  let cells2 = rows2[i].getElementsByTagName('td');

  for (let j = 0; j < cells2.length; j++) {
    if(j === 0) {
      var pays2 = cells2[j].innerHTML;
    }
    else {
      data2.push({data2:cells2[j].innerHTML, pays2:pays2, year2:yearsArray2[j-1]});
    }
  }
}

console.log(data2);

var myChart = new dimple.chart(dimple.newSvg("#graph2" , "100%", 550), data2);
myChart.setBounds(35, 180, "90%", 305);
var x = myChart.addCategoryAxis("x", ["year2", "pays2"]);
x.addOrderRule("year2", false);
var y = myChart.addMeasureAxis("y", "data2");
y.ticks = 15;
myChart.addSeries("pays2", dimple.plot.bar);
myChart.addLegend(10, 10, "100%", 200);
myChart.draw();
