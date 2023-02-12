import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserboxsComponent } from './teaserboxs.component';

describe('TeaserboxsComponent', () => {
  let component: TeaserboxsComponent;
  let fixture: ComponentFixture<TeaserboxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaserboxsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaserboxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
