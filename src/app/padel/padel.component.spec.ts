import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadelComponent } from './padel.component';

describe('PadelComponent', () => {
  let component: PadelComponent;
  let fixture: ComponentFixture<PadelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
