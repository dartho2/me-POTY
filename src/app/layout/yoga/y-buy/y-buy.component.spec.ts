import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YBuyComponent } from './y-buy.component';

describe('YBuyComponent', () => {
  let component: YBuyComponent;
  let fixture: ComponentFixture<YBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
