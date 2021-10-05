import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  {
    path: 'places',
    children:[
      {
        path:'',
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
      },
      {
        //Cada vez que se ponga un numero en el path /1.. o /2 me envie a ese modulo (place-detail.module)
        path:':placeId',
        loadChildren: () => import('./places/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
      }
    ]
  },
  {
    //Carga determinadas porciones de codigo con loadchildren (no todos)
    path:'new-place',
    loadChildren: () => import('./places/place-add/place-add.module').then(m => m.PlaceAddPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
