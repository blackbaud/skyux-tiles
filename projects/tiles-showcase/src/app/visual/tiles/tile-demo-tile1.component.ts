import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div.tile1',
  templateUrl: './tile-demo-tile1.component.html',
})
export class SkyTileDemoTile1Component {
  public tileHelpClick() {
    alert('tile help clicked');
  }

  public tileSettingsClick() {
    alert('tile settings clicked');
  }
}
