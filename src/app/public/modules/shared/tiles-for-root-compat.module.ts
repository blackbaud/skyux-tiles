import {
  NgModule
} from '@angular/core';

import {
  SkyMediaQueryService,
  SkyUIConfigService
} from '@skyux/core';

/**
 * @internal
 * @deprecated This module can be removed after we upgrade SKY UX development dependencies to version 5.
 */
 @NgModule({
  providers: [
    SkyMediaQueryService,
    SkyUIConfigService
  ]
})
export class SkyTilesForRootCompatModule {}
