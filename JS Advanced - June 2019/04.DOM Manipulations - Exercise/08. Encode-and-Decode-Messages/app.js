function encodeAndDecodeMessages() {

    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];

    let sendTextArea = document.getElementsByTagName('textarea')[0];
    let decodeTextArea = document.getElementsByTagName('textarea')[1];

    encodeButton.addEventListener('click', () => {
        let input = sendTextArea.value;
        let encodedMessage = '';

        for (let i = 0; i < input.length; i++) {
            encodedMessage += String.fromCharCode(input[i].charCodeAt(0) + 1);
        }

        decodeTextArea.value = encodedMessage
        sendTextArea.value = '';
    });

    decodeButton.addEventListener('click,', () => {

        let input = decodeTextArea.value;
        let decodedMessage = '';

        for (let i = 0; i < input.length; i++) {
            decodedMessage += String.fromCharCode(input[i].charCodeAt(0) - 1);
        }
        decodeTextArea.value = decodedMessage;
    });
}