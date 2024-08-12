import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadelDetailComponent } from './padel-detail.component';

describe('PadelDetailComponent', () => {
  let component: PadelDetailComponent;
  let fixture: ComponentFixture<PadelDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadelDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
