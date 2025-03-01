import {Component} from '@angular/core';
import {GosLibComponent} from '../../../gos-lib/src/lib/gos-lib.component';
import {MyComponent} from './integrator/integrator.component';
import {ExpanderComponent} from './expander/expander.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    MyComponent,
    GosLibComponent,
    ExpanderComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gos-spa';
}
