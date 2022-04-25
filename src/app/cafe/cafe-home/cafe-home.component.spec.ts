import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeHomeComponent } from './cafe-home.component';

describe('CafeHomeComponent', () => {
  let component: CafeHomeComponent;
  let fixture: ComponentFixture<CafeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
