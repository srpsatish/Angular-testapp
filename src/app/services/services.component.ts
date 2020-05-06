import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  formdata:any;
  name:string;
  type:string;
  email:string;
  todayDate:Date;
  constructor(private s:MyservicesService) { }

  ngOnInit(): void {
    this.formdata= new FormGroup(
      {
        name:new FormControl('',Validators.required),
        type:new FormControl('',Validators.required),
        email:new FormControl('',Validators.compose([Validators.required, Validators.email]))
      }
    );
    this.todayDate=this.s.ShowDate();
  }

  onClickSubmit2(data:any)
  {
    this.name=data.name;
    this.type=data.type;
    this.email=data.email;

  }
}
