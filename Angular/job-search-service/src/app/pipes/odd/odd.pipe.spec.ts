import { OddPipe } from './odd.pipe';

describe('OddPipe', () => {
  it('create an instance', () => {
    const pipe = new OddPipe();
    expect(pipe).toBeTruthy();
  });
});
