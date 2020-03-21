var data = [
    ['Java', 1, "降", "-0.01%"],
    ['C', 2, "升", "+2.44%"],
    ['Python', 3, "升", "+1.44%"],
    ['C++', 4, "降", "-2.58%"],
    ['C#', 5, "升", "+2.07%"],
    ['Visual Basic.NET', 6, "降", "-1.17%"],
    ['JavaScript', 7, "降", "-0.85%"]
  ],
  container = document.getElementById('example'),
  hot;

hot = new Handsontable(container, {
    data: data,
    startRows: 7,
    startCols: 4,
    colHeaders: true,
    colWidths: 150,
    colHeaders: ["语言名称","排名","升或降","变化幅度"],
    className: "htCenter htMiddle",
    licenseKey: 'non-commercial-and-evaluation'
})


// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'JavaScript语言排名变化'
    },
    tooltip: {},
    xAxis: {
        data: ["2000","2005","2010","2015","2020"]
    },
    yAxis: {
    },
    series: [{
        name: '排名',
        type: 'line',
        data: [6, 9, 8, 8, 7]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);