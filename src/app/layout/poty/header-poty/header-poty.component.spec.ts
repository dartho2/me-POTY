import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPotyComponent } from './header-poty.component';

describe('HeaderPotyComponent', () => {
  let component: HeaderPotyComponent;
  let fixture: ComponentFixture<HeaderPotyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPotyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
