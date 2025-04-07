import { CamelcasePipe } from './camelcase.pipe';

describe('CamelcasePipe', () => {
  it('create an instance', () => {
    const pipe = new CamelcasePipe();
    expect(pipe).toBeTruthy();
  });
});
