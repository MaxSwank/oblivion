import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreorderDialogComponent } from './preorder-dialog.component';

describe('PreorderDialogComponent', () => {
  let component: PreorderDialogComponent;
  let fixture: ComponentFixture<PreorderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreorderDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreorderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
