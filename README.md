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
