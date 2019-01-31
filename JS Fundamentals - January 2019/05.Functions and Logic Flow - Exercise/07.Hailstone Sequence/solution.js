
    function getNext() {
        let input = document.getElementById('num').value;
        while (input) {
            document.getElementById('result').textContent += `${input} `;
            if (input % 2 === 0) {           
                input = input / 2;
            } else {
    
                input = input * 3 + 1;
            }
            if (input === 1) {
                document.getElementById('result').textContent += `${input} `;
                break;
            }    
        }    
    }
