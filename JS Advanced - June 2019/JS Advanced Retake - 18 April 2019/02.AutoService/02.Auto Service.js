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



describe('Auto Service', function () {
    let autoService;

    this.beforeEach(function () {
        autoService = new AutoService(1);
    });

    it('the constructor should accept one parameter and two empty arrays', function () {
        const result = autoService;
        expect(result).to.deep.equal({
            garageCapacity: 1,
            workInProgress: [],
            backlogWork: []
        });
    });

    it('function availableSpace should return a number', function () {
        const result = autoService.availableSpace;
        expect(result).to.be.equal(1);
    });

    it('function repair car should return message Your doors were repaired.', function () {
        autoService.signUpForReview('Peter', 'CA1234CA', {
            'engine': 'MFRGG23',
            ' transmission': 'FF4418ZZ',
            'doors': 'broken'
        });

        const result = autoService.repairCar();
        expect(result).to.equal('Your doors were repaired.');
    });

    it('function repair car should return message Your car was fine.', function () {
        autoService.signUpForReview('Peter', 'CA1234CA', {
            'engine': 'MFRGG23',
            ' transmission': 'FF4418ZZ',
            'doors': 'fine'
        });

        const result = autoService.repairCar();
        expect(result).to.be.equal('Your car was fine, nothing was repaired.');
    });

    it('function repair car should return message: No clients, we are just chilling...', function () {

        autoService = new AutoService(0);
        const result = autoService.repairCar();

        expect(result).to.be.equal('No clients, we are just chilling...');
    });

    it('function carInfo should return the car object', function () {
        autoService = new AutoService(0);
        autoService.signUpForReview('Peter', 'CA1234CA', {
            'engine': 'MFRGG23',
            'transmission': 'FF4418ZZ',
            'doors': 'broken'
        });

        const expected = '{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}}';
        const actual = JSON.stringify(autoService.carInfo('CA1234CA', 'Peter'));

        expect(expected).to.be.equal(actual);
    });

    it('car info not found', function () {
        autoService.signUpForReview('Peter', 'CA1234CA', {
            'engine': 'MFRGG23',
            'transmission': 'FF4418ZZ',
            'doors': 'broken'
        });

        const expected = '{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}}';
        const actual = JSON.stringify(autoService.carInfo('CA1234CA', 'Peter'));

        expect(expected).to.be.equal(actual);
    });

});