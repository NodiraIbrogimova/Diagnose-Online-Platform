import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLinkedinComponent } from './icon-linkedin.component';

describe('IconLinkedinComponent', () => {
  let component: IconLinkedinComponent;
  let fixture: ComponentFixture<IconLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLinkedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
