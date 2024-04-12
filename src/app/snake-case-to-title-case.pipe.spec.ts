import { SnakeCaseToTitleCasePipe } from './snake-case-to-title-case.pipe';

describe('SnakeCaseToTitleCasePipe', () => {
  it('create an instance', () => {
    const pipe = new SnakeCaseToTitleCasePipe();
    expect(pipe).toBeTruthy();
  });
});
