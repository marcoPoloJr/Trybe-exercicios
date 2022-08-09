window.onload= function(){
    window.onload = function () {
        const clearBtn = document.querySelector('#clear-btn');
        clearBtn.addEventListener('click', clearFields);
        let submitBnt = document.querySelector('#submitBnt');
        submitBnt.addEventListener('click', function handleSubmit(event){
        event.preventDefault()
    })
}
}

function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }

