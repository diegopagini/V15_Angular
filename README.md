# V15

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

# App without modules.

```typescript
import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {}
```

```typescript
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent).catch((err) => console.error(err));
```

# Routes without modules.

```typescript
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {}
```

```html
<header>
  <nav>
    <ul>
      <li [routerLink]="['/', 'home']">Home</li>
      <li [routerLink]="['/', 'about']">About</li>
    </ul>
  </nav>
</header>

<router-outlet></router-outlet>
```

```typescript
import { Route } from "@angular/router";

import { HomePageComponent } from "./pages/home-page/home-page.component";

export const routes: Route[] = [
  {
    path: "home",
    component: HomePageComponent,
  },
  {
    path: "about",
    loadComponent: () =>
      import("./pages/about-page/about-page.component").then(
        (c) => c.AboutPageComponent
      ),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];
```

# Typed Forms

```typescript
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from "@angular/forms";

import { ButtonComponent } from "../button/button.component";

interface PartyForm {
  house: (
    | string
    | ((control: AbstractControl<any, any>) => ValidationErrors | null)[]
  )[];
  street: (
    | string
    | ((control: AbstractControl<any, any>) => ValidationErrors | null)[]
  )[];
}

@Component({
  selector: "app-forms",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"],
})
export class FormsComponent implements OnInit {
  partyForm: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.partyForm = this._formBuilder.group<PartyForm>({
      house: [`Sara's House`, [Validators.required]],
      street: [
        "Main Street 123",
        [Validators.required, Validators.minLength(12)],
      ],
    });
  }

  onSubmit(): void {
    console.log(this.partyForm.value);
  }
}
```

```html
<form [formGroup]="partyForm" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="house" />

  <input type="text" formControlName="street" />

  <app-button type="submit">Submit</app-button>
</form>
```
