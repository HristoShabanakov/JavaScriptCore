// Example of a WORKING PizzUni Class
const expect = require("chai").expect;

class PizzUni {
    constructor() {
        this.registeredUsers = [];
        this.availableProducts = {
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        };
        this.orders = [];
    }

    registerUser(email) {

        const user = this.doesTheUserExist(email);

        if (user) {
            throw new Error(`This email address (${email}) is already being used!`)
        }

        const currentUser = {
            email,
            orderHistory: []
        };

        this.registeredUsers.push(currentUser);

        return currentUser;
    }

    makeAnOrder(email, orderedPizza, orderedDrink) {

        const user = this.doesTheUserExist(email);

        if (!user) {
            throw new Error(`You must be registered to make orders!`);
        }

        const isThereAPizzaOrdered = this.availableProducts.pizzas.includes(orderedPizza);

        if (!isThereAPizzaOrdered) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        }

        let userOrder = {
            orderedPizza
        };

        const isThereADrinkOrdered = this.availableProducts.drinks.includes(orderedDrink);

        if (isThereADrinkOrdered) {
            userOrder.orderedDrink = orderedDrink;
        }

        user.orderHistory.push(userOrder);

        const currentOrder = {
            ...userOrder,
            email,
            status: 'pending'
        };
        this.orders.push(currentOrder);

        return this.orders.length - 1;
    }

    detailsAboutMyOrder(id) {
        if (this.orders[id]) {
            return `Status of your order: ${this.orders[id].status}`;
        }
    }

    doesTheUserExist(email) {
        return this.registeredUsers.filter((user) => user.email === email)[0];
    }

    completeOrder() {
        if (this.orders.length > 0) {
            const index = this.orders.findIndex((o) => o.status === "pending");
            this.orders[index].status = 'completed';

            return this.orders[index];
        }
    }
}


describe('PizzUni', function () {
    let pizzUni;

    this.beforeEach(function () {
        pizzUni = new PizzUni();
    });

    it('constructor should have 3 properties', function () {
        let result = pizzUni;

        expect(result).to.deep.equal({
            registeredUsers: [],
            availableProducts: {
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            },
            orders: []
        });
    });

    it('make order no register user should throw an error', function () {
        //let result = pizzUni.makeAnOrder('shabby', 'Italian Style', 'Fanta');

        expect(function () {
            pizzUni.makeAnOrder('shabby', 'Italian Style', 'Fanta');
        }).to.throw('You must be registered to make orders!');
    });

    it('make order no pizza order should throw error', function () {
        pizzUni.registerUser('shabby');
        expect(function () {
            pizzUni.makeAnOrder('shabby', 'Fanta');
        }).to.throw('You must order at least 1 Pizza to finish the order.');
    });

    it('makeOrder should push to an object to orders array', function () {
        pizzUni.registerUser('shabby');
        pizzUni.makeAnOrder('shabby', 'Italian Style', 'Fanta');

        let result = pizzUni.orders;
        expect(result).to.deep.equal([{
            email: 'shabby',
            orderedDrink: 'Fanta',
            orderedPizza: 'Italian Style',
            status: 'pending'
        }]);
    });

    //Maybe not passing!
    it('registerUser should throw an error', function () {
        pizzUni.registerUser('shabby');
        expect(function () {
            pizzUni.registerUser('shabby');
        }).to.throw('This email address (shabby) is already being used!');
    });

    it('detailsAboutMyOrder should work properly', function () {
        pizzUni.registerUser('shabby');
        pizzUni.makeAnOrder('shabby', 'Italian Style', 'Fanta');
        let result = pizzUni.detailsAboutMyOrder(0);
        expect(result).to.be.equal('Status of your order: pending');

    });

    it('complete order should work properly', function () {
        pizzUni.registerUser('shabby');
        pizzUni.makeAnOrder('shabby', 'Italian Style', 'Fanta');
        pizzUni.completeOrder();
        let result = pizzUni.detailsAboutMyOrder(0);
        expect(result).to.be.equal('Status of your order: completed');
    });

    it('doesTheUserExist should work properly', function () {
        pizzUni.registerUser('shabby');
        let result = pizzUni.doesTheUserExist('shabby');

        expect(result).to.deep.equal({
            email: 'shabby',
            orderHistory: []
        });
    });



});

module.exports = PizzUni; // This piece of code exports the PizzUni Class, so it could be accessed in other files.