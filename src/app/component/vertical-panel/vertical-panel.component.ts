import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vertical-panel',
  templateUrl: './vertical-panel.component.html',
  styleUrl: './vertical-panel.component.scss',
})
export class VerticalPanelComponent {
  constructor(private router: Router) {}

  verticalPanelClick(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
