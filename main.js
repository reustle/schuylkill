var ctx = document.getElementById('waterChart').getContext('2d');

var generateChartData = function(limit){
    var dataset = {
        labels: [], // FILL
        datasets: [{
            label: 'Water Level',
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)',
            pointRadius: 0,
            fill: false,
            data: [], // FILL
        }]
    }
    
    // Apply limit if necessary
    var source = waterData;
    if(limit){
        source = source.slice(limit*-1);
    }
    
    source.forEach(function(reading){
        var timestamp = moment(reading[0]);
        dataset.labels.push(timestamp);
        dataset.datasets[0].data.push(reading[1]);
    })
    
    return dataset;
}

var timeFormat = 'MM/DD/YYYY HH:mm';

var waterChart = new Chart(ctx, {
    type: 'line',
    data: generateChartData(21*24),
    options: {
        responsive: false,
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
                scaleLabel: {
                    display: true,
                    labelString: 'Water Level'
                }
            }]
        }
    }
});

