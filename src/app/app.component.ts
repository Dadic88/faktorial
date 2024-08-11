import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FactorialComponent } from './factorial/factorial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FactorialComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
