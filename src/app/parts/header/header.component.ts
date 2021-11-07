import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  navItems = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Blog', link: 'blog' },
    { name: 'Survey', link: 'survey' },
    { name: 'Contact Us', link: 'contact' }
  ];
  setOpacityLevel = false;
  destroy = new Subject();
  destroy$ = this.destroy.asObservable();

  constructor() {
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }

  toggleMenu(): void {
    const hamburger = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav-list');
    const links = document.querySelectorAll('.nav-list .nav-item');

    console.log('check navlis: ', navList);

    // navList.classList.toggle('open');
    // links.forEach(element => {
    //   element.classList.toggle('fade');
    // });

  }

}
