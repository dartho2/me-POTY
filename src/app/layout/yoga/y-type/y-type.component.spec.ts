import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YTypeComponent } from './y-type.component';

describe('YTypeComponent', () => {
  let component: YTypeComponent;
  let fixture: ComponentFixture<YTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
