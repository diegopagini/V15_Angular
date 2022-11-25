import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { ButtonComponent } from '../button/button.component';

interface PartyForm {
  house: (
    | string
    | ((control: AbstractControl<any, any>) => ValidationErrors | null)[]
  )[];
  street: (
    | string
    | ((control: AbstractControl<any, any>) => ValidationErrors | null)[]
  )[];
  guests: FormGroup<{
    total: FormControl<number | null>;
    adults: FormControl<boolean | null>;
  }>;
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  partyForm: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.partyForm = this._formBuilder.group<PartyForm>({
      house: [`Sara's House`, [Validators.required]],
      street: [
        'Main Street 123',
        [Validators.required, Validators.minLength(12)],
      ],
      guests: this._formBuilder.group({
        total: [20, [Validators.required, Validators.min(1)]],
        adults: [true],
      }),
    });
  }

  onSubmit(): void {
    console.log(this.partyForm.value);
  }
}
