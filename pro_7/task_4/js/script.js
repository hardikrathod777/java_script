class Shape {
    static circleArea(radius) {
        return 3.14 * radius * radius;
    }
    static rectangleArea(width, height) {
        return width * height;
    }
}

const Radius = 3;
const circleArea = Shape.circleArea(Radius);
console.log(`Circle Area: ${circleArea}`);

const Width = 5;
const Height = 10;
const rectangleArea = Shape.rectangleArea(Width, Height);
console.log(`Rectangle Area: ${rectangleArea}`);