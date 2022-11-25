import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsComponent } from 'src/app/components/forms/forms.component';
import { UntypedFormComponent } from 'src/app/components/untyped-form/untyped-form.component';

@Component({
  selector: 'app-forms-page',
  standalone: true,
  imports: [CommonModule, FormsComponent, UntypedFormComponent],
  templateUrl: './forms-page.component.html',
  styleUrls: ['./forms-page.component.scss'],
})
export class FormsPageComponent {}
