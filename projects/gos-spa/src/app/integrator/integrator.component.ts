import {Component, ViewEncapsulation} from '@angular/core';
import {GosLibComponent} from '../../../../gos-lib/src/lib/gos-lib.component';

@Component({
  selector: 'integrator-comp',
  template: `
    <lib-gos-lib/>
  `,
  imports: [
    GosLibComponent
  ],
  styleUrls: ['./integrator.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyComponent {
  title: string = 'Hello, Angular!';

  constructor() {
  }
}
