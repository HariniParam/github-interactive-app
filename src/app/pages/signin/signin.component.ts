import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {
  email: string = ''; 
  password: string = ''; 

  constructor (private auth : AuthService, private toastr: ToastrService){}

  ngOnInit(): void { }

  signin(){
    if(this.email == ''){
      this.toastr.error('Please enter email!', 'Error');
      return;
    }
    if(this.password == ''){
      this.toastr.error('Please enter password!', 'Error');
      return;
    }
    if(this.password.length < 6){
      this.toastr.error('Password must be at least 6 characters long!', 'Error');
      return;
    }
    this.auth.signin(this.email, this.password);
    this.email = '';
    this.password = '';
  }

}
