import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from './place.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;
  //Router sirve para redireccionar el usuario
  constructor(private activaRoute: ActivatedRoute, private plaSer: PlacesService, private router: Router,private aCtrl: AlertController) { }

  ngOnInit() {
    this.activaRoute.paramMap.subscribe(paraMap =>{

        //Redirect (Lo que hacemos con paraMap es obtener el Id del item seleccionado)
        const recipeId = paraMap.get('placeId');
        this.place= this.plaSer.getPlace(recipeId);
        console.log(this.place);

    });
  }

  async deletePlace(){
    const alertElement = await this.aCtrl.create({
      header: 'Are you sure, you want to delete it?',
      message: 'Be careful',
      buttons:[
        {
          text:'Cancel',
          role:'cancel' //Cancela la ventana
        },
        {
          text: 'Delete',
          handler: () => {
            this.plaSer.deletePlace(this.place.id);
            this.router.navigate(['/places']);
          }
        }
      ]
    });
    //Lo presenta al usuario a continuación
    alertElement.present();
    //this.plaSer.deletePlace(this.place.id);
    //this.router.navigate(['/places']);
  }
}
