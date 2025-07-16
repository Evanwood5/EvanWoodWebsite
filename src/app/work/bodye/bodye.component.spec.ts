import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyeComponent } from './bodye.component';

describe('BodyeComponent', () => {
  let component: BodyeComponent;
  let fixture: ComponentFixture<BodyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
