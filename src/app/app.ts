import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products';
import { HeaderComponent } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AgGridSampleAngular');
}
