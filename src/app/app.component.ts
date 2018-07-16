import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMapLoaded = false

  pins = [
    {
      latitude: 51.1102539,
      longitude: 17.0335773,
      label: '200usf'
    },
    {
      latitude: 51.111254,
      longitude: 17.033677,
      label: '100Eur'
    }
  ]

  ngOnInit(): void {
    setTimeout(() => {
      this.isMapLoaded = true
    }, 2000)

    setTimeout(() => {
      this.pins = [
        {
          latitude: 51.111654,
          longitude: 17.033977,
          label: 'Changed'
        }
      ]
    }, 5000)
  }
}
