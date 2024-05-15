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

## Installation

1. **Clone the Repository:**
    - First, clone the Angular project repository to your local machine:
        ```bash
        git clone https://github.com/HariniParam/github-interactive-app.git
        cd github-interactive-app
        ```

2. **Install Dependencies:**
    - Install the required dependencies using npm:
        ```bash
        npm install
        ```

3. **Install Angular CLI:**
    - If you haven't already installed Angular CLI globally, do so using the following command:
        ```bash
        npm install -g @angular/cli
        ```

4. **Firebase Configuration:**
    - Create a new Firebase project on the Firebase Console.
    - Obtain your Firebase configuration (API keys, project ID, etc.) from the Firebase project settings.
    - Update the `environment.ts` and `environment.prod.ts` files in your Angular project with the Firebase configuration. These files are typically located in the `src/environments/` directory.

5. **Running the App:**
    - Start the development server using Angular CLI:
        ```bash
        ng serve -o
        ```
    - The application will be accessible at http://localhost:4200/.

## Deployment

You can access the deployed app at https://github-interactive-app.vercel.app.


## Comments
**How much time did you spend on the assignment? How was it divided between designing, coding, and testing?**
    -As I am new to Angular, took a major time in learning some basic concepts of TypeScript and Angular, and understanding the Angular project workflow.
    -Since the project structure and design samples were provided, the design phase took less time.
    -Implementing the features within the Angular framework was challenging, particularly navigating through the Angular workflow.

**What was hard about the assignment?**
    -Understanding the Angular workflow was challenging initially. Additionally, I had not worked with Firebase authentication and API calls before, so I needed extra time to become familiar with this aspect.

**What would you change about the assignment? **
    -I would like to add additional features like
        -Sorting Repositories by Stars
        -Filtering Repositories by Languages used
        -Displaying some more stats and relevant details about the User


