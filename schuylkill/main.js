'use strict';

var ctx = document.getElementById('waterChart').getContext('2d');

var generateChartData = function(limit){
    var data = {
        labels: [], // FILL
        datasets: [{
            label: 'gauge',
            yAxisID: 'gauge',
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)',
            pointRadius: 0,
            fill: false,
            data: [] // FILL
        },{
            label: 'precip',
            yAxisID: 'precip',
            borderColor: '#e82b53',
            backgroundColor: '#e82b53',
            pointRadius: 0,
            fill: false,
            data: [] // FILL
        }]
    }
    
    // River Gauge
    var gaugeSource = waterData;
    if(limit){
        gaugeSource = gaugeSource.slice(limit*-1);
    }
    
    gaugeSource.forEach(function(reading){
        var timestamp = moment(reading[0]);
        data.labels.push(timestamp);
        data.datasets[0].data.push(reading[1]);
    })
    
    // Precipitation
    var precipSource = precipData;
    if(limit){
        precipSource = precipSource.slice(limit*-1);
    }
    
    precipSource.forEach(function(reading){
        var timestamp = moment(reading[0]);
        
        if(reading[1] === null){
            reading[1] = 0;
        }
        
        data.datasets[1].data.push(reading[1]);
        
        for(var i = 0 ; i < 23 ; i++){
            data.datasets[1].data.push(0);
        }
    })
    
    console.log('chart data:', data);
    
    return data;
}

var timeFormat = 'MM/DD/YYYY HH:mm';

var waterChart = new Chart(ctx, {
    type: 'line',
    data: generateChartData(31*24 + 192),
    options: {
        responsive: false,
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                type: "time",
                time: {
                    format: timeFormat,
                    // round: 'day'
                    tooltipFormat: 'll HH:mm'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }, ],
            yAxes: [{
                id: 'gauge',
                type: 'linear',
                position: 'left',
                ticks: {
                    callback: function(value, index, values) {
                        return value + ' ft';
                    }
                }
            },{
                id: 'precip',
                type: 'linear',
                position: 'right',
                ticks: {
                    callback: function(value, index, values) {
                        return value + ' mm';
                    }
                }
            }]
            
        }
    }
});

