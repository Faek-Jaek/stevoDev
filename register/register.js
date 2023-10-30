var index = 0;
let buisAcc = false;
let nextButton = document.getElementById('next');
let backButton = document.getElementById('back');
let checkboxSection = document.getElementById('checkboxSection');
function nextReg() {    
    console.log(index+' to '+ (index+1));
    if (index === 0) {
        document.querySelectorAll('.page1').forEach(item => {
            item.style.height = '0';
            item.style.display = 'none';
        });

        index++;
        
        document.querySelectorAll('.page2').forEach(item => {
            item.style.height = '5vh';
            item.style.display = 'inherit';
        });

        nextButton.style.width = '20%';
        nextButton.innerText = 'Submit';

        backButton.style.width = '10%';
        backButton.style.visibility = 'visible';

        checkboxSection.style.visibility = 'visible';
    } else if (index === 1) {
        if (buisAcc) {
            document.querySelectorAll('.page2').forEach(item => {
                item.style.display = 'none';
                item.style.height = '0';
            });
            checkboxSection.style.visibility = 'hidden';
            document.querySelectorAll('.page3').forEach(item => {
                item.style.height = '5vh';
                item.style.display = 'inherit';
            });

            nextButton.innerText = 'Submit';
            index++;
        } else {
            collectFormData();
        }
    } else if (index === 2) {
        collectFormData();

    }
}
function backReg() {
    console.log(index+' to '+ (index+1));
    if (index === 0) {
        backButton.style.width = '0';
        backButton.style.visibility = 'hidden';
    } else if (index === 1) {
        document.querySelectorAll('.page2').forEach(item => {
            item.style.height = '0';
            item.style.display = 'none';
        });
        document.querySelectorAll('.page1').forEach(item => {
            item.style.height = '5vh';
            item.style.display = 'inherit';
        });
        nextButton.innerText = 'Next'
        backButton.style.width = '0';
        backButton.style.visibility = 'hidden';
        index--;
    } else if (index === 2) {
        document.querySelectorAll('.page3').forEach(item => {
            item.style.height = '0';
            item.style.display = 'none';
        });
        document.querySelectorAll('.page2').forEach(item => {
            item.style.height = '5vh';
            item.style.display = 'inherit';
        });
        checkboxSection.style.visibility = 'inherit';
        nextButton.innerText = 'Next';
        index--;
    }
}

function buisAccScript() {
    var checkbox = document.getElementById('checkbox');
    if (checkbox.checked) {
        buisAcc = true;
        nextButton.innerText = 'Next';
    } else {
        buisAcc = false;
        nextButton.innerText = 'Submit';
    }
}
let referral;
function checkReferral() {
    var url = document.URL;
    console.log('Current URL: '+url);
    if(url.includes('referral=')){
        referral = url.slice((url.indexOf('referral=')+9),(url.length));
        document.getElementById('referral').value = referral;
    }
}
function collectFormData() {
    
    // Create an object to store the form data
    var userData = {};
  
    // Select all input elements within the form
    var formInputs = document.querySelectorAll('.field');

    // Iterate over the input elements and add their values to the userData object
    formInputs.forEach(input => {
      userData[input.id] = input.value;
    });

    // Convert the userData object to a JSON string
    var jsonData = JSON.stringify(userData);
    
    // Send the JSON data to your Express server using an HTTP request
    fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    })
    .then(response => {
      if (response.ok) {
        // Handle a successful response from the server
        console.log('Data sent successfully');
      } else {
        // Handle any errors from the server
        console.error('Failed to send data');
      }
    })
    .catch(error => {
      // Handle any network errors
      console.error('Network error:', error);
    });
    
}

document.addEventListener('onload', checkReferral());
