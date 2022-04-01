import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LameRouteComponent } from './lame-route.component';

describe('LameRouteComponent', () => {
  let component: LameRouteComponent;
  let fixture: ComponentFixture<LameRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LameRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LameRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
