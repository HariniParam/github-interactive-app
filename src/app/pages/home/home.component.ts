import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  githubUsername!: string;
  githubUser: any;
  githubRepo!: any[]|null;
  errorMessage!: string;
  constructor (private githubService:GithubService) {}
  ngOnInit(): void {}

  searchUser (){
    this.githubService.getUser(this.githubUsername).subscribe({
      next: (data: any) => {
        this.githubUser = data;
        this.errorMessage = '';
      },
      error: (error: HttpErrorResponse) => {
        this.handleError(error);
      }
    });

    this.githubService.getRepos(this.githubUsername).subscribe({
      next: (data: any) => {
        this.githubRepo = data;
        this.errorMessage = '';
      },
      error: (error: HttpErrorResponse) => {
        this.handleError(error);
      }
    });
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      this.errorMessage = `Backend returned code ${error.status}: ${error.statusText}`;
    }
    this.githubUser = null;
    this.githubRepo = null;
  }
}
