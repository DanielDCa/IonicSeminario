import { PhotosService } from './photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  photos = [];
  constructor(private photoServices: PhotosService) {}

  ngOnInit(){
    this.photoServices.getPhotos().subscribe( data => {
      console.log(data);
      this.photos = data ;
    });
  }

}
