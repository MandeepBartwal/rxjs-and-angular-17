import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css',
})
export class FeatureComponent {}
