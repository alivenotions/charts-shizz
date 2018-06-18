var ctx = document.getElementById("myChart").getContext('2d')
var dataJSON = {
  "Sapphire": 0.10110812727361917,
  "Ruby": 97.38210439682007,
  "Square": 94.52970027923584,
  "WhiteGoldRing": 99.98904466629028,
  "RoundBrilliant": 80.41327595710754,
  "Diamond": 13.671603798866272,
  "Shoulder": 23.574328422546387
}

var labels = Object.keys(dataJSON)
var data = Object.values(dataJSON)

var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Accuracy',
      data: data,
      backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
      borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
      borderWidth: 1
        }]
  },
  options: {
    animation: {
      easing: 'easeOutSine'
    },
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Accuracy model'
    },
    scales: {
      xAxes: [{
        ticks: {
          max: 100,
          min: 0
        }
        }]
    }
  }
})
