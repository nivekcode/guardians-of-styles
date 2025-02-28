import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GosLibComponent} from '../../../gos-lib/src/lib/gos-lib.component';
import {MyComponent} from './integrator/integrator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    MyComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gos-spa';
}
