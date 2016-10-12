import { PageObjectSkeleton } from './skeleton.po.js';

describe('aurelia skeleton app', function() {
  let poSkeleton;

  beforeEach(() => {
    poSkeleton = new PageObjectSkeleton();

    browser.loadAndWaitForAureliaPage(process.env.E2E_URL);
  });

  it('should load the page and display the initial page title', () => {
    expect(poSkeleton.getCurrentPageTitle()).toContain('My Title');
  });
});
