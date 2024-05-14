import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  email: string = ''; 
  password: string = ''; 

  constructor (private auth : AuthService, private toastr: ToastrService){}
  ngOnInit(): void {}

  signup(){
    if(this.email == ''){
      this.toastr.error("Please enter email!!","Error");
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
    this.auth.signup(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
