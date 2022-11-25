import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  url =
    'https://as01.epimg.net/meristation/imagenes/2022/04/26/mexico/1650937584_681667_1650937697_noticia_normal.jpg';
}
