class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointOne, pointTwo) {
        const a = Math.pow(pointOne.x - pointTwo.x, 2);
        const b = Math.pow(pointOne.y - pointTwo.y, 2);
        const distance = Math.sqrt(a + b);

        return distance;
    }
}