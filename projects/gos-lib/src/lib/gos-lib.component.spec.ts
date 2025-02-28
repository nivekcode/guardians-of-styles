import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GosLibComponent } from './gos-lib.component';

describe('GosLibComponent', () => {
  let component: GosLibComponent;
  let fixture: ComponentFixture<GosLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GosLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GosLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
