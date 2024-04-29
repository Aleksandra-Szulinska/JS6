//COLOR CHANGE_________________________________________________________________________________
function setAndSaveColor(color) {

    document.body.style.backgroundColor = color;

    localStorage.setItem('backgroundColor', color);

    var icons = document.querySelectorAll('.icon');
    icons.forEach(function(icon) {
        icon.style.color = color;
    });
}
function getSavedColor() {
    return localStorage.getItem('backgroundColor');
}
window.onload = function() {
    var savedColor = getSavedColor();
    if (savedColor) {
        setAndSaveColor(savedColor);
    }
}
function toggleColor(color) {
    var checkbox = event.target;
    if (checkbox.checked) {
        setAndSaveColor(color);

        document.querySelectorAll('.colourDiv input[type="checkbox"]').forEach(function(otherCheckbox) {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
    } else {
        document.body.style.backgroundColor = '';
        localStorage.removeItem('backgroundColor');
    }
}
//LOG IN_________________________________________________________________________________
document.addEventListener("DOMContentLoaded", function() {
    const logInDisplay = document.getElementById('logIn-display');
    const numberButtons = document.querySelectorAll('.logIn-button');

    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            const number = this.textContent;
            logInDisplay.textContent += number;
        });
    });
});

const checkLogIn = document.getElementById('LogInArrow');

function checkLogin() {
    let logInDisplay = document.getElementById('logIn-display').textContent; // Corrected the way to get text content
    let messageElement = document.getElementById('logIn-display');
    if (logInDisplay === '1234') {
        window.location.href = 'Projects.html';
    } else {
        messageElement.textContent = "Wrong Password";
        setTimeout(() => {
            messageElement.textContent = ""; 
        }, 300);
    }
}

checkLogIn.addEventListener('click', checkLogin);
