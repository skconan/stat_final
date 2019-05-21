google.charts.load('42', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'ปี');
    data.addColumn('number', 'ระนอง');
    data.addColumn('number', 'พังงา');
    data.addColumn('number', 'กระบี่');
    data.addColumn('number', 'ตรัง');
    data.addColumn('number', 'ภูเก็ต');

    data.addRows([
        [2547, 5727528, 4876888, 10663047, 7998717, 2312389],
        [2548, 3784420, 4287710, 5924050, 6308580, 1950070],
        [2549, 3000200, 4239400, 4546400, 7100500, 1991900],
        [2550, 4268642, 4857904, 5609433, 7328681, 2283851],
        [2551, 3553750, 4569210, 4916010, 6068100, 2319000],
        [2552, 3491684, 3975590, 4425206, 5821002, 1962382],
        [2553, 4155210, 5108730, 5829010, 6891280, 2372320],
        [2554, 5353006, 5629398, 6657984, 7126306, 2728186],
        [2555, 7126306, 5544764, 7602116, 9751104, 3082728],
        [2557, 6585367, 5882458, 6229291, 7644337, 3070838],
    ]);

    var options = {
        width: "100%",
        height: 900,
        hAxis: {
            title: 'Time',
            format: '####'
        },
        vAxis: {
            title: 'งบประมาณ',
        },
    };

    var chart = new google.visualization.LineChart(document.getElementById('budget_ts'));
    chart.draw(data, options);
}