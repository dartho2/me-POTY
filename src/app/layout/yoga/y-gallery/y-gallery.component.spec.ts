import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YGalleryComponent } from './y-gallery.component';

describe('YGalleryComponent', () => {
  let component: YGalleryComponent;
  let fixture: ComponentFixture<YGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
