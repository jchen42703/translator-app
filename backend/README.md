# Backend Server

# Get Started

## Setup

```
yarn install
yarn startDev
```

- Note: `jest` and `nodemon` are dev dependencies.

## What should the requests look like?

For the development server (`yarn startDev`):

**`POST` to either:**

- `http://localhost:5000/translate`

  - You must specify the `foreign` text to translate and the development mode `devMode`:

    ```
    // Real translation
    {
      "foreign": "四位陆地神仙联手一击",
      "devMode": "real"
    }
    ```

    OR

    ```
    // Input text but duplicated. (Preserves new lines).
    {
      "foreign": "dadada\ndasdadasdd",
      "devMode": "pre"
    }
    ```

- `http://localhost:5000/translateWord`
  - Works the same as in production

## Dev Commands

Located in `package.json`.

| Command         | What does it do?                                                           |
| --------------- | -------------------------------------------------------------------------- |
| `yarn start`    | Starts the production server for dev. (only use this in special scenarios) |
| `yarn startDev` | Starts the development server. (Can do production capabilities + more)     |
| `yarn build`    | Starts the production server.                                              |
| `yarn test`     | Runs the `jest` tests.                                                     |
