import { Component, OnInit } from '@angular/core';
import { Girls } from '../shared/pacar.model';
import { PacarService } from '../shared/pacar.service';

@Component({
  selector: 'app-pacar',
  templateUrl: './pacar.component.html',
  styleUrls: ['./pacar.component.css']
})
export class PacarComponent implements OnInit {

  selectedGirl: Girls | null = null; 

  constructor(private pacarService: PacarService) { }

  ngOnInit(): void {
    this.pacarService.selectedGirl$.subscribe((user) => {
      this.selectedGirl = user;
    });
  }

  showAppDetail: boolean = false;

  showDetail() {
    this.showAppDetail = true;
    console.log('showAppDetail:', this.showAppDetail);
  }

}
