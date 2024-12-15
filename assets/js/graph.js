$(function(){
    const ctx = document.getElementById('barChart').getContext('2d');

    const data = {
        labels: [
            '8:00', '8:30', '9:00', '9:30', '10:00', '10:30',
            '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
            '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
            '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
            '20:00', '20:30', '21:00', '21:30', '22:00'
        ],
        datasets: [{
            label: 'Fronty',
            data: [5, 4, 6, 4, 5, 3, 2, 1, 3, 5, 8, 5, 9, 10, 6, 7, 3, 2, 3, 4, 5, 6, 8, 7, 10, 12, 8, 9, 6],
            backgroundColor: function(context) {
                const value = context.dataset.data[context.dataIndex];
                if (value >= 8) return '#C70039';
                if (value >= 4) return '#FF5733';
                return '#FFCC99'; // Low queue
            },
            borderRadius: 10,
            barPercentage: 0.9,
            categoryPercentage: 0.8
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(tooltipItems) {
                            return tooltipItems[0].label;
                        },
                        label: function(context) {
                            return 'Osob: ' + context.raw;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#333',
                        font: {
                            size: 12
                        },
                        callback: function(value, index) {
                            return index % 2 === 0 ? this.getLabelForValue(value) : '';
                        },
                        maxRotation: 90,
                        minRotation: 90
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    },
                    beginAtZero: true
                }
            }
        }
    };

    new Chart(ctx, config);
});