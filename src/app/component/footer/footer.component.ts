import { Component, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @ViewChild('tooltip', { static: true }) tooltip!: MatTooltip;
  private DEFAULT_TOOLTIP_NAME = 'Powered by Abhilash';
  public tooltipText: string = this.DEFAULT_TOOLTIP_NAME;

  onMouseEnter() {
    this.tooltipText = this.DEFAULT_TOOLTIP_NAME;
    this.tooltip?.show();
  }
  onDoubleClick(){
    this.tooltip?.show();
    this.tooltipText = "Powered by Abhilash Swathy";
  }
}
