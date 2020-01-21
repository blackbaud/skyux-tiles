import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Tile with default theme', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('visual/tiles-theme');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-tiles-theme').toMatchBaselineScreenshot(done, {
      screenshotName: 'tiles-theme-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/tiles-theme');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('#screenshot-tiles-theme').toMatchBaselineScreenshot(done, {
      screenshotName: 'tiles-theme-xs'
    });
  });
});
