import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyoutMenuItemComponent } from './flyout-menu-item.component';

describe('FlyoutMenuItemComponent', () => {
  let component: FlyoutMenuItemComponent;
  let fixture: ComponentFixture<FlyoutMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyoutMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyoutMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
