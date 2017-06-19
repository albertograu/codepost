import { CodepostPage } from './app.po';

describe('codepost App', () => {
  let page: CodepostPage;

  beforeEach(() => {
    page = new CodepostPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
