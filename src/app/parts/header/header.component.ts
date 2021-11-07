import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navItems = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Blog', link: 'blog' },
    { name: 'Survey', link: 'survey' },
    { name: 'Contact Us', link: 'contact' }
  ];
}
