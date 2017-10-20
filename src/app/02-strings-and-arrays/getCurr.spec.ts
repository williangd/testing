import { getCurrencies } from './getCurr';

describe('getCurr', () => {
  it('should return supported currencies', () => {
    expect(getCurrencies()).toContain('USD');
    expect(getCurrencies()).toContain('AUD');
    expect(getCurrencies()).toContain('EUR');
  });
});
