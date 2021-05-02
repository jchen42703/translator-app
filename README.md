# Translator App

## Get Started (Devs)

1. Get the backend server up and running:

   ```
   cd backend
   yarn install
   yarn startDev
   ```

   (as of yarn v1.22.5, not the latest `berry` version)

   - `jest` and `nodemon` are a dev dependencies.

This loads up the proxy server at PORT=5000 (proxy to 3000).

1. Get the frontend server running:

   ```
   cd frontend
   yarn install
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

`Translator` encapsulates `InputEditor` and `TranslatedDisplay` and `Translator` passes its `editorState` as a prop to `InputEditor` and `TranslatedDisplay`.

1. `InputEditor` encapsulates `Editor` (`draft-js`) and passes the `Translator`'s `editorState` and `setEditorState` as props to `Editor`.
2. Then, `TranslatedDisplay` sets its own `toText` property to the updated prop text.
3. `TranslatedDisplay` takes its new `toText`, sends a POST request (as a json with that text), and displays the retrieved response text (aka the translated text).
