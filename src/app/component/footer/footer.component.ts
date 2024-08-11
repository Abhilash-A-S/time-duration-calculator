import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private DEFAULT_TOOLTIP_NAME = 'Powered by Abhilash Swathy';
  public tooltipText: string = this.DEFAULT_TOOLTIP_NAME;

  onMouseEnter() {
    this.tooltipText = this.DEFAULT_TOOLTIP_NAME;
  }
  onDoubleClick(){
    console.log("oooooooooo")
    this.tooltipText = "Powered by Abhilash Swathy";
  }
}
