import { Injectable } from '@angular/core';
import { Girls } from './pacar.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacarService {
  girls: Girls[] = [
    {
      id: 1,
      name: 'Alicia Keys',
      umur: 25,
      instagram: 'aliciays',
      national: 'USA',
      tarifPerjam: 100000,
      tambahDurasi: 70000,
      urlImage: '/assets/Alice.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      umur: 30,
      instagram: 'jane.smith',
      national: 'Canada',
      tarifPerjam: 80000,
      tambahDurasi: 60000,
      urlImage: '/assets/rita.jpg',
    }
  ];

  girlsSubject = new BehaviorSubject<Girls[]>([]);
  girls$ = this.girlsSubject.asObservable();
  
  selectedGirl: BehaviorSubject<Girls | null> = new BehaviorSubject<Girls | null>(null);
  selectedGirl$ = this.selectedGirl.asObservable();

  setSelectedData(detail: Girls | null) {
    this.selectedGirl.next(detail)
  }

  getData(): Observable<Girls[]> {
    return this.girls$;
  }

  addData(newData: any): void {
    this.girls.push(newData);
    this.girlsSubject.next(this.girls);
  }  

  getGirlById(id: number): any | null {
    const rents = this.girls;
    const rent = rents.find((item) => item.id === id);
    return rent || null
  }

  onDetail(i: any) {
    this.selectedGirl.next(i)
  }

  constructor() { }
}
