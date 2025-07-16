import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodywComponent } from './bodyw.component';

describe('BodywComponent', () => {
  let component: BodywComponent;
  let fixture: ComponentFixture<BodywComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodywComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodywComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
