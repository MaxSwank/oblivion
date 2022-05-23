import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorBlurbsDialogComponent } from './reviews-dialog.component';

describe('AuthorBlurbsDialogComponent', () => {
  let component: AuthorBlurbsDialogComponent;
  let fixture: ComponentFixture<AuthorBlurbsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorBlurbsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorBlurbsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
