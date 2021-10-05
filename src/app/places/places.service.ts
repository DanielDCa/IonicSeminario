import { Injectable } from '@angular/core';
import { Place } from './place-detail/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id:'1',
      title:'Eiffel Tower',
      imageURL:'https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_f7a97d88_1200x1821.jpg',
      comments:['Awesome Place', 'Wonderful Experience']
    },
    {
      id:'2',
      title: 'Statue of Liberty',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg',
      comments:['Awesome Place', 'Wonderful Experience']
    },
    {
      id:'3',
      title: 'Prueba',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg',
      comments:[]
    }
  ];
  constructor() { }

  getPlaces(){
    return this.places;
  }
  addPlace(title: string, imageURL: string){
    this.places.push({
      title,
      imageURL,
      comments: [],
      id:this.places.length + 1 + '',
    });
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place => place.id !== placeId);
  }
  getPlace(placeId: string){
    //Retorna un solo lugar a partir de la ID
    return{
      ...this.places.find(place => place.id === placeId)
    };
  }

}
