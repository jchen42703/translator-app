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

2. Get the frontend server running:

   ```
   cd frontend
   yarn install
   yarn start
   ```

   This loads up the main app at PORT=3000.

## Compiling SCSS

For a one-time compile:

```
// In ~/translator-app>
sass --no-source-map --style=compressed frontend/src/styles/scss/styles.scss frontend/src/styles/css/styles.css
```

For dev (auto-updates):

```
cd frontend
yarn sass-watch
```

OR from root:

```
sass --no-source-map --style=compressed --watch frontend/src/styles/scss:frontend/src/styles/css
```

## How does it work?

`Translator` encapsulates `InputEditor` and `TranslatedDisplay` and `Translator` passes its `editorState` as a prop to `InputEditor` and `TranslatedDisplay`.

1. `InputEditor` encapsulates `Editor` (`draft-js`) and passes the `Translator`'s `editorState` and `setEditorState` as props to `Editor`.
2. Then, `TranslatedDisplay` sets its own `toText` property to the updated prop text.
3. `TranslatedDisplay` takes its new `toText`, sends a POST request (as a json with that text), and displays the retrieved response text (aka the translated text).
