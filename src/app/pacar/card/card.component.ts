import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Girls } from 'src/app/shared/pacar.model';
import { PacarService } from 'src/app/shared/pacar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() girls: Girls[] = this.pacarService.girls
  @Output() readMoreClicked: EventEmitter<void> = new EventEmitter<void>();

  girlsList: Girls[] = [];
  selectedGirl: Girls | null = null;

  constructor(private pacarService: PacarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pacarService.girls$.subscribe(girls => {
      this.girlsList = girls;
      console.log(this.girlsList);
      
    })
  }

  selectGirl(detail: Girls) {
    this.selectedGirl = detail; // Set the selectedGirl property
    this.pacarService.setSelectedData(detail);
  }

  // onLoadDetails() {
  //   this.router.navigate(['/details'])
  // }



  seeDetail(item: Girls): void {
    this.pacarService.setSelectedData(item);
    this.router.navigate(['/details', item.id], { relativeTo:this.route });
  }

}
