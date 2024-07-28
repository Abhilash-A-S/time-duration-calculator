import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appValidateInput]',
})
export class ValidateInputDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('blur') onBlur() {
    this.validate();
  }

  @HostListener('input') onInput() {
    this.validate();
  }
  validate() {
    const value = this.el.nativeElement.value;
    if (!value) {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'red');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border-color');
    }
  }
}
