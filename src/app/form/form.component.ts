import { Component, OnInit } from '@angular/core';
import { Girls } from '../shared/pacar.model';
import { PacarService } from '../shared/pacar.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  titleForm: string = 'Create a Data Rent a Girlfriend'

  newId: number
  constructor(private pacarService: PacarService) { 
    this.newId = 2
  }

  newGirls: Girls = {
    id: 0,
    name: '',
    umur: 0,
    instagram: '',
    national: '',
    tarifPerjam: 0,
    tambahDurasi: 0,
    urlImage: ''
  }

  onAddGirls(): void {
    this.newId++
    this.newGirls = {
      id: this.newId,
      name: '',
      umur: 0,
      instagram: '',
      national: '',
      tarifPerjam: 0,
      tambahDurasi: 0,
      urlImage: ''
    };
    this.pacarService.addData(this.newGirls)
    console.log(this.newGirls);
    
    

}


ngOnInit(): void {
  
}

}

