import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SertificationComponent } from './sertification.component';

describe('SertificationComponent', () => {
  let component: SertificationComponent;
  let fixture: ComponentFixture<SertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SertificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
