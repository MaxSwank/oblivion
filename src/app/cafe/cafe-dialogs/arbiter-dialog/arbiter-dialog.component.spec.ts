import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbiterDialogComponent } from './arbiter-dialog.component';

describe('ArbiterDialogComponent', () => {
  let component: ArbiterDialogComponent;
  let fixture: ComponentFixture<ArbiterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbiterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbiterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
