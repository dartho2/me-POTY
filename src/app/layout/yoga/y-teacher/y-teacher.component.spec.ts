import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YTeacherComponent } from './y-teacher.component';

describe('YTeacherComponent', () => {
  let component: YTeacherComponent;
  let fixture: ComponentFixture<YTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
