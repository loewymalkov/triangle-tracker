import { Triangle } from './../src/triangle.js';
describe('Triangle', function() {

  it('should test whether a Triangle has three sides', function() {
    var triangle = new Triangle(3,4,5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);
  });


  it('should correctly determine whether three sides are not a triangle', function() {
    var triangle = new Triangle(12,3,3);
    console.log(triangle);
    expect(triangle.checkType()).toEqual("not a triangle");
  });

  it('should determine whether 3 sides of the triangle are equal', function() {
    var triangle = new Triangle(3,3,3);
    expect(triangle.checkType()).toEqual("it is an equilateral triangle");
  });

  it('should determine whether 2 sides of the triangle are equal', function() {
    var triangle = new Triangle(3,3,2);
    expect(triangle.checkType()).toEqual("it is an isosceles triangle");
  });

  it('should determine whether no sides of the triangle are equal', function() {
    var triangle = new Triangle(3,4,2);
    expect(triangle.checkType()).toEqual("it is a scalene triangle");
  });
});
