import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserboxComponent } from './teaserbox.component';

describe('TeaserboxComponent', () => {
  let component: TeaserboxComponent;
  let fixture: ComponentFixture<TeaserboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaserboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaserboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
