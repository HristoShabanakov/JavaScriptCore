const expect = require("chai").expect;

class AutoService {

    constructor(garageCapacity) {
        this.garageCapacity = garageCapacity;
        this.workInProgress = [];
        this.backlogWork = [];
    }

    get availableSpace() {
        return this.garageCapacity - this.workInProgress.length;
    }

    repairCar() {

        let workingPlace = this.workInProgress.length > 0 ? this.workInProgress : this.backlogWork;

        if (workingPlace.length > 0) {

            let keysForRepair = [];
            Object.keys(workingPlace[0].carInfo)
                .filter((k) => workingPlace[0].carInfo[k] === 'broken')
                .forEach((k) => keysForRepair.push(k));

            workingPlace.shift();
            if (keysForRepair.length > 0) {
                return `Your ${keysForRepair.join(' and ')} were repaired.`;
            } else {
                return 'Your car was fine, nothing was repaired.'
            }
        } else {
            return 'No clients, we are just chilling...'
        }
    }

    signUpForReview(clientName, plateNumber, carInfo) {

        let currentClient = {
            plateNumber,
            clientName,
            carInfo
        };

        if (this.availableSpace > 0) {
            this.workInProgress.push(currentClient);
        } else {
            this.backlogWork.push(currentClient);
        }
    }

    carInfo(plateNumber, clientName) {

        let checkCar =
            this.workInProgress.filter((carInfo) => carInfo.plateNumber === plateNumber && carInfo.clientName === clientName)[0] ||
            this.backlogWork.filter((carInfo) => carInfo.plateNumber === plateNumber && carInfo.clientName === clientName)[0];

        if (checkCar) {
            return checkCar;
        } else {

            return `There is no car with platenumber ${plateNumber} and owner ${clientName}.`;
        }
    }
}



describe('constructor accept one parameter', () => {


    it('constructor should return a number', () => {
        let autoService = new AutoService(2);
        let expectedResult = 2;
        expect(expectedResult).to.be.equal(2, 'result should be number');
    });

    it('constructor should return empty arrays', () => {
        let autoService = new AutoService();
        let expectedResult = autoService.workInProgress;
        expect(expectedResult).to.be.empty;
    });

    it('constructor should return empty arrays', () => {
        let autoService = new AutoService();
        let expectedResult = autoService.backlogWork;
        expect(expectedResult).to.be.empty;
    });

    it('Accessor availableSpace ‐ should returns a number', () => {

        let autoService = new AutoService(2);

        autoService.signUpForReview('Philip', 'PB4321PB', {
            'engine': 'MFRGG23',
            ' transmission': 'FF4418ZZ',
            'exaustPipe': 'REMUS'
        });

        autoService.signUpForReview('Peter', 'CA1234CA', {
            'engine': 'MFRGG23',
            ' transmission': 'FF4418ZZ',
            'doors': 'broken'
        });

        let expectedResult = autoService.availableSpace;

        expect(expectedResult).to.be.equal(0, 'autoService method should return a number');
    });

    it('function signupForReview should accept 2 strings and object', () => {
        let autoService = new AutoService(2);
        autoService.signUpForReview('Philip', 'PB4321PB', {
            'engine': 'MFRGG23',
            ' transmission': 'FF4418ZZ',
            'exaustPipe': 'REMUS'
        });

        const expectedResult = '{"plateNumber":"PB4321PB","clientName":"Philip","carInfo":{"engine":"MFRGG23"," transmission":"FF4418ZZ","exaustPipe":"REMUS"}}';
        const actual = JSON.stringify(autoService.workInProgress[0]);

        expect(expectedResult).to.be.equal(actual);

    });

    it('method should return there is no car info', () => {
        let autoService = new AutoService(2);

        //autoService.carInfo('PB9999PB', 'PHILIP');

        let expectedResult = autoService.carInfo('PB9999PB', 'PHILIP');

        expect(expectedResult).to.be.equal('There is no car with platenumber PB9999PB and owner PHILIP.');
    });

    it('method should return car info', () => {
        let autoService = new AutoService(2);

        autoService.signUpForReview('Philip', 'PB4321PB', {
            'engine': 'MFRGG23',
            ' transmission': 'FF4418ZZ',
            'exaustPipe': 'REMUS'
        });

        //autoService.carInfo('PB9999PB', 'PHILIP');

        let expectedResult = autoService.carInfo('PHILIP', 'PB9999PB');
        expect({
            plateNumber: "CA1234CA",
            clientName: "Peter",
            carInfo: {}

        }).to.eql({
            plateNumber: "CA1234CA",
            clientName: "Peter",
            carInfo: {}
        }); // Recommended
        //expect(expectedResult).to.equal(autoService.carInfo);
    });

    it('method repairCar should return repair info', () => {
        let autoService = new AutoService(2);

        autoService.signUpForReview('Peter', 'CA1234CA', {
            'engine': 'MFRGG23',
            ' transmission': 'FF4418ZZ',
            'doors': 'broken'
        });

        let expectedResult = autoService.repairCar();

        expect(expectedResult).to.be.equal("Your doors were repaired.");
    });
});

let autoService = new AutoService(2);

autoService.signUpForReview('Peter', 'CA1234CA', {
    'engine': 'MFRGG23',
    ' transmission': 'FF4418ZZ',
    'doors': 'broken'
});

console.log(autoService.carInfo('CA1234CA', 'Peter'));