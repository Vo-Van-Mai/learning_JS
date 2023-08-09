var h1 = document.querySelectorAll('h1');
for (var i = 0; i < h1.length; i++) {
    h1[i].onclick = function(e) {
        console.log(e.target);
    }
}
