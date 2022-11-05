const rectangle = require('../js/rectangle');

test('correctly calculates the perimeter',()=>{
    expect(rectangle.getRectanglePerimeter(20, 10)).toBe(60);
});

test('correctly calculates the area',()=>{
    expect(rectangle.getRectangleArea(20, 10)).toBe(200);
});

//testing with console.log

const log = console.log; // save original console.log function
beforeEach(() => {
    console.log = jest.fn(); // create a new mock function for each test
});
afterAll(() => {
    console.log = log; // restore original console.log after all tests
});
test("should display correct information about the rectangle", () => {
    rectangle.getRectangleInfo(20, 10)
    expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining("The perimeter of a rectangle is 60 and the area is 200")
    );
});
