const expect = require("chai").expect;

class FilmStudio {

    constructor(studioName) {
        this.name = studioName;
        this.films = [];
    }

    casting(actor, role) {
        let isTheActorIsUnemployed = true;
        let output;

        if (this.films.length) {

            for (let f of this.films) {

                let roles = f.filmRoles.filter((r) => r.role === role);

                if (roles.length) {
                    let filmIndex = this.films.indexOf(f);
                    let wantedRole = this.films[filmIndex].filmRoles.filter((fR) => fR.role === role)[0];
                    let roleIndex = this.films[filmIndex].filmRoles.indexOf(wantedRole);

                    this.films[filmIndex].filmRoles[roleIndex].actor = actor;
                    isTheActorIsUnemployed = false;
                    output = `You got the job! Mr. ${actor} you are next ${role} in the ${f.filmName}. Congratz!`;
                    break;
                }
            }

            if (isTheActorIsUnemployed) {
                output = `${actor}, we cannot find a ${role} role...`;
            }

        } else {
            output = `There are no films yet in ${this.name}.`;
        }

        return output;
    }

    makeMovie(filmName, roles) {

        if (arguments.length === 2) {

            let firstArgIsString = typeof arguments[0] === 'string';
            let secondArgIsArray = arguments[1] instanceof Array;

            if (firstArgIsString && secondArgIsArray) {
                let findedFilms = this.films.filter((f) => f.filmName.includes(filmName));

                let filmRoles = roles.reduce((acc, cur) => {
                    let curFilmRole = {
                        role: cur,
                        actor: false
                    };
                    acc.push(curFilmRole);
                    return acc;
                }, []);

                let film = {
                    filmName,
                    filmRoles
                };

                if (findedFilms.length > 0) {
                    film.filmName += ` ${++findedFilms.length}`;
                }

                this.films.push(film);
                return film;
            } else {
                throw ('Invalid arguments')
            }

        } else {
            throw ('Invalid arguments count')
        }
    }

    lookForProducer(film) {

        let f = this.films.filter((f) => f.filmName === film)[0];
        let output;

        if (f) {
            output = `Film name: ${f.filmName}\n`;
            output += 'Cast:\n';
            Object.keys(f.filmRoles).forEach((role) => {
                output += `${f.filmRoles[role].actor} as ${f.filmRoles[role].role}\n`;
            });
        } else {
            throw new Error(`${film} do not exist yet, but we need the money...`)
        }

        return output;
    }
}


//Testing the class
describe("Film studio", function () {
    let sampleInstance;
    //Creating a new instance of the class.
    this.beforeEach(function () {
        sampleInstance = new FilmStudio('Pesho');
    });

    //Testing the constructor
    it('testing constructor studioName property', function () {
        expect(sampleInstance.name).to.equal('Pesho');
    });

    //Films property should be empty array.
    it('testing constructor films property', function () {
        expect(sampleInstance.films).to.eql([]);
    });

    //Creating a new filmName
    it('testing makeMovie filmName', function () {
        let result = sampleInstance
            .makeMovie('The Avengers', ['Thor', 'Hulk', 'Iron-Man']);

        expect(result.filmName).to.equal('The Avengers');
    });

    //Comparing collections of [{}] use to.deep.equal
    //Input => filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor']));
    //Output => { role: 'Iron-Man', actor: false },{ role: 'Thor', actor: false },
    it('testing makeMovie property roles', function () {
        let result = sampleInstance
            .makeMovie('The Avengers', ['Thor', 'Hulk']);

        expect(result.filmRoles).to.deep.equal([{
            role: 'Thor',
            actor: false
        }, {
            role: 'Hulk',
            actor: false
        }]);
    });

    //'Invalid arguments count'
    //Testing makeMovie without setting the name of the movie
    it('testing makeMovie with few arguments', function () {
        expect(() => sampleInstance.makeMovie(['Iron-Man', 'Thor'])).to.throw('Invalid arguments count');
    });

    //'Invalid arguments'
    //Instead a string as name input will be a number
    it('testing makeMovie with number as argument', function () {
        expect(() => sampleInstance.makeMovie(7, ['Iron-Man', 'Thor'])).to.throw('Invalid arguments');
    });

    //Should throw an error : film do not exist yet, but we need the money...
    it('tesing lookForProducer with non existing movie', function () {
        sampleInstance.makeMovie('The Avengers', ['Iron-Man', 'Thor']);
        expect(() => sampleInstance.lookForProducer('Avengers')).to.throw('Avengers do not exist yet, but we need the money...');
    });

    //Testing lookForProducer prints correct info
    it('function lookForProducer with right arguments', function () {
        sampleInstance.makeMovie('The Avengers', ['Iron-Man', 'Thor']);
        const result = sampleInstance.lookForProducer('The Avengers');
        expect(result).to.equal('Film name: The Avengers\nCast:\nfalse as Iron-Man\nfalse as Thor\n');
    });
    //Testing make prinst the correct info
    it('testing makeMove with right casting', function () {
        sampleInstance.makeMovie('The Avengers', ['Thor', 'Iron-Man']);
        const result = sampleInstance.casting('Pesho', 'Thor');
        expect(result).to.equal('You got the job! Mr. Pesho you are next Thor in the The Avengers. Congratz!');
    });
    //Testing make movie with wrong non existing parameter
    it('testing makeMovie with correct casting', function () {
        sampleInstance.makeMovie('The Avengers', ['Thor', 'Iron-Man']);
        const result = sampleInstance.casting('Pesho', 'spiderman');
        expect(result).to.equal('Pesho, we cannot find a spiderman role...');
    });

    it('testing casting', function () {
        const result = sampleInstance.casting('Pesho', 'spiderman');
        expect(result).to.equal('There are no films yet in Pesho.');
    });

});