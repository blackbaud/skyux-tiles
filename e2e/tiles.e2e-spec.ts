import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Tile', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('visual/tiles');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-tiles').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/tiles');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('#screenshot-tiles').toMatchBaselineScreenshot(done);
  });
});
