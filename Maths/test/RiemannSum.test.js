import riemannSum from "../RiemannSum";

// Define a custom assertion function for comparing floating-point numbers.
function expectAlmostEqual(actual, expected, threshold = 0.005) {
    const difference = Math.abs(actual - expected);
    expect(difference).toBeLessThanOrEqual(threshold);
  }
  
  // Test cases for the riemannSum function.
  describe('riemannSum', () => {
    // Test case 1: Integration of a simple linear function.
    it('calculates the integral of a linear function correctly', () => {
      const linearFunction = (x) => 2 * x; // f(x) = 2x
      const a = 0;
      const b = 5;
      const n = 100;
      const result = riemannSum(linearFunction, a, b, n);
      expectAlmostEqual(result, 25); 
    });
  
    // Test case 2: Integration of a quadratic function.
    it('calculates the integral of a quadratic function correctly', () => {
      const quadraticFunction = (x) => x ** 2; // f(x) = x^2
      const a = 0;
      const b = 3;
      const n = 1000;
      const result = riemannSum(quadraticFunction, a, b, n);
      expectAlmostEqual(result, 9); 
    });
  });
  