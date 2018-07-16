import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {} from 'googlemaps'

import { AppComponent } from './app.component'
import { MarkerComponent } from './marker/marker.component'
import { MapComponent } from './map/map.component'

@NgModule({
  declarations: [AppComponent, MarkerComponent, MapComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
