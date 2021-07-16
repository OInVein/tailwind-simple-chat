import { createElement } from 'react';
import { withMainWrapper } from '../';

describe('render MainWrapper', () => {
  it('MAIN UI', () => {
    const element = createElement('div');
    const wrapperComponent = withMainWrapper(element);
    expect(wrapperComponent).toBeTruthy();
  });
});
