import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'integrator-comp',
  template: `
    <ng-content/>
  `,
  styleUrls: ['./integrator.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyComponent {
  title: string = 'Hello, Angular!';

  constructor() {
  }
}
