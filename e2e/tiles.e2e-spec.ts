import {
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Tile', () => {
  function testFocus(selector: string, name: string, done: DoneFn) {
    SkyHostBrowser.get('visual/tiles');
    SkyHostBrowser.setWindowBreakpoint('lg');

    element.all(
      by.css('#screenshot-tiles ' + selector)
    ).get(0).sendKeys();

    expect('#screenshot-tiles .tile1 .sky-tile-header').toMatchBaselineScreenshot(done, {
      screenshotName: 'tile-header-focus-' + name
    });
  }

  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('visual/tiles');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-tiles').toMatchBaselineScreenshot(done, {
      screenshotName: 'tiles-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/tiles');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('#screenshot-tiles').toMatchBaselineScreenshot(done, {
      screenshotName: 'tiles-xs'
    });
  });

  it('should match previous screenshot when help button is focused', (done) => {
    testFocus('.sky-tile-help', 'help', done);
  });

  it('should match previous screenshot when chevron is focused', (done) => {
    testFocus('.sky-chevron', 'chevron', done);
  });

  it('should match previous screenshot when settings button is focused', (done) => {
    testFocus('.sky-tile-settings', 'settings', done);
  });

  it('should match previous screenshot when grab handle is focused', (done) => {
    testFocus('.sky-tile-grab-handle', 'grab-handle', done);
  });
});
