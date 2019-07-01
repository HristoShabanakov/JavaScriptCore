class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;

        //The capacity property refers for the count of the hotel's rooms.
        this.rooms = {
            single: this.capacity * 0.5, // single rooms are 50 % of the given capacity
            double: this.capacity * 0.3, //double rooms are 30 % of the given capacity
            maisonette: this.capacity * 0.2, //maisonette rooms are 20 % of the given capacity
        }
    }

    //Returns an object, containing the following properties:
    get roomsPricing() {

        return {
            single: 50,
            double: 90,
            maisonette: 135,
        }
    }

    //Returns an object, containing the following properties:
    get servicesPricing() {

        return {
            food: 10,
            drink: 15,
            housekeeping: 25,
        }
    }

    rentARoom(clientName, roomType, nights) {

        let room = this.rooms[roomType];

        if (room === 0) {

            let info = '';

            info += `No ${roomType} rooms available!`;

            for (let room in this.rooms) {

                if (this.rooms[room] > 0) {
                    info += ` Available ${room} rooms: ${this.rooms[room]}.`;
                }
            }
            return info;
        } else {

            let client = {
                name: clientName,
                roomType: roomType,
                nights: nights,
                roomNumber: this.currentBookingNumber,
            };

            this.bookings.push(client);
            this.currentBookingNumber++;
            this.rooms[roomType]--;

            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${client.roomNumber}.`;
        }
    }

    roomService(currentBookingNumber, serviceType) {
        //Find the current client. 
        let client = this.bookings.find(b => b.roomNumber === currentBookingNumber);

        //If the given currentBookingNumber is invalid (non‐existent)
        if (!client) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        //If the requested service is invalid
        if (!this.servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`;
        }

        //You should create an additional property for the booking with the given currentBookingNumber, called services ( array), 
        //and add the given serviceType to it (if it is already created, just add the new serviceType to it).
        if (!client.hasOwnProperty('services')) {
            client['services'] = [];
        }

        client['services'].push(serviceType);

        return `Mr./Mrs. ${client.name}, Your order for ${serviceType} service has been successful.`;
    }

    checkOut(currentBookingNumber) {

        let client = this.bookings.find(b => b.roomNumber === currentBookingNumber);

        if (!client) {
            return `The booking ${currentBookingNumber} is invalid.`;
        } else {

            //You should calculate the due amount, as totalMoney, 
            //for the booking with the given currentBookingNumber, 
            //depending on the nights spent and the price of the roomType.
            let totalMoney = this.roomsPricing[client.roomType] * client.nights;

            let totalServiceMoney = 0;

            if (client.hasOwnProperty('services')) {

                for (let i = 0; i < client.services.length; i++) {
                    totalServiceMoney += this.servicesPricing[client.services[i]];
                }
            }

            this.rooms[client.roomType]++;
            let index = this.bookings.indexOf(client);
            this.bookings.splice(index, 1);

            if (totalServiceMoney > 0)
                return `We hope you enjoyed your time here, Mr./Mrs. ${client.name}. The total amount of money you have to pay is
                ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;

            return `We hope you enjoyed your time here, Mr./Mrs. ${client.name}. The total amount of money you have to pay is ${totalMoney} BGN.`;
        }
    }

    report() {

        let report = [];
        report.push(`${this.name.toUpperCase()} DATABASE:`);
        report.push('--------------------');

        if (this.bookings.length === 0) {
            report.push('There are currently no bookings.');
            return report.join('\n');
        }

        for (let i = 0; i < this.bookings.length; i++) {

            let client = this.bookings[i];

            report.push(`bookingNumber - ${client.roomNumber}`);
            report.push(`clientName - ${client.name}`);
            report.push(`roomType - ${client.roomType}`);
            report.push(`nights - ${client.nights}`);

            if (client.hasOwnProperty('services') && client.services.length) {
                report.push(`services: ${client.services.join(', ')}`);
            }

            report.push(`----------`);
        }
        report.pop();
        return report.join('\n');
    }
}

let brucy = new Hotel("Brucy", 191);

console.log(brucy.rentARoom('Manisha', 'maisonette', 4));
console.log(brucy.rentARoom('Shabby', 'double', 4));
console.log(brucy.rentARoom('Jussy', 'single', 10));

console.log(brucy.roomService(3, 'housekeeping'));
console.log(brucy.roomService(3, 'drink'));
console.log(brucy.roomService(2, 'room'));
console.log(brucy.roomService(1, 'food'));

console.log(brucy.report());