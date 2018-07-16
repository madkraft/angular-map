import {
  Component,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
  ContentChild,
  QueryList,
  Query,
  OnInit
} from '@angular/core'
import { MarkerComponent } from '../marker/marker.component'
import { Marker } from '../marker'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {
  @ViewChild('gmap') gmapElement: any

  @Input() isMapLoaded: boolean
  @Input() latitude: number
  @Input() longitude: number
  @Output() mapInit: EventEmitter<google.maps.Map> = new EventEmitter()

  map: google.maps.Map

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isMapLoaded && changes.isMapLoaded.currentValue) {
      const mapProp = {
        center: new google.maps.LatLng(this.latitude, this.longitude),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp)
      this.mapInit.emit(this.map)
    }
  }
}
