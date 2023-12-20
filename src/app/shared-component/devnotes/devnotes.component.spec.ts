import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevnotesComponent } from './devnotes.component';

describe('DevnotesComponent', () => {
  let component: DevnotesComponent;
  let fixture: ComponentFixture<DevnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevnotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
