import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  //template: `<reports> </reports>`,
   templateUrl: './components/templates/app.component.html',
   styleUrls: ['./app.component.css']

})
export class AppComponent  { name = 'Angular'; }
