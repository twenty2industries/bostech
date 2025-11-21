import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFullcardComponent } from './service-fullcard.component';

describe('ServiceFullcardComponent', () => {
  let component: ServiceFullcardComponent;
  let fixture: ComponentFixture<ServiceFullcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceFullcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFullcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
