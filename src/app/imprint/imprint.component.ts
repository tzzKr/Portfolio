import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})



export class ImprintComponent {
 

  selectedData!: string;
  imprint = true;
  privacyPolicy = false;

  switchData(data: string) {
    this.selectedData = data;
    this.imprint = data === 'imprint';
    this.privacyPolicy = data === 'privacyPolicy';
  }

  isSelected(data: string): boolean {
    return this.selectedData === data;
  }
}
