import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  ElementRef
} from '@angular/core'
import { Marker } from '../marker'

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css']
})
export class MarkerComponent implements OnInit, OnChanges {
  @Input() latitude: number
  @Input() longitude: number
  @Input() map: google.maps.Map

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.map && changes.map.currentValue) {
      const marker = new Marker(
        this.latitude,
        this.longitude,
        this.el.nativeElement,
        this.map
      )
    }
  }
}
