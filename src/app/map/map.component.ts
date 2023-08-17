import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import * as L from 'leaflet';

export interface DialogData {
  position: number;
  name: string;
  image: string;
  about: string;
  location: {
    latitude: number;
    longitude: number;
  };
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map: any;

  constructor(
    public dialogRef: MatDialogRef<MapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.initMap()
  }
  private initMap(): void {

    this.map = L.map('map').setView([this.data.location.latitude, this.data.location.longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    L.marker([this.data.location.latitude, this.data.location.longitude]).addTo(this.map)
  }
}
