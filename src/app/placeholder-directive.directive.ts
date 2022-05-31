import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholderDirective]'
})
export class PlaceholderDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
