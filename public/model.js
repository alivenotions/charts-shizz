let submitImageForm = document.getElementById('img-upload')
let imageInput = document.getElementById('img-input')
let imageDisplay = document.getElementById('img-display')
let toggleForm = document.getElementById('toggle-form')
let spinner = document.getElementById('spinner')
let ctx = document.getElementById("myChart").getContext('2d')

function submitImage(event, form) {
  event.preventDefault()
  readURL(imageInput)

  spinner.style.display = 'block'

  const formData = new FormData()
  let fileField = document.querySelector("input[type='file']")
  formData.append('photo', fileField.files[0])

  fetch('http://localhost:9099/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(response => {
      toggleForm.innerHTML = ''
      spinner.style.display = 'none'
      createChart(Object.keys(response), Object.values(response))
    })
}

function readURL(input) {
  imageDisplay.src = window.URL.createObjectURL(input.files[0])
  imageDisplay.setAttribute('style', 'display: inline-block; height: 150px; width: 150px')
}

function createChart(labels, data) {
  let myChart = new Chart(ctx, {
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
}

submitImageForm.addEventListener('submit', submitImage)
