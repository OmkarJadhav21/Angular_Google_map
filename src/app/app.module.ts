import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { FormsModule } from "@angular/forms";
import { Ng2MapModule} from 'ng2-map';
@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    Ng2MapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCEMImiCyXlmsWCPdvyhoRDLkbzUfYxVj4'})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
