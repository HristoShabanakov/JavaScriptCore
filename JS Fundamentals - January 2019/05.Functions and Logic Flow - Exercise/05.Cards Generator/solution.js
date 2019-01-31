function solve() {
    let button = document.getElementsByTagName('button')[0];

    let cards = document.getElementById('cards');

    button.addEventListener('click', () =>{
        let fromValue = document.getElementById('from').value;
        let toValue = document.getElementById('to').value;
        let selectElement = document.getElementsByTagName('select')[0];

        let selectedOption = selectElement.options[selectElement.selectedIndex].value;
        let unicode = selectedOption.split(' ')[1];

        let fromNum = getValueAsNum(fromValue);
        let toNum = getValueAsNum(toValue);

        for (let i = fromNum; i <= toNum; i++) {
            let div = document.createElement('div');
            div.className = 'card';

            let middlePText;

            if(i === 11){
                middlePText = 'J';
            } else if(i === 12){
                middlePText = 'Q';
            } else if (i === 13){
                middlePText = 'K';
            } else if (i === 14){
                middlePText = 'A';
            } else {
                middlePText = i.toString();
            }

            let firstP = createParagraph(unicode);
            let secondP = createParagraph(middlePText);
            let thirdP = createParagraph(unicode);

            div.appendChild(firstP);
            div.appendChild(secondP);
            div.appendChild(thirdP);

            cards.appendChild(div);
        }

        document.getElementById('from').value = '';
        document.getElementById('to').value = '';
        selectElement.selectedIndex = 0;
    });

    function createParagraph(paragraphText) {
        let p = document.createElement('p');
        p.textContent = paragraphText;

        return p;

    }

    function getValueAsNum(strValue) {
        if(strValue === 'J'){
            return 11;
        } else if(strValue === 'Q'){
            return 12;
        } else if(strValue === 'K'){
            return 13;
        } else if(strValue === 'A'){
            return 14;
        } else {
            return Number(strValue);
        }
    }
}