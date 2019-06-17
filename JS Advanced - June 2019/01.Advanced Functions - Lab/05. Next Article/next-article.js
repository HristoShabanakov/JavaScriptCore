function getArticleGenerator(input) {
    //Using Closure
    const div = document.getElementById('content');
    let counter = 0;

    function nextArticle() {
        if(counter >= input.length) return;
        //Returns each element of the input array.
        let html = `<article>
            <p>
            ${input[counter++]}
            </p>
            </article>`;

        div.innerHTML +=html
    }
    //Return reference to the function, not its execution!
    return nextArticle;
}