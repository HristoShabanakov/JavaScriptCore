function notify(message) {
    let divElement = document.getElementById('notification');
    divElement.textContent = message;
    divElement.style.display = 'block';

    setTimeout(function () {
        divElement.style.display = 'none';
    }, 2000);
}