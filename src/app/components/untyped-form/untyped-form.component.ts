import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-untyped-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './untyped-form.component.html',
  styleUrls: ['./untyped-form.component.scss'],
})
export class UntypedFormComponent implements OnInit {
  regularForm: UntypedFormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.regularForm = this._formBuilder.group({
      name: 'test',
      age: 20,
    });
  }

  onSubmit(): void {
    console.log(this.regularForm.value);
  }
}
