import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  cards = [1,1,1,1,1];
  constructor() { }

  ngOnInit(): void {
  }

}
