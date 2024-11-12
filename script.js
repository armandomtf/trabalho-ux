setInterval(function () {
    document.getElementById("bemvindo").style.color = 
        `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}, 300);
