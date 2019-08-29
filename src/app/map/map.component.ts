import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map;
  constructor() { }

  ngOnInit() {  
    this.loadMapScenario();
  }

  loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
  }

}
