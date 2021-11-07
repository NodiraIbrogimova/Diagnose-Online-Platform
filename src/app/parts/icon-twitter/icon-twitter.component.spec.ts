import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTwitterComponent } from './icon-twitter.component';

describe('IconTwitterComponent', () => {
  let component: IconTwitterComponent;
  let fixture: ComponentFixture<IconTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTwitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
