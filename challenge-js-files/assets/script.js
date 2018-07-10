var sauvegardeTitre = [];
let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://inside.becode.org/api/v1/data/random.json', true)
xhr.onload = function () {
  if (this.status === 200) {
    let data = JSON.parse(xhr.responseText);
    getFromApi(data);
  } else {
    alert("ERROR");
  }
};
xhr.send();

function getFromApi(data) {
  console.log(data);
}

var sauvegardeTableau1 = [];
tableauDoc1 = document.getElementById("table1");
tableau1 = tableauDoc1.getElementsByTagName("td");
for (var i = 0; i < tableau1.length; i++) {
  sauvegardeTableau1.push(tableau1[i].innerHTML);
}
 console.log(sauvegardeTableau1);

var sauvegardeTableau2 = [];
tableauDoc2 = document.getElementById("table2");
tableau2 = tableauDoc2.getElementsByTagName("td");
for (var i = 0; i < tableau2.length; i++) {
  sauvegardeTableau2.push(tableau2[i].innerHTML);
}
 console.log(sauvegardeTableau2);

// var svg = dimple.newSvg("#firstHeading", 800, 600);
// var data = [
//   { "Word":"Hello", "Awesomeness":2000 },
//   { "Word":"World", "Awesomeness":3000 },
// ];
// var chart = new dimple.chart(svg, data);
// chart.addCategoryAxis("x", "Word");
// chart.addMeasureAxis("y", "Awesomeness");
// chart.addSeries(null, dimple.plot.bar);
// chart.draw();
//
//
// var svg = dimple.newSvg(".graph2", 800, 600);
// var data = [
//   { "Word":"Hello", "Awesomeness":2000 },
//   { "Word":"World", "Awesomeness":3000 },
// ];
// var chart = new dimple.chart(svg, data);
// chart.addCategoryAxis("x", "Word");
// chart.addMeasureAxis("y", "Awesomeness");
// chart.addSeries(null, dimple.plot.bar);
// chart.draw();
//
// var svg = dimple.newSvg(".graph3", 800, 600);
// var data = [
//   { "Word":"Hello", "Awesomeness":2000 },
//   { "Word":"World", "Awesomeness":3000 },
// ];
// var chart = new dimple.chart(svg, data);
// chart.addCategoryAxis("x", "Word");
// chart.addMeasureAxis("y", "Awesomeness");
// chart.addSeries(null, dimple.plot.bar);
// chart.draw();

var svg = dimple.newSvg("#graph1", 590, 400);
  d3.tsv("/data/example_data.tsv", function (data) {
    data = dimple.filterData(data, "Owner", ["Aperture", "Black Mesa"])
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 430, 330);
    var x = myChart.addCategoryAxis("x", ["Owner", "Month"]);
    x.addGroupOrderRule("Date");
    myChart.addMeasureAxis("y", "Unit Sales");
    var s = myChart.addSeries(["Brand"], dimple.plot.line);
    s.barGap = 0.05;
    myChart.addLegend(510, 20, 100, 300, "left");
    myChart.draw();
  });

  var svg = dimple.newSvg("#graph2  ", 590, 400);
d3.tsv("/data/example_data.tsv", function (data) {
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(65, 45, 505, 315)
  myChart.addCategoryAxis("x", ["Price Tier", "Channel"]);
  myChart.addPctAxis("y", "Unit Sales");
  myChart.addSeries("Owner", dimple.plot.bar);
  myChart.addLegend(200, 10, 380, 20, "right");
  myChart.draw();
});
