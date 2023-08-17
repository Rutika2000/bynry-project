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
        latitude: '',
        longitude: '',
      },
    },
    {
      position: 2,
      name: 'Mahesh',
      image: '',
      about: '',
      location: {
        latitude: '',
        longitude: '',
      },
    },
    {
      position: 3,
      name: 'Shree',
      image: '',
      about: '',
      location: {
        latitude: '',
        longitude: '',
      },
    },
    {
      position: 4,
      name: 'Sam',
      image: '',
      about: '',
      location: {
        latitude: '',
        longitude: '',
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

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  selectProfile(profile: any) {
    console.log('profile', profile);
    const dialogRef = this.dialog.open(MapComponent, {
      data: profile,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
