var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [{
            label: "Lineas de transporte Registradas",
            backgroundColor: 'rgb(137,197,91)',
            borderColor: 'rgb(137,197,91)',
            data: [23, 203, 490, 843, 1002],
        }]
    },

    // Configuration options go here
    options: {
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero:true
                 }
             }]
         }
     }
 });
