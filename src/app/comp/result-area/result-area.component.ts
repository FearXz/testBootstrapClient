import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrl: './result-area.component.css',
})
export class ResultAreaComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  textList: string[] = [];

  constructor(private sharedData: SharedDataService) {}

  emitDelete(index: number) {
    this.sharedData.deleteFromList(index);
  }

  ngOnInit() {
    this.sharedData.$listSubject.subscribe((list) => {
      this.textList = list;
    });
  }

  ngOnDestroy() {
    this.sharedData.$listSubject.unsubscribe();
  }
}
