import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character3DialogComponent } from './character3-dialog.component';

describe('Character3DialogComponent', () => {
  let component: Character3DialogComponent;
  let fixture: ComponentFixture<Character3DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character3DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character3DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
