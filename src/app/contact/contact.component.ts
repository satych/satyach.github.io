import { Component, OnInit } from '@angular/core';
9
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { send } from 'q';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   
  contactForm;
   url="https://api.mlab.com/api/1/databases/angularjs/collections/ReactiveContact?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1";

  constructor(public fB:FormBuilder,public http:HttpClient) {
        
    
    this.contactForm=this.fB.group({
      fullname:[" ",[Validators.required]],
      mobilenumber:[" ",[Validators.required]],
      emailid:[" ",[Validators.required]],
      location:[" ",[Validators.required]],
      contact_data:new Date(),
      remarks:[]
        });
        
       }
    
       abc() {
        this.http.post(this.url,this.contactForm.value).subscribe((x)=>{
          
          console.log(x);
        })
      }
      
        
  ngOnInit() {
  }

}
