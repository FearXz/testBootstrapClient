import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrl: './form-button.component.css',
})
export class FormButtonComponent {
  constructor(private sharedData: SharedDataService) {}

  emitClick() {
    this.sharedData.onFormClick();
    console.log('Form button clicked');
  }
}
