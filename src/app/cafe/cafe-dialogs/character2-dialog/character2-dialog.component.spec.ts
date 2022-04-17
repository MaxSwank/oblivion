import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character2DialogComponent } from './character2-dialog.component';

describe('Character2DialogComponent', () => {
  let component: Character2DialogComponent;
  let fixture: ComponentFixture<Character2DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character2DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character2DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
