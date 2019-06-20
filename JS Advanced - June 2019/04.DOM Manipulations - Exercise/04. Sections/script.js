function create(words) {

    let container = document.getElementById('content');

    for (let word of words) {
        let divElement = document.createElement('div');
        let paragraphElement = document.createElement('p');

        paragraphElement.textContent = word;
        paragraphElement.style.display = 'none';

        divElement.appendChild(paragraphElement);
        divElement.addEventListener('click', () => {
            paragraphElement.style.display = 'inline-block';

        });
        divElement.addEventListener('dblclick', () => {
            paragraphElement.style.color = 'yellow';
        });
        container.appendChild(divElement);
    }
}