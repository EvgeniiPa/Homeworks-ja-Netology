﻿function parseCount(value) {
  let result = Number.parseFloat(value);

  if (Number.isNaN(result)) {
    throw new Error("Невалидное значение");
  }

  return result;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

// Задание №2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (
      this.a + this.b < this.c ||
      this.a + this.c < this.b ||
      this.c + this.b < this.a
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    let p = this.a + this.b + this.c;
    return p;
  }

  get area() {
    let halfPerimeter = (this.a + this.b + this.c) / 2;
    let s = Math.sqrt(
      halfPerimeter *
        (halfPerimeter - this.a) *
        (halfPerimeter - this.b) *
        (halfPerimeter - this.c)
    );
    s.toFixed();
    return +s.toFixed();
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get parimeter() {
        return "Ошибка! Треугольник не существует";
      },

      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
