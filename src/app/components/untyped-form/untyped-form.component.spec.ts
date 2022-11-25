import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntypedFormComponent } from './untyped-form.component';

describe('UntypedFormComponent', () => {
  let component: UntypedFormComponent;
  let fixture: ComponentFixture<UntypedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UntypedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UntypedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
