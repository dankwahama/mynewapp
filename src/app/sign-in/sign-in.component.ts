import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {
        onSubmit = function(user){
        console.log(user);
        }

  constructor() { }

  ngOnInit() {
  }

}
