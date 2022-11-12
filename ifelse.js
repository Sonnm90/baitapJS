// let value = prompt('What is the "official" name of JavaScript?', '');
// if (value == 'ECMAScript') {
//     alert('Right!');
// } else {
//     alert("You don't know? ECMAScript!");
// }


// let userName = prompt("Who's there?", '');
// if (userName == 'Admin') {
//     let pass = prompt('Password?', '');
//     if (pass == 'TheMaster') {
//         alert('Welcome!');
//     } else if (pass == null) {
//         alert('Canceled.');
//     } else {
//         alert('Wrong password');
//     }
// } else if (userName == null) {
//     alert('Canceled');
// } else {
//     alert("I don't know you");
// }


// let browser = prompt("What is your browser?", '');
// if (browser == 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser ==
//     'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }


// let browser = prompt("What is your browser?", '');
// switch (browser) {
//     case 'Edge':
//         alert("You've got the Edge!");
//         break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too');
//         break;
//     default:
//         alert('We hope that this page looks ok!');
// }


// let a = prompt('a?', '');
// if (a == 0) {
//     alert(0);
// }
// if (a == 1) {
//     alert(1);
// }
// if (a == 2 || a == 3) {
//     alert('2,3');
// }

// let a = prompt('a', '')
// switch (a) {
//     case '0':
//         alert(0);
//         break;
//     case '1':
//         alert(1);
//         break;
//     case '2':
//     case '3':
//         alert('2,3');
//         break;
//     default:
//         alert('vo nghia')
//         break;
// }

// let value = prompt('Type a number', 0);
// if (value > 0) {
//     alert(1);
// } else if (value < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }


// let a = parseInt(prompt('Type a number', '0'));
// switch (true) {
//     case a > 0:
//         alert(1);
//         break;
//     case a < 0:
//         alert(-1);
//         break;
//     case a == 0:
//         alert(0);
//         break;
// }


// let login = prompt("Who is there", '');
// if (login == 'Employee') {
//     alert('Hello');
// } else if (login == 'Director') {
//     alert('Greetings');
// } else if (login == '') {
//     alert('No login');
// } else {
//     alert('');
// }

// window.onload = init;
// var imgObj = document.getElementById('myBall');

// function init() {
//     imgObj = document.getElementById('myBall');
//     imgObj.style.postion = "relative";
//     imgObj.style.left = "0px";
// }
// function moveRight() {
//     imgObj = document.getElementById('myBall');
//     imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
// }


function upArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function downArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function leftArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function rightArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}
