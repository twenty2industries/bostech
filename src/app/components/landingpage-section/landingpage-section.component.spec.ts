import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageSectionComponent } from './landingpage-section.component';

describe('LandingpageSectionComponent', () => {
  let component: LandingpageSectionComponent;
  let fixture: ComponentFixture<LandingpageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingpageSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
