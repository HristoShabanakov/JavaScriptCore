function validate() {
    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', () => {
        let year = document.getElementById('year').value;

        if(Number(year) < 1900 || Number(year) > 2100){
            return;
        }

        let month = document.getElementById('month');

        let selectedOption = month.options[month.selectedIndex].value;

        let monthAsNum = getMonthFromString(selectedOption);

        let date = document.getElementById('date').value;

        let maleGenderButton = document.getElementById('male');

        let genderDigit = maleGenderButton.checked ? 2 : 1;

        let regionalCode = document.getElementById('region').value;

        if(Number(regionalCode) < 43 || Number(regionalCode) > 999){
            return;
        }

        if(regionalCode.length === 3){
            regionalCode = regionalCode[0] + regionalCode[1];
        }

        let array = generateArray(year, monthAsNum, date, regionalCode, genderDigit);

        let result = getSum(array);

        array.push(result);

        let resultElement = document.getElementById('egn');
        resultElement.textContent = `Your EGN is: ${array.join('')}`;

        document.getElementById('year').value = '';
        month.options[0].selected = true;
        document.getElementById('date').value = '';
        document.getElementById('male').checked = false;
        document.getElementById('female').checked = false;
        document.getElementById('region').value = '';
    });

    function getSum(array) {
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];

        let sum = 0;

        for (let i = 0; i < 9; i++) {
            sum += array[i] * weights[i];
        }

        let result = sum % 11;

        if(result === 10){
            result = 0;
        }

        return result;
    }

    function generateArray(year, monthAsNum, date, regionalCode, genderDigit) {
        let yearFirstNum = Number(year[year.length - 1]);
        let yearBeforeLastNum = Number(year[year.length - 2]);

        let monthFirstNum = Number(monthAsNum.toString().length === 2 ? 1 : 0);
        let monthSecondNum = Number(monthAsNum.toString().length === 2 ?
            monthAsNum.toString()[monthAsNum.toString().length - 1] : monthAsNum.toString());

        let dayFirstNumber = date.length === 2 ? Number(date[0]) : 0;
        let daySecondNumber = date.length === 2 ? Number(date[1]) : Number(date);

        let regionalCodeFirstDigit = Number(regionalCode[0]);
        let regionalCodeSecondDigit = Number(regionalCode[1]);

        return [yearBeforeLastNum,
            yearFirstNum,
            monthFirstNum,
            monthSecondNum,
            dayFirstNumber, daySecondNumber, regionalCodeFirstDigit, regionalCodeSecondDigit, genderDigit];
    }

    function getMonthFromString(mon){
        return new Date(Date.parse(mon + " 1, 2012")).getMonth()+ 1;
    }
}