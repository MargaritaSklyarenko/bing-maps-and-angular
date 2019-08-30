import { Component, OnInit } from '@angular/core';
//import { Microsoft } from ''

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map;
  
  constructor() { }

  ngOnInit() {  
    this.loadMap();
  }

  loadMap() {
    if (document.getElementById("scriptBingMaps")) {
      return; // already loaded
    }

    // Add a global function for the callback from Bing Maps api
    (<any>window).OnLoadBingMapsApi = () => this.InitMap();

    // Add programmaticaly the external Bing maps api script
    var scriptTag = document.createElement("script");
    scriptTag.src = "https://www.bing.com/api/maps/mapcontrol?callback=OnLoadBingMapsApi";
    scriptTag.id = "scriptBingMaps";
    // Inject the dynamic script in the DOM
    document.head.appendChild(scriptTag);
  }


  private InitMap(): void {
    let mapElement: HTMLElement = <HTMLElement>document.getElementById('myMap');
    var map = new Microsoft.Maps.Map(mapElement, {});
  }

}
