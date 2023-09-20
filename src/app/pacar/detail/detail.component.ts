import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Girls } from 'src/app/shared/pacar.model';
import { PacarService } from 'src/app/shared/pacar.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  selected: Girls | null = null;

  constructor(private pacarService: PacarService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    // this.pacarService.selectedGirl$.subscribe((girl) => {
    //   this.selected = girl;
    // });
    this.router.params.subscribe((params) => {
      const girlId = +params['id'];
      this.selected = this.pacarService.getGirlById(girlId)
    })
  }

}
