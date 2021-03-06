'use strict';

var mm_to_in = function(mm_int){
    var conv = 0.03937007874;
    return parseFloat(parseInt((mm_int * conv)*100))/100;
}

var ctx = document.getElementById('waterChart').getContext('2d');

var generateChartData = function(){
    var data = {
        labels: [], // FILL
        datasets: [{
            label: 'gauge',
            yAxisID: 'gauge',
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)',
            pointRadius: 0,
            fill: false,
            data: []
        },{
            label: 'precip',
            yAxisID: 'precip',
            borderColor: '#e82b53',
            backgroundColor: '#e82b53',
            pointRadius: 5,
            fill: false,
            data: []
        }]
    }
    
    // River Gauge
    gaugeSource.forEach(function(reading){
        var timestamp = moment(reading[0]);
        data.labels.push(timestamp);
        data.datasets[0].data.push(reading[1]);
    })
    
    // Precipitation
    precipSource.forEach(function(reading){
        var timestamp = moment(reading[0]);
        
        // Null out days with no rain
        if(!reading[1] || reading[1] < 0.5){
            reading[1] = null;
        }
        
        if(reading[1] === null){
            data.datasets[1].data.push(null);
        }else{
            data.datasets[1].data.push(mm_to_in(reading[1]));
        }
        
        for(var i = 0 ; i < 23 ; i++){
            data.datasets[1].data.push(null);
        }
    })
    
    console.log('chart data:', data);
    
    return data;
}

var timeFormat = 'MM/DD/YYYY HH:mm';

var waterChart = new Chart(ctx, {
    type: 'line',
    data: generateChartData(),
    options: {
        responsive: false,
        tooltips: {
            mode: 'index',
            intersect: false
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
                }
            }],
            yAxes: [{
                id: 'gauge',
                type: 'linear',
                position: 'right',
                ticks: {
                    callback: function(value, index, values) {
                        value = parseInt(value*10)/10;
                        return value + ' ft';
                    }
                }
            },{
                id: 'precip',
                type: 'linear',
                position: 'left',
                ticks: {
                    callback: function(value, index, values) {
                        value = parseInt(value*10)/10;
                        return value + ' in';
                    }
                }
            }]
            
        }
    }
});

// Update latest read header
var recentReadTime = gaugeSource.slice(-1)[0][0];
var recentReadVal = gaugeSource.slice(-1)[0][1];

recentReadTime = recentReadTime.replace('T', ' ');

document.getElementById('latestReadVal').innerHTML = 'Latest Read: ' + recentReadVal + ' ft';
document.getElementById('latestReadTime').innerHTML = 'as of ' + recentReadTime;


