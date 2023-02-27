import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSVGComponent } from './mobile-svg.component';

describe('MobileSVGComponent', () => {
  let component: MobileSVGComponent;
  let fixture: ComponentFixture<MobileSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSVGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
