import {Component, input, signal, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'expander',
  template: `
    <div class="header" (click)="toggleExpanded()">
      Some expander header
    </div>

    @if (expanded()) {
      <ng-container [ngTemplateOutlet]="content()"/>
    }

  `,
  imports: [
    NgTemplateOutlet
  ]
})
export class ExpanderComponent {
  content = input.required<TemplateRef<any>>();

  expanded = signal(false);

  toggleExpanded(){
    this.expanded.update(v => !v);
  }
}
