import { expect, SkyHostBrowser } from '@skyux-sdk/e2e';

describe('Tile with default theme', () => {
  beforeEach(async () => {
    await SkyHostBrowser.get('visual/tiles-theme');
  });

  it('should match previous screenshot', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-tiles-theme').toMatchBaselineScreenshot(done, {
      screenshotName: 'tiles-theme-lg',
    });
  });

  it('should match previous screenshot (screen: xs)', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('xs');
    expect('#screenshot-tiles-theme').toMatchBaselineScreenshot(done, {
      screenshotName: 'tiles-theme-xs',
    });
  });
});
