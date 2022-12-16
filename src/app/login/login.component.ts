import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{ //3rd executed
        //class is a collection of properties and methods
    constructor() { //1st executed
        //used for object initialization
        //It automatically invokes when an object is created
    }
    ngOnInit(): void { //2nd executed
        //Initial process of a component
        //when a component is created, at same time it initialize or authorize
        //when acomponent is created, there is alifecycle for it
    }

    //properties

    aim="Your perfect banking partner"

    accountNo="Enter your Acc.No"

    acno="";//to hold the value from the user

    pswd="";//

    userDetails:any={
      1000:{acno:1000,username:"Pranav",password:1000,balance:2000},
      1001:{acno:1001,username:"Abhinand",password:1001,balance:3000},
      1002:{acno:1002,username:"Adwaith",password:1002,balance:4000}
    }
    //userdefined function //4th executed

    Login(){
      var acno=this.acno;
      var pswd=this.pswd;
      var userDetails=this.userDetails;

      if(acno in userDetails){
        if(pswd==userDetails[acno].password){
          alert('Login successful')
        }
        else{
          alert('Incorrect Password')
        }
      }
      else{
        alert('user not found')
      }
    }
    acnoChange(event:any){
      // console.log(event.target.value);
      this.acno=event.target.value;
      console.log(this.acno);
      
      
    }
    pswdChange(event:any){
      // console.log(event.target.value);
      this.pswd=event.target.value;
      console.log(this.pswd);
    }
}
