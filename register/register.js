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
            document.forms[0].submit();
        }
    } else if (index === 2) {
        document.forms[0].submit();

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


document.addEventListener('onload', checkReferral());
