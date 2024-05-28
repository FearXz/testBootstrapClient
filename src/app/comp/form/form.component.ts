import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  inputText: string = '';

  constructor(private sharedData: SharedDataService) {}

  ngOnInit() {
    this.sharedData.$buttonObservable.subscribe(() => {
      this.sharedData.addToList(this.inputText);
    });
  }
}
