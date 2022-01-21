import { Component } from '@angular/core';

import { SkyTileDashboardConfig } from 'projects/tiles/src/public-api';

import { SkyTileDemoBillingComponent } from './tile-demo-billing.component';

import { SkyTileDemoProductsComponent } from './tile-demo-products.component';

@Component({
  selector: 'app-tile-demo',
  templateUrl: 'tile-visual.component.html',
})
export class SkyTileDemoComponent {
  public dashboardConfig: SkyTileDashboardConfig;

  constructor() {
    this.dashboardConfig = {
      tiles: [
        {
          id: 'tile1',
          componentType: SkyTileDemoBillingComponent,
        },
        {
          id: 'tile2',
          componentType: SkyTileDemoProductsComponent,
        },
      ],
      layout: {
        singleColumn: {
          tiles: [
            {
              id: 'tile2',
              isCollapsed: false,
            },
            {
              id: 'tile1',
              isCollapsed: true,
            },
          ],
        },
        multiColumn: [
          {
            tiles: [
              {
                id: 'tile1',
                isCollapsed: true,
              },
            ],
          },
          {
            tiles: [
              {
                id: 'tile2',
                isCollapsed: false,
              },
            ],
          },
        ],
      },
    };
  }
}
