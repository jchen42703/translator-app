# Translator App

## Get Started (Devs)

1. Get the backend server up and running:

   ```
   cd backend
   yarn add .
   nodemon index.js
   ```

   This loads up the proxy server at PORT=5000 (proxy to 3000).

2. Get the frontend server running:

   ```
   cd frontend
   yarn add .
   yarn start
   ```

   This loads up the main app at PORT=3000.

To convert the scss to css:

```
cd frontend
node-sass src/styles/scss -o src/styles/css --output-style compressed
```

- Uses SCSS and `include-media` for styling.

  - To use compile the scss, use `node-sass` and the command `node-sass styles/scss -o styles/css` in the root directory.
    - To output compressed css, run `node-sass styles/scss -o styles/css --output-style compressed`.
    - To remove duplicate css, use `postcss` and `cssnano`:
      - `npm install cssnano --save-dev`
      - `npm install postcss-cli --global`
      - For Windows users, run `removeDuplicateCSS.bat` in command to produce a css file without duplicates. It's much slower than just using `node-sass` so this is only recommended for production.
  - To install `include-media`, run `npm install include-media` for the user and then use the appropriate `@import` for `scss/vendor/s_include-media.scss`.

## How does it work?

The inputted text (at the bottom) is logged by `InputEditor` and is passed as a prop to `TranslatedDisplay`. `TranslatedDisplay` takes that text, sends a POST request (as a json with that text), and displays the retrieved response text.
