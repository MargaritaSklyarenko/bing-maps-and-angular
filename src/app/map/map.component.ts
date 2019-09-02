
import { Component, OnInit } from '@angular/core';
declare const Microsoft: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  private map;
  private path = [];
  private PathData = [
    { 'latitude': 27.556935173743966, 'longitude': -87.82779206196983 },
    { 'latitude': 27.556931005386332, 'longitude': -87.82779509358437 },
    { 'latitude': 27.546937268651334, 'longitude': -87.83445758414149 },
    { 'latitude': 27.24070063485442, 'longitude': -87.4442259761239 },
    { 'latitude': 27.175503403004768, 'longitude': -87.15488351583895 },
    { 'latitude': 23.99065059984406, 'longitude': -84.0373187998976 },
    { 'latitude': 25.77584599986642, 'longitude': -90.33118889983115 },
    { 'latitude': 25.616522399636608, 'longitude': -91.6325661999598 },
    { 'latitude': 26.019719456008943, 'longitude': -92.11629829588912 }];
  
  constructor() { }

  ngOnInit() {  
    this.loadMap();
  }

  loadMap() {
    if (document.getElementById("scriptBingMaps")) {
      return;
    }

    (<any>window).OnLoadBingMapsApi = () => this.InitMap();

    var scriptTag = document.createElement("script");
    scriptTag.src = "https://www.bing.com/api/maps/mapcontrol?callback=OnLoadBingMapsApi";
    scriptTag.id = "scriptBingMaps";
    document.head.appendChild(scriptTag);
  }

  private InitMap(): void {
    let mapElement: HTMLElement = <HTMLElement>document.getElementById('myMap');

    this.map = new Microsoft.Maps.Map(mapElement, {});
    
    this.PathData.forEach(element => {
      this.path.push(new Microsoft.Maps.Location(element.latitude, element.longitude));
    });

    var polyline = new Microsoft.Maps.Polyline(this.path, { strokeColor: 'rgb(127, 255, 0)', strokeThickness: 10 });
    this.map.entities.push(polyline);
  }

}
