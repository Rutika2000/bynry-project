import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent implements OnInit {
  profiles = [
    {
      position: 1,
      name: 'Sonu',
      image: '',
      about: '',
      location: {
        latitude: 27.1767,
        longitude: 78.0081,
      },
    },
    {
      position: 2,
      name: 'Mahesh',
      image: '',
      about: '',
      location: {
        latitude: 18.5204,
        longitude: 73.8567,
      },
    },
    {
      position: 3,
      name: 'Shree',
      image: '',
      about: '',
      location: {
        latitude: 28.7041,
        longitude: 77.1025,
      },
    },
    {
      position: 4,
      name: 'Sam',
      image: '',
      about: '',
      location: {
        latitude: 19.0760,
        longitude: 72.8777,
      },
    },
  ];
  displayedColumns: string[] = [
    'position',
    'name',
    'image',
    'about',
    'location',
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  selectProfile(profile: any) {
    const dialogRef = this.dialog.open(MapComponent, {
      data: profile,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
