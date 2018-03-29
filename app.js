
document.querySelector('#fetch').addEventListener('click', fetchData);

function fetchData() {
    // Create an XHR object:
    let xhr = new XMLHttpRequest();

    // Specify resource to fetch with "open" method:
    xhr.open('GET', 'material.txt', true);
    
    xhr.onload = function () {
        if(this.status === 200) {
            document.querySelector('#output').textContent = this.responseText;
        }
    };

    xhr.send();

}