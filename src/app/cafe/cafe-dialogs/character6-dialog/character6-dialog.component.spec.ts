import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character6DialogComponent } from './character6-dialog.component';

describe('Character6DialogComponent', () => {
  let component: Character6DialogComponent;
  let fixture: ComponentFixture<Character6DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character6DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character6DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
