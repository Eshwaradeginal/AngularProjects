import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationandCertificationComponent } from './educationand-certification.component';

describe('EducationandCertificationComponent', () => {
  let component: EducationandCertificationComponent;
  let fixture: ComponentFixture<EducationandCertificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationandCertificationComponent]
    });
    fixture = TestBed.createComponent(EducationandCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
