import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character4DialogComponent } from './character4-dialog.component';

describe('Character4DialogComponent', () => {
  let component: Character4DialogComponent;
  let fixture: ComponentFixture<Character4DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character4DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character4DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
