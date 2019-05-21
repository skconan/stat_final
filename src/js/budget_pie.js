google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['จังหวัด', 'งบประมาณ'],
        ['ระนอง', 4704611.3],
        ['พังงา', 4897205.225],
        ['กระบี่', 6240254.7],
        ['ตรัง', 7203860.7],
        ['ภูเก็ค', 2407366.4],
    ]);

    var options = {
        title: 'งบประมาณแบ่งตามจังหวัด',
        pieHole: 0.5
    };

    data.sort([{ column: 1 }]);

    var chart = new google.visualization.PieChart(document.getElementById('budget_pie'));
    chart.draw(data, options);
}