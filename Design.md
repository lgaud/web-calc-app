# Introduction

WebCalc is an online calculator app, designed to be a browser based alternative to Microsoft’s Calculator app that is included with Windows. 

## Functional Requirements

### Overall Functionality
- The calculator should have a browser-based user interface (ie it can be opened using a web
browser)
- The calculator should have a way to sign up with a username and password
- The calculator should have a way to log in with username and password
- The calculator should have a backend service to handle authentication
- The calculator should be usable with or without authentication
- The calculator should have a navigation bar or panel which displays the user’s authentication status

### Calculator Implementation
There are a lot of implementation details that vary by calculator. In general, WebCalc aims to follow the logic used in the Windows Calculator, Scientific mode. However, one difference will be that if the user hits the equal button multiple times, the result will stay unchanged, following Google's calculator widget.

- The calculator should have a number pad with digits 0-9 and decimal point
- The calculator should have buttons for addition, subtraction, multiplication, and division
- The calculator should have an equals button
- The calculator should have a display that shows the input and the result of the calculation.
    - The result will be updated each time the user clicks on an operator button, indicating that they have finished entering a number.
- The calculator should follow the order of operations (PEMDAS)
- The calculator should have the following features
    - Memory functions (M+, M-, MR, MC)
    - Percentage function (%)
    - Square root function (√)
    - Exponential function (^)
    - History function: The history function will save expressions and their results after the user hits the equal sign.

## Non functional requirements

- The user interface should be responsive and work at a variety of screen sizes, including desktop and mobile devices.
- There should be minimal delay for updating.

# Architecture

WebCalc will be a client server web app implemented using Next.js. The back end server application will handle login and the user's stored history, while the calculator itself will be front end JavaScript for fast interactions and updates. To speed up development, we can use create next-app and the with-passport example as a starting point. The user login and history will be saved to a Postgres database.

The calculator will leverage [mathjs](https://mathjs.org/) to parse the expressions while using PEDMAS order of operations.

# UX

There will 4 pages for the application: 
    - The main page with the calculator
    - A login form
    - A signup form
    - A user profile page, showing the history.
    
The calculator functionality should be entirely front end based, except to save and load history. Styling will be done primarily using Bootstrap. The MVP version will use default styles but this can be customized easily in the future.

# Security

- WebCalc should use HTTPS to communicate between client and server.
- WebCalc should use an ORM layer to properly sanitize all inputs to the database.

# Performance and Scalability

This project covers an MVP phase of WebCalc; since most of the functionality is on the front end we expect a simple single server back end to be more than sufficient.

# Code Repository and Deployment

We will use Git and GitHub for source control. The app will be deployed to Vercel using Vercel's Github integration.