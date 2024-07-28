import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isSliderOpen: boolean = false;
  public isMobileView: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobileView = result.matches;
      });
  }
  toggleSlider() {
    this.isSliderOpen = !this.isSliderOpen;
  }
  verticalPanelClick(route: string) {
    this.isSliderOpen = false;
    this.router.navigate([`/${route}`]);
  }
}
