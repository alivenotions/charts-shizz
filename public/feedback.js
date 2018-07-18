let feedbackSubmit = document.getElementById('feedback-submit')
let missedFeatures = document.querySelector('.tags-input')

function sendFeedback() {
  let checkBoxNodeList = document.querySelectorAll('input[type="checkbox"]')
  const checkBoxes = Array.from(checkBoxNodeList)
  const wrongFeatures = checkBoxes.filter(box => box.checked).map(box => box.id)
  
  const missedFeaturesInput = missedFeatures.innerText.split('\n')
  
  const feedbackResponseObject = {
    wrongFeatures,
    missedFeatures: missedFeaturesInput.slice(0, missedFeaturesInput.length - 1)
  }
  console.log(feedbackResponseObject)
}

feedbackSubmit.addEventListener('click', sendFeedback)
