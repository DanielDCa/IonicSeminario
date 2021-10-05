import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  title: string;
  imageURL: string;

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
  }
  saveNewPlace(){
    this.placesService.addPlace(this.title,this.imageURL);
    //console.log(this.title + ' '  + this.imageURL);
    this.router.navigate(['/places']);
  }

}
