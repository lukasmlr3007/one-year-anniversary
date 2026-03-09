import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-starting-page',
  imports: [
    MatButton,
    RouterLink
],
  templateUrl: 'starting-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartingPageComponent {
  public showSusCat = signal<boolean>(false);

  async handleNee(): Promise<void> {
    this.showSusCat.set(true);
    await this.delay(3500);
    this.showSusCat.set(false);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
