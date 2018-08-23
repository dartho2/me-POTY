import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YNewsComponent } from './y-news.component';

describe('YNewsComponent', () => {
  let component: YNewsComponent;
  let fixture: ComponentFixture<YNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
