# V14 & V15

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

---

## App without modules.

#### app.component.ts

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

#### main.ts

```typescript
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent).catch((err) => console.error(err));
```

---

## Routes without modules.

#### app.component.ts

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

#### app.component.html

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

#### app.routing.ts

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

#### main.ts

```typescript
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";

import { AppComponent } from "./app/app.component";
import { routes } from "./app/app.routing";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch((err) => console.error(err));
```

---

## Typed Forms

#### forms.component.ts

```typescript
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
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
  guests: FormGroup<{
    total: FormControl<number | null>;
    adults: FormControl<boolean | null>;
  }>;
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
```

#### forms.component.html

```html
<form [formGroup]="partyForm" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="house" />

  <input type="text" formControlName="street" />

  <div formGroupName="guests">
    <input type="number" formControlName="total" />

    <input type="checkbox" formControlName="adults" />
  </div>

  <app-button type="submit">Submit</app-button>
</form>
```

---

## Untyped Forms

#### untyped-forms.component.ts

```typescript
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  ReactiveFormsModule,
  UntypedFormGroup,
} from "@angular/forms";

import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "app-untyped-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: "./untyped-form.component.html",
  styleUrls: ["./untyped-form.component.scss"],
})
export class UntypedFormComponent implements OnInit {
  regularForm: UntypedFormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.regularForm = this._formBuilder.group({
      name: "test",
      age: 20,
    });
  }

  onSubmit(): void {
    console.log(this.regularForm.value);
  }
}
```

#### untyped-forms.component.html

```html
<form [formGroup]="regularForm" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />

  <input type="number" formControlName="age" />

  <app-button [type]="'submit'">Submit</app-button>
</form>
```

---

## Servides (not) provideIn: "root"

#### pokemon.service.ts

```typescript
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class PokemonService {
  getPokemons(): Observable<string[]> {
    return of(["Pikachu", "Charizard", "Mew"]);
  }
}
```

#### home-page.component.ts

```typescript
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
  standalone: true,
  selector: "app-home-page",
  imports: [CommonModule],
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  providers: [PokemonService],
})
export class HomePageComponent implements OnInit {
  pokemons$: Observable<string[]>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.getPokemons();
  }
}
```

#### home-page.component.html

```html
<h1>Pokemons</h1>
<hr />
<ol *ngIf="pokemons$ | async as pokemons">
  <li *ngFor="let pokemon of pokemons">{{ pokemon }}</li>
</ol>
```

---

## Optimized Images Directive

#### about-page.component.ts

```typescript
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-about-page",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./about-page.component.html",
  styleUrls: ["./about-page.component.scss"],
})
export class AboutPageComponent {
  url =
    "https://as01.epimg.net/meristation/imagenes/2022/04/26/mexico/1650937584_681667_1650937697_noticia_normal.jpg";
}
```

#### about-page.component.html

```html
<img [ngSrc]="url" fill />
```

---

## Angular Material

#### button.component.ts

```typescript
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

@Component({
  standalone: true,
  selector: "app-button",
  imports: [MatButtonModule],
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input() type: "button" | "submit";
  @Output() onClick = new EventEmitter<void>();

  onButtonClick(): void {
    this.onClick.emit();
  }
}
```

#### button.component.html

```html
<button mat-raised-button (click)="onButtonClick()" [type]="type">
  <ng-content></ng-content>
</button>
```

---

## Guards

#### app.routing.ts

```typescript
import { inject } from "@angular/core";
import { Route } from "@angular/router";

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AuthService } from "./services/auth/auth.service";

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
    canActivate: [() => inject(AuthService).isAuth()],
  },
  {
    path: "forms",
    loadComponent: () =>
      import("./pages/forms-page/forms-page.component").then(
        (c) => c.FormsPageComponent
      ),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];
```

---

## Deprecations

[Deprecations](https://angular.io/guide/deprecations)
