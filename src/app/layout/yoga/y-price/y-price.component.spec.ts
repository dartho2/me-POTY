import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YPriceComponent } from './y-price.component';

describe('YPriceComponent', () => {
  let component: YPriceComponent;
  let fixture: ComponentFixture<YPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
