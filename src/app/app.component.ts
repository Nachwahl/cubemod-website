import {Component, HostListener, Inject} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CubeMod';
  public innerWidth: any;
  public date: any;

  /* set links here */

  public links = [
    {
      title: 'Startseite',
      url: '/'
    },
    {
      title: 'Features',
      url: 'features'
    },
    {
      title: 'Shop',
      url: 'shop'
    }
  ];

  constructor(public dialog: MatDialog) {
    this.innerWidth = window.innerWidth;
    this.date = new Date();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}



