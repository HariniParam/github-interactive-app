# GithubInteractiveApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Problem Statement

Build an Angular Application which:
- Retrieves all the public repositories for the searched user.
- Allows users to sign in/sign up using basic forms.
- Once a user is logged in, they should be able to search GitHub users using a search box by entering the username.
- After entering a correct username, the home page should be populated with:
  - User details
  - All public repositories of the user.

## Project Structure

Below is the architecture of this application:

### Components Folder
Contains reusable components:
- **Repos Component**: A dynamic component which will have the entire repositories list of the given user.
- **User Card Component**: Will have user details of the given user.

### Layout Folder
Contains fixed components which will be available on all the pages.

### Pages Folder
- **Home**: Hosts all the components like the search bar, user detail card, and repo list.
- **PageNotFound**: This component should load whenever the user tries to access an invalid URL.
- **Signin/Signup**: Contains sign-in/sign-up forms.

### Services
Contains all the service files:
- **AuthService**: Has all the API calls for sign-in/sign-up feature using Firebase.
- **GithubService**: Has all the API calls for searching and getting user details and repo list using GitHub public APIs.