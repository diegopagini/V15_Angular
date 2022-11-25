import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-untyped-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './untyped-form.component.html',
  styleUrls: ['./untyped-form.component.scss'],
})
export class UntypedFormComponent {}
