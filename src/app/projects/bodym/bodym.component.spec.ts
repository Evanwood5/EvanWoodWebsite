import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodymComponent } from './bodym.component';

describe('BodymComponent', () => {
  let component: BodymComponent;
  let fixture: ComponentFixture<BodymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodymComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
