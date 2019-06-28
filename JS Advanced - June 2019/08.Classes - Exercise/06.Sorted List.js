class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.size++;
        this.list.sort((a, b) => {
            return a - b;
        })
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.list.splice(index, 1);
            this.size--;
        }

    }

    get(index) {
        if (index >= 0 && index < this.size) {
            return this.list[index];

        }
    }
}