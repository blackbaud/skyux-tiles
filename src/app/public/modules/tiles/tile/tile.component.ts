import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Optional,
  Output,
  ViewChild
} from '@angular/core';

import {
  skyAnimationSlide
} from '@skyux/animations';

import {
  Subject
} from 'rxjs';

import {
  takeUntil
} from 'rxjs/operators';

import {
  SkyTileDashboardService
} from '../tile-dashboard/tile-dashboard.service';

@Component({
  selector: 'sky-tile',
  styleUrls: ['./tile.component.scss'],
  templateUrl: './tile.component.html',
  animations: [skyAnimationSlide]
})
export class SkyTileComponent implements OnDestroy {
  public isInDashboardColumn = false;

  @Input()
  public showSettings = true;

  @Input()
  public showHelp = true;

  @Output()
  public settingsClick = new EventEmitter();

  @Output()
  public isCollapsedChange = new EventEmitter<boolean>();

  @Output()
  public helpClick = new EventEmitter();

  public get isCollapsed(): boolean {
    if (this.dashboardService) {
      const configCollapsedState = this.dashboardService.tileIsCollapsed(this);
      this._isCollapsed = configCollapsedState;
    }

    return this._isCollapsed;
  }

  @Input()
  public set isCollapsed(value: boolean) {
    if (this.dashboardService) {
      this.dashboardService.setTileCollapsed(this, value);
    }

    this._isCollapsed = value;

    this.isCollapsedChange.emit(value);
  }

  @ViewChild('grabHandle', { read: ElementRef })
  private grabHandle: ElementRef;

  @ViewChild('titleContainer')
  private title: ElementRef;

  private ngUnsubscribe = new Subject();

  private _isCollapsed = false;

  constructor(
    public elementRef: ElementRef,
    private changeDetector: ChangeDetectorRef,
    @Optional() private dashboardService: SkyTileDashboardService
  ) {
    this.isInDashboardColumn = !!dashboardService;

    if (this.dashboardService) {
      /**
       * This subscription ensures that if any values which come in from the dashboard service are
       * updated that the component will update if the tile's parent component utilizes OnPush
       * change detection.
       */
      this.dashboardService.configChange
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(() => {
          this.changeDetector.markForCheck();
        });
    }
  }

  public ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public settingsButtonClicked() {
    this.settingsClick.emit(undefined);
  }

  public helpButtonClicked() {
    this.helpClick.emit(undefined);
  }

  public get hasSettings(): boolean {
    return this.settingsClick.observers.length > 0 && this.showSettings;
  }

  public get hasHelp(): boolean {
    return this.helpClick.observers.length > 0 && this.showHelp;
  }

  public titleClick() {
    this.isCollapsed = !this.isCollapsed;
  }

  public chevronDirectionChange(direction: string) {
    this.isCollapsed = direction === 'down';
  }

  public moveTile(event: KeyboardEvent) {
    if (this.isInDashboardColumn) {
      let direction = event.key.toLowerCase().replace('arrow', '');
      if (direction === 'up'
        || direction === 'down'
        || direction === 'left'
        || direction === 'right'
      ) {
        this.dashboardService.moveTileOnKeyDown(
          this,
          direction,
          this.title ? this.title.nativeElement.innerText : undefined
        );
        this.focusHandle();
      }
    }
  }

  private focusHandle(): void {
    this.grabHandle.nativeElement.focus();
  }
}
