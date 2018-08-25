import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YAdvantageComponent } from './y-advantage.component';

describe('YAdvantageComponent', () => {
  let component: YAdvantageComponent;
  let fixture: ComponentFixture<YAdvantageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YAdvantageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
