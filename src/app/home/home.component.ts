import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public innerWidth: any;
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({block: 'end', behavior: 'smooth'});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
