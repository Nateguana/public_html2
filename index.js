// set emoji
document.getElementById('year').innerHTML = twemoji.parse('2️⃣0️⃣2️⃣5️⃣');
// throw e;
// bounce image 
var dir = [-1, 1];
var coords = [0, 0];
var rotate = 0;
var rotate_vel = 0;
var speed = 5;
var bouncer = document.getElementsByTagName('bouncer')[0];
var video = document.getElementsByTagName('video')[0];
var is_started = false;

function change_rotate() {
    rotate_vel = 100 + Math.random() * 300 - 90;
}
function step() {
    var rect = bouncer.getBoundingClientRect();
    var body = document.body;

    var width = body.scrollWidth - rect.width * .75
    var height = body.scrollHeight - rect.height * .75

    if (!is_started) {
        coords = [width, 0];
        is_started = true;
    }

    // move
    coords[0] += dir[0] * speed
    coords[1] += dir[1] * speed
    rotate += rotate_vel

    // bounce
    if (coords[0] < 0 && dir[0] < 0) {
        dir[0] *= -1;
        change_rotate();
    }
    if (coords[1] < 0 && dir[1] < 0) {
        dir[1] *= -1;
        change_rotate();
    }
    if (coords[0] > width && dir[0] > 0) {
        dir[0] *= -1;
        change_rotate();
    }
    if (coords[1] > height && dir[1] > 0) {
        dir[1] *= -1;
        change_rotate();
    }


    //set
    bouncer.style.left = coords[0] + 'px';
    bouncer.style.top = coords[1] + 'px';
    bouncer.style.right = "";
    bouncer.style.transform = `rotate(${rotate}deg)`;

    requestAnimationFrame(step);
}
change_rotate();
step()


// play video

var play_interval;

function play() {
    video.play().then(() => {
        console.log("played");
        clearInterval(play_interval);
    }).catch(() => { })
}

play_interval = setInterval(play, 100)

// 

var graphic = document.getElementsByTagName('graphic')[0];

function graphicDesignIsMyPassion(ev) {
    graphic.classList.toggle("graphic_hide");
    ev.preventDefault()
}

function graphicMove() {
    graphic.classList.toggle("graphic_move");
}

setInterval(graphicMove, 100)

function spin(angle) {
    let new_angle = (angle + 10) % 360;
    document.body.style = `--angle:${new_angle}deg`
    if (new_angle != 135)
        requestAnimationFrame(() => spin(new_angle))
}

