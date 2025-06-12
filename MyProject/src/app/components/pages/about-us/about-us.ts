import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {
  //interpoblacion
  Greet = 'hello';
  framework :string='angular';
  //control de flujo
  //condicionales
  isLoggedIn: boolean = false;
  //ciclos
  devs = [
    { id: 1, name: 'anne' },
    { id: 2, name: 'pepita' },
    { id: 3, name: 'maria' }
  ];

}
