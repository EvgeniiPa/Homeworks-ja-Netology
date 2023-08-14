function parseCount(value) {
  if (Number.parseFloat(value) == NaN) {
    throw new Error("Невалидное значение");
  }
  return Number.parseFloat(value);
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
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    let p = a + b + c;
    return p;
  }

  get area() {
    let s = Math.sqrt((a + b + c) ** 2 - 2 * (a ** 4 + b ** 4 + c ** 4)) / 4;
    return s;
  }
}

function getTriangle(a, b, c) {
  try {
    let newTriangle = new Triangle(a, b, c);
    return newTriangle;
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },

      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
