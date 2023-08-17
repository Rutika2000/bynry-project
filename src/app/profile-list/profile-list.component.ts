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
      name: 'Rajesh',
      image: 'https://www.shareicon.net/square-profile-user-user-profiles-avatar-people-715342',
      about:
        'Hi, I am Rajesh from Maharashtra, where the bustling city of Mumbai and the serene Western Ghats coexist. I work in the film industry and love exploring the local street food scene during my free time.',
      location: {
        latitude: 19.076,
        longitude: 72.8777,
      },
    },
    {
      position: 2,
      name: 'Amit',
      image: 'https://www.shareicon.net/square-profile-user-user-profiles-avatar-people-715342',
      about:
        'Hey there, I am Amit from the bustling capital city of Delhi. I work in tech and enjoy exploring the historical monuments and diverse cuisines that the city has to offer.',
      location: {
        latitude: 28.6139,
        longitude: 77.2090,
      },
    },
    {
      position: 3,
      name: 'Anjali',
      image: 'https://www.shareicon.net/square-profile-user-user-profiles-avatar-people-715342',
      about:
        "Hi, I'm Anjali from the royal land of Rajasthan. I'm a fashion designer and find inspiration in the intricate details of our traditional clothing and jewelry.",
      location: {
        latitude: 28.0229,
        longitude: 73.3119,
      },
    },
    {
      position: 4,
      name: 'Divya',
      image: 'https://www.shareicon.net/square-profile-user-user-profiles-avatar-people-715342',
      about:
        "Hello, I'm Divya from Punjab, known for its rich agricultural heritage and lively Punjabi culture. I'm a fitness enthusiast and enjoy dancing to the beat of Bhangra music.",
      location: {
        latitude: 31.6340,
        longitude: 74.8723,
      },
    },
    {
      position: 5,
      name: 'Sunita',
      image: 'https://www.shareicon.net/square-profile-user-user-profiles-avatar-people-715342',
      about:
        "Namaste, I'm Sunita from the lush green state of Kerala. I'm a nature enthusiast and spend my weekends exploring the serene backwaters and indulging in traditional Ayurvedic practices.",
      location: {
        latitude: 8.5241,
        longitude: 76.9366,
      },
    },
    {
      position: 6,
      name: 'Rahul',
      image: 'https://www.shareicon.net/square-profile-user-user-profiles-avatar-people-715342',
      about:
        "Hi, I'm Rahul from Uttar Pradesh, where the Ganges flows and history echoes through the streets. I'm a literature buff and find inspiration in the stories of the Mughal era.",
      location: {
        latitude: 26.8467,
        longitude: 80.9462,
      },
    },
    {
      position: 7,
      name: 'Meena',
      image: 'https://www.shareicon.net/square-profile-user-user-profiles-avatar-people-715342',
      about:
        "Hello, I'm Meena from West Bengal, famous for its art, literature, and sweets. I'm a passionate painter and love capturing the essence of Kolkata's bustling streets on canvas.",
      location: {
        latitude: 22.5958,
        longitude: 88.2636,
      },
    },
    {
      position: 8,
      name: 'Priya',
      image: 'https://www.shareicon.net/square-profile-user-user-profiles-avatar-people-715342',
      about:
        'Hello, I am Priya from Tamil Nadu, known for its rich cultural heritage and vibrant temples. I am a classical dancer and often find solace in the melodies of Carnatic music.',
      location: {
        latitude: 13.0827,
        longitude: 80.2707,
      },
    },
    {
      position: 9,
      name: 'Naveen',
      image: 'https://www.shareicon.net/square-profile-user-user-profiles-avatar-people-715342',
      about:
        "Hey there, I'm Naveen from Karnataka, home to the Silicon Valley of India, Bengaluru. I'm an IT professional and enjoy unwinding with a cup of filter coffee and a good book.",
      location: {
        latitude: 12.9716,
        longitude: 77.5946,
      },
    },
    {
      position: 10,
      name: 'Aisha',
      image: 'https://www.shareicon.net/square-profile-user-user-profiles-avatar-people-715342',
      about:
        "Salaam, I'm Aisha from the beautiful state of Jammu and Kashmir. I'm a trekking enthusiast and adore the pristine landscapes of the Himalayas that surround me.",
      location: {
        latitude: 34.0837,
        longitude: 74.7973,
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
    const dialogRef = this.dialog.open(MapComponent, {
      data: profile,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
