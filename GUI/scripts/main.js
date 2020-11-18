var button = document.getElementById('start-button');
var well= document.getElementById('well');
var start= document.getElementById('start');
var head = document.getElementById('head');
button.addEventListener('click', move);

function move() {
    start.style.visibility='hidden';
    anime({
        targets: button,
        keyframes: [
            {
                scale: 1.5
            }, 
            {
                scale: 1
            },
            {
                height:250,
                width:0,
                easing:'easeInOutSine'
            },
            {
                width:5000,
                height:0,
                easing: 'easeInOutSine'
            }
        ],
        duration: 1000,
    });
    button.style.backgroundColor = 'white';
    anime(
    {
        targets:well,
        opacity:0,
        duration:1000
    }
    )
    hide()
    setTimeout(bright, 1300)
}
function bright(){
    window.location.href='game.html'
}
function hide(){
    well.classList.add('well')
}

eel.expose(my_javascript_function);
function my_javascript_function(a, b, c, d) {
    if (a < b) {
        console.log(c * d);
    }
}