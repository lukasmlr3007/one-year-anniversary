import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-food-page-component',
  imports: [
    RouterLink,
    MatButton,
  ],
  templateUrl: 'food-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodPageComponent { }
