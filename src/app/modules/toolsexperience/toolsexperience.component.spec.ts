import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsexperienceComponent } from './toolsexperience.component';

describe('ToolsexperienceComponent', () => {
  let component: ToolsexperienceComponent;
  let fixture: ComponentFixture<ToolsexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsexperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolsexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
