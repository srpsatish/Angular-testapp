import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  u=[];
  constructor(private s:MyservicesService) { }

  ngOnInit(): void {
    this.s.getUsers().subscribe((data) =>{this.u=Array.from(Object.keys(data),k=>data[k]);
    });

  }

}
