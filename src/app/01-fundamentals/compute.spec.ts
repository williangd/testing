import { compute } from "./compute";



describe('test compute', () => {
  it('negative number should return 0', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
  it('should return 2', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
