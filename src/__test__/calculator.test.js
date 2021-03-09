import { sum } from '../calculator';

describe('Calculator test suite', () => {
  test('Sum should sum the parameters', () => {
    // Arrange
    let expected = 2;

    // Act
    const actual = sum(1, 1);

    // Assert
    expect(actual).toBe(expected);
  });
});
