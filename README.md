# Translator App

## Get Started (Devs)

1. Get the backend server up and running:

   ```
   cd backend
   nodemon index.js
   ```

   This loads up the proxy server at PORT=5000 (proxy to 3000).

2. Get the frontend server running:

   ```
   cd frontend
   yarn start
   ```

   This loads up the main app at PORT=3000.

## How does it work?

The inputted text (at the bottom) is logged by `InputEditor` and is passed as a prop to `TranslatedDisplay`. `TranslatedDisplay` takes that text, sends a POST request (as a json with that text), and displays the retrieved response text.
