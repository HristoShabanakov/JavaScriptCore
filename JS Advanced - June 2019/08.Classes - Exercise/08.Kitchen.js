class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionHistory = [];
    }

    loadProducts(productsArray) {
        for (let product of productsArray) {

            let [productName, productQuantity, productPrice] = product.split(' ');
            productPrice = +productPrice;
            productQuantity = +productQuantity;

            if (this.budget >= productPrice) {

                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = 0;
                }

                this.productsInStock[productName] += productQuantity;
                this.budget -= productPrice;
                this.actionHistory.push(`Successfully loaded ${productQuantity} ${productName}`);

            } else {
                this.actionHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.actionHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {

        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in our menu, try something different.`;
        }

        this.menu[meal] = {
            products: neededProducts,
            price: +price
        };

        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        //If menu is empty, just print the message:
        //The Object.keys() method returns an array of a given object's own property names, 
        //in the same order as we get with a normal loop.

        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        let input = '';

        for (let meal of Object.keys(this.menu)) {
            input += `${meal} - $ ${this.menu[meal].price}\n`;
        }

        return input;
    }

    makeTheOrder(mealName) {
        if (!Object.keys(this.menu).includes(mealName)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        const meal = this.menu[mealName];

        for (let neededProduct of meal.products) {

            let [productName, productQuantity] = neededProduct.split(' ');
            productQuantity = +productQuantity;

            if (!this.productsInStock.hasOwnProperty(productName) ||
                this.productsInStock[productName] < productQuantity) {
                return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`;
            }
        }

        for (let neededProduct of meal.products) {

            let [productName, productQuantity] = neededProduct.split(' ');
            productQuantity = +productQuantity;

            this.productsInStock[productName] -= productQuantity;
        }

        this.budget += meal.price;

        return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${meal.price}.`;
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));