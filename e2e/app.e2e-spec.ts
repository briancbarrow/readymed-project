import { ReadymedProjectPage } from './app.po';

describe('readymed-project App', function() {
  let page: ReadymedProjectPage;

  beforeEach(() => {
    page = new ReadymedProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
