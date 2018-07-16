export class Marker extends google.maps.OverlayView {
  latlng
  div

  constructor(latitude, longitude, el, map) {
    super()
    this.latlng = new google.maps.LatLng(latitude, longitude)
    this.div = el
    this.setMap(map)
  }

  public onAdd() {
    const panes = this.getPanes()
    panes.overlayLayer.appendChild(this.div)
  }

  public draw() {
    const point = this.getProjection().fromLatLngToDivPixel(this.latlng)
    this.div.style.left = point.x - 50 + 'px'
    this.div.style.top = point.y - 60 + 'px'
  }
}
