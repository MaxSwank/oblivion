import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewriterDialogComponent } from './typewriter-dialog.component';

describe('TypewriterDialogComponent', () => {
  let component: TypewriterDialogComponent;
  let fixture: ComponentFixture<TypewriterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypewriterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypewriterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
