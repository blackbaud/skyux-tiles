import { Component } from '@angular/core';

@Component({
  selector: 'app-tile-demo-billing',
  templateUrl: './tile-demo-billing.component.html',
})
export class SkyTileDemoBillingComponent {
  public tileHelpClick() {
    alert('tile help clicked');
  }

  public tileSettingsClick() {
    alert('tile settings clicked');
  }
}
