import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YYogaComponent } from './y-yoga.component';

describe('YYogaComponent', () => {
  let component: YYogaComponent;
  let fixture: ComponentFixture<YYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YYogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
