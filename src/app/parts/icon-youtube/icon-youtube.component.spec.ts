import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconYoutubeComponent } from './icon-youtube.component';

describe('IconYoutubeComponent', () => {
  let component: IconYoutubeComponent;
  let fixture: ComponentFixture<IconYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconYoutubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
