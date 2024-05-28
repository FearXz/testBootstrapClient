import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  list: string[] = [];

  $listSubject = new Subject<string[]>();
  $listObservable = this.$listSubject.asObservable();

  $buttonSubject = new Subject<void>();
  $buttonObservable = this.$buttonSubject.asObservable();

  onFormClick(): void {
    this.$buttonSubject.next();
  }

  addToList(text: string): void {
    this.list.push(text);
    this.$listSubject.next(this.list);
  }

  deleteFromList(index: number): void {
    this.list.splice(index, 1);
    this.$listSubject.next(this.list);
  }
}
