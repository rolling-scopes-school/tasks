const workSpace = document.querySelector('canvas');
const matrixs = document.querySelector('.matrixs');
const small = matrixs.querySelector('#small');
const medium = matrixs.querySelector('#medium');
const big = matrixs.querySelector('#big');

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
    getJSON(ref,
    function (err, data) {
        if (err != null) {
            alert('Something went wrong: ' + err);
        } else {
            var canvas = document.querySelector("canvas"), // Select our canvas element
            ctx = canvas.getContext("2d"), // Save the context we're going to use
            width = data[0].length, // Get the width of the array
            height = data.length, // Get the height of the array
            scale = 10; // Scales the whole image by this amount, set to 1 for default size
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
            var canvas = document.querySelector("canvas"), // Select our canvas element
            ctx = canvas.getContext("2d"), // Save the context we're going to use
            width = data[0].length, // Get the width of the array
            height = data.length, // Get the height of the array
            scale = 10; // Scales the whole image by this amount, set to 1 for default size
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
    var canvas = document.querySelector("canvas"), // Select our canvas element
        ctx = canvas.getContext("2d"), // Save the context we're going to use
        width = 0, // Get the width of the array
        height = 0, // Get the height of the array
        scale = 0; // Scales the whole image by this amount, set to 1 for default size
    // Make sure the canvas is no larger than the size we need
        canvas.width = width * scale;
        canvas.height = height * scale;
        workSpace.classList.add('big');
})