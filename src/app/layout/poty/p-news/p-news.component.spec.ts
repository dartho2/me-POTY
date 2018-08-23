import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PNewsComponent } from './p-news.component';

describe('PNewsComponent', () => {
  let component: PNewsComponent;
  let fixture: ComponentFixture<PNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
