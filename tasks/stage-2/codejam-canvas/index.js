const workSpace = document.querySelector('canvas');
const matrixs = document.querySelector('.matrixs');
const colors = document.querySelector('.colors');
const sizeInput = document.querySelector('input');
const small = matrixs.querySelector('#small');
const medium = matrixs.querySelector('#medium');
const big = matrixs.querySelector('#big');
const redchoose = colors.querySelector('#red');
const bluechoose = colors.querySelector('#blue');

var currentcolor = undefined;
var md = false;
workSpace.addEventListener('mousedown', down);
workSpace.addEventListener('mouseup', toggledraw);

small.addEventListener('click', function () {
    let ref = 'https://raw.githubusercontent.com/AntonChanin/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';
    console.log(JSON.stringify(ref));
    var getJSON = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {
                callback(null, xhr.response);
            } else {
                callback(status);
            }
        };
        xhr.send();
    };
    console.log(sizeInput.value);
    getJSON(ref,
    function (err, data) {
        if (err != null) {
            alert('Something went wrong: ' + err);
        } else {
            if (sizeInput.value > 2) {
                sizeInput.value = 2;
            }
            var canvas = document.querySelector("canvas"), // Select our canvas element
            ctx = canvas.getContext("2d"), // Save the context we're going to use
            width = data[0].length, // Get the width of the array
            height = data.length, // Get the height of the array
            scale = 10 * sizeInput.value; // Scales the whole image by this amount, set to 1 for default size
            // Make sure the canvas is no larger than the size we need
            canvas.width = width * scale;
            canvas.height = height * scale;

            // Loop through each color and draw that section
            for (var row = 0; row < height; row++) {
                for (var col = 0; col < width; col++) { // Since there are nested arrays we need two for loops
                    ctx.fillStyle ='#' + data[row][col]; // Set the color to the one specified
                    ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle 
                    console.log(data[row][col]);
                }
            };
        }
    });

})

medium.addEventListener('click', function () {
    let ref = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';
    console.log(JSON.stringify(ref));
    var getJSON = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {
                callback(null, xhr.response);
            } else {
                callback(status);
            }
        };
        xhr.send();
    };
    getJSON(ref,
    function (err, data) {
        if (err != null) {
            alert('Something went wrong: ' + err);
        } else {
            if (sizeInput.value > 2) {
                sizeInput.value = 2;
            }
            var canvas = document.querySelector("canvas"), // Select our canvas element
            ctx = canvas.getContext("2d"), // Save the context we're going to use
            width = data[0].length, // Get the width of the array
            height = data.length, // Get the height of the array
            scale = 10 * sizeInput.value; // Scales the whole image by this amount, set to 1 for default size
            // Make sure the canvas is no larger than the size we need
            canvas.width = width * scale;
            canvas.height = height * scale;

            // Loop through each color and draw that section
            for (var row = 0; row < height; row++) {
                for (var col = 0; col < width; col++) { // Since there are nested arrays we need two for loops
                    ctx.fillStyle = 'rgba(' + data[row][col] + ')'; // Set the color to the one specified
                    ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle 
                    console.log('rgba(' + data[row][col] + ');');
                }
            };
        }
    });
    workSpace.classList.remove('big');
})

big.addEventListener('click', function () {
    if (sizeInput.value > 2) {
        sizeInput.value = 2;
    }
    var canvas = document.querySelector("canvas"), // Select our canvas element
        ctx = canvas.getContext("2d"); // Save the context we're going to use
        width = 256, // Get the width of the array
        height =256, // Get the height of the array
        scale = 1 * sizeInput.value; // Scales the whole image by this amount, set to 1 for default size
    // Make sure the canvas is no larger than the size we need
        canvas.width = width * scale;
        canvas.height = height * scale;
    // workSpace.classList.add('big');
    drawing = new Image();
    drawing.src = "./data/image.png"; // can also be a remote URL e.g. http://
    drawing.onload = function () {
        ctx.drawImage(drawing, 0, 0);
    }
})

workSpace.addEventListener('mousemove',
    function(evt) {
        let mousePos = getMousePos(workSpace, evt);
        let posx = mousePos.x;
        let posy = mousePos.y;
        draw(workSpace, posx, posy);
    });

function down() {
    md = true;
    console.log('down');
}

function toggledraw() {
    md = false;
    console.log('toggledraw');
}

function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return { 
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    }
}

function draw(canvas, posx, posy) {
    let context = canvas.getContext('2d');
    if (md) {
        context.fillRect(posx, posy, 4, 4);
    }
}

function chooseColor(context) {
    let ctx = workSpace.getContext("2d");
    if (context == redchoose) {
        currentColor = 'red';
        console.log(currentColor);
    } else if (context == bluechoose) {
        currentColor = 'blue';
        console.log(currentColor);
    }
    ctx.fillStyle = currentColor;
}