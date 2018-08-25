import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YCuriosityComponent } from './y-curiosity.component';

describe('YCuriosityComponent', () => {
  let component: YCuriosityComponent;
  let fixture: ComponentFixture<YCuriosityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YCuriosityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YCuriosityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
