import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallDialogComponent } from './wall-dialog.component';

describe('WallDialogComponent', () => {
  let component: WallDialogComponent;
  let fixture: ComponentFixture<WallDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
