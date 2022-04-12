const square = require('./square');

describe('square', () => {

  // Перед каждым
  beforeEach(() => {})

  // Один раз перед всеми тестами
  beforeAll(() => {})

  test('Корректное значение', () => {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined();
  })

  test('Единождый вызов Math.pow()', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1)
  })

  test('Отсутсвие вызовова Math.pow()', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0)
  })

  // После каждого
  afterEach(() => {
    jest.clearAllMocks();
  })

  // Один раз после всех тестов
  afterAll(() => {})

});