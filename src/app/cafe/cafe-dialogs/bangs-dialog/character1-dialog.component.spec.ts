import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character1DialogComponent } from './character1-dialog.component';

describe('Character1DialogComponent', () => {
  let component: Character1DialogComponent;
  let fixture: ComponentFixture<Character1DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character1DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character1DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
