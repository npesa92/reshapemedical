import { ReshapeTwitterPage } from './app.po';

describe('reshape-twitter App', () => {
  let page: ReshapeTwitterPage;

  beforeEach(() => {
    page = new ReshapeTwitterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
