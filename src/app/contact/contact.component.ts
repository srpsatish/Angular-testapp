import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fname:string;
  email:string;
  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(data:any)
  {
    alert(data.fname)
    alert(data.email)
  }

}
