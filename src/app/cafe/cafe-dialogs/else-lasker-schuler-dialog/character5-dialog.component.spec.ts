import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character5DialogComponent } from './character5-dialog.component';

describe('Character5DialogComponent', () => {
  let component: Character5DialogComponent;
  let fixture: ComponentFixture<Character5DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character5DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character5DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
