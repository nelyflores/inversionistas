var ctx = document.getElementById('ventas').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [{
            label: "Crecimiento de Ventas Millones de Pesos",

            borderColor: 'rgb(137,197,91)',
            data: [0.03, 0.07, 0.89, 1.25, 1.56],
        }]
    },

    // Configuration options go here
    ptions: {}
});
