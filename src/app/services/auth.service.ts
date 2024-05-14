import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userEmail: string | null = null;

  constructor(private fireAuth : AngularFireAuth, private router : Router, private toastr: ToastrService) { }

  signup(email : string, password : string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      ()=> {
        this.toastr.success('Signup successful!', 'Success');
        this.router.navigate(['/signin']);
      },
      err => {
        this.toastr.error(err.message, 'Signup Failed');;
        this.router.navigate(['/signup']);
      }
    )
  }

  signin(email : string, password : string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      (userCredential)=>{
        localStorage.setItem('token', 'true');
        const user = userCredential.user;
        this.userEmail = user ? user.email : null;
        this.toastr.success(`Successfully logged in! Welcome, ${this.userEmail}`, 'Success');
        this.router.navigate(['/home']);
      },
      err => {
        this.toastr.error(err.message, 'Login Failed');
        this.router.navigate(['/signin']);
      }
    )
  }

  getUserEmail(): string | null {
    return this.userEmail;
  }

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(){
    this.fireAuth.signOut().then(
      ()=>{
        localStorage.removeItem('token');
        this.toastr.success('Logged out successfully!', 'Success');
        this.router.navigate(['/signin']); 
      },
      err => {
        this.toastr.error(err.message, 'Logout Failed');
      }
    )
  }
}
