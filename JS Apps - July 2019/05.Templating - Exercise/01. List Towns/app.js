function attachEvents() {

    let loadTownsBtn = document.getElementById('btnLoadTowns');

    loadTownsBtn.addEventListener('click', loadTowns);

    function loadTowns() {

        let towns = document.getElementById('towns')
            .value
            .split(', ')
            .map(element =>
                ({
                    name: element
                })
            );
        renderTowns(towns);
    }

    function renderTowns(towns) {
        //Get the template by id and change his innerHTML

        let template = document.getElementById('towns-template').innerHTML;
        let compiled = Handlebars.compile(template);
        let rendered = compiled({
            towns
        });

        document.getElementById('root').innerHTML = rendered;
    }
}

attachEvents();