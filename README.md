# Contact Form Application

Angular contact form application with Express.js backend, MongoDB database, and email notifications.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.3.

## Prerequisites

- Node.js (v18 or higher)
- MongoDB installed and running
- NPM or Yarn

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Environment Setup

1. Copy the environment example file:
```bash
copy .env.example .env
```

2. Edit the `.env` file and configure your settings:
```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=recipient@example.com
MONGODB_URI=mongodb://localhost:27017/contactdb
PORT=3000
```

## Running the Application

### Start MongoDB
Make sure MongoDB is running:
```bash
# MongoDB should be running as a Windows service
# Check status: Get-Service -Name "MongoDB"
```

### Start the Backend Server
In one terminal:
```bash
npm run server
```

### Start the Angular Development Server
In another terminal:
```bash
npm start
```

Once the servers are running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Features

- ✅ Angular 20 with standalone components
- ✅ Reactive forms with validation
- ✅ Express.js REST API
- ✅ MongoDB database integration
- ✅ Email notifications via Nodemailer
- ✅ CORS enabled
- ✅ Environment variables for security
- ✅ Proxy configuration for development

## API Endpoints

- `POST /api/contact` - Submit a contact message
- `GET /api/contact` - Retrieve all contact messages

## Scripts

- `npm start` - Start Angular dev server with proxy
- `npm run build` - Build Angular application
- `npm run server` - Start Express.js backend server
- `npm test` - Run tests

## Project Structure

```
├── src/                    # Angular application
│   ├── app/
│   │   ├── contact-form/   # Contact form component
│   │   └── ...
├── backend/                # Express.js server
│   ├── server.js          # Main server file
│   └── ...
├── proxy.conf.json        # Angular proxy configuration
├── .env.example          # Environment variables example
└── package.json
```

## Security Notes

- Never commit the `.env` file to version control
- Use Gmail App Passwords instead of your regular password
- The `.env.example` file shows the required environment variables

## Troubleshooting

1. **MongoDB Connection Issues**: Ensure MongoDB is running and accessible
2. **Email Issues**: Verify Gmail App Password and sender email configuration  
3. **Build Errors**: Run `npm install` to ensure all dependencies are installed
4. **Proxy Issues**: Make sure the backend server is running on port 3000

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
