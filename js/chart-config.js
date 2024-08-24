function createSalesChart(ctx, data) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: 'Sales ($)',
                    data: data.sales,
                    borderColor: '#4a4e69',
                    backgroundColor: 'rgba(74, 78, 105, 0.2)',
                    pointBackgroundColor: '#4a4e69',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7, // Larger point on hover
                    pointHoverBackgroundColor: '#4a4e69', // Hover color for points
                    pointHoverBorderColor: '#ffffff', // Hover border color for points
                },
                {
                    label: 'Orders',
                    data: data.orders,
                    borderColor: '#9a8c98',
                    backgroundColor: 'rgba(154, 140, 152, 0.2)',
                    pointBackgroundColor: '#9a8c98',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7, // Larger point on hover
                    pointHoverBackgroundColor: '#9a8c98', // Hover color for points
                    pointHoverBorderColor: '#ffffff', // Hover border color for points
                }
            ]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000, // Smooth animation for rendering
                easing: 'easeOutQuart'
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.dataset.label + ': $' + tooltipItem.raw.toLocaleString();
                        }
                    },
                    backgroundColor: '#333333',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 1
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        },
                        font: {
                            size: 14
                        }
                    },
                    title: {
                        display: true,
                        text: 'Amount ($)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)' // Light grid lines
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Month',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)' // Light grid lines
                    }
                }
            }
        }
    });
}

function createPieChart(ctx, data) {
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.labels,
            datasets: [
                {
                    data: data.data,
                    backgroundColor: ['#4a4e69', '#9a8c98', '#c9ada7'],
                    hoverOffset: 4,
                    borderWidth: 2,
                    borderColor: '#ffffff', // Border color for segments
                }
            ]
        },
        options: {
            responsive: true,
            animation: {
                animateRotate: true, // Rotate animation
                animateScale: true // Scale animation
            },
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    },
                    backgroundColor: '#333333',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 1
                }
            }
        }
    });
}

function createTopProductChart(ctx, data) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(p => p.name),
            datasets: [{
                label: 'Sales',
                data: data.map(p => p.sales),
                backgroundColor: '#4a4e69',
                borderColor: '#4a4e69',
                borderWidth: 1,
                hoverBackgroundColor: '#9a8c98', // Hover color for bars
                hoverBorderColor: '#ffffff', // Hover border color for bars
                hoverBorderWidth: 2 // Width of border on hover
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000, // Smooth animation for rendering
                easing: 'easeOutQuart'
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': $' + tooltipItem.raw.toFixed(2);
                        }
                    },
                    backgroundColor: '#333333',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 1
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toFixed(2);
                        },
                        font: {
                            size: 14
                        }
                    },
                    title: {
                        display: true,
                        text: 'Sales ($)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)' // Light grid lines
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Product',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)' // Light grid lines
                    }
                }
            }
        }
    });
}
