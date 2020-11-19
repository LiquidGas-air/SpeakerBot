const skull = document.getElementById('skull_up');
const mouth = document.getElementById('skull_down');
const text_box = document.getElementById('textbox');
const say = document.getElementById('say');
const user_input = document.getElementById('input_text');
const button_v = document.getElementById('input_voice')
const button_s = document.getElementById('input_submit')
var query;
var mousedown = false;
var ggg;


button_v.addEventListener('click', val);
setTimeout(change_half, 500)
setTimeout(change, 600)
function change(){
    document.getElementById('skull_up_id').src='sprites/skull_eyes.png'
}
function change_half(){
    document.getElementById('skull_up_id').src='sprites/skul_-_-.png'
}
function change_close(){
    document.getElementById('skull_up_id').src='sprites/skull_no_eyes.png'
}
console.log(skull.src)

async function val() {
    user_input.style.backgroundColor = 'red';
    var carl = await eel.buttono()();
    user_input.style.backgroundColor = 'black';
    user_input.value = carl;
};


button_s.addEventListener('click', convers)
async function convers() {
    let man = user_input.value;
    query = await eel.conversation(man)();
    let text_js = document.createTextNode(query);
    var speed = 50;
    var i=0;
    user_input.value = null;
    say.innerHTML = '';
    typeWriter()
    function typeWriter() {
        let dur=speed*query.length
        if (i < query.length) {
            say.innerHTML += query.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        setTimeout(anime({
            targets: mouth,
            keyframes:[
                {translateY:30},
                {translateY:0},
            ],
            duration: 100
        }), dur/5)
    }
    ggg=await eel.saying(query)
};