# Redux Counter Example

This project showcases a lot of different technologies in combination. You can use it as reference or as a starting point for a new project.

## What technologies / tools does it use ?

* React
* Redux
* Server Side Rendering
* Immutable.js
* Scss + Css Modules
* Jest + Enzyme + Sinon
* Bulma

It actually uses more libraries than the ones listed above but I feel like these are the most important. The file structure is pretty good also. If anyone got any feedback I'd appreciate it a lot.

## Steps to run it

1. `git clone https://github.com/gianlucacandiotti/redux-counter-example.git PROJECT_NAME`.
2. `cd PROJECT_NAME && yarn` (or `npm install` if that suites you better).
3. `cp .env-example .env`
4. Modify your .env file to have the HOST variable be the same as your project's url (localhost by default).

You are all set to go. Now you may just run the commands below to start developing ! For development I open two consoles in order to run `npm run dev` and `npm start`, then open a browser pointing to your project's url at port 3000 (by default).

## Tasks to run it

These are the tasks included in the template. I'll use most of the descriptions from the [Vuejs Webpack template](https://github.com/vuejs-templates/webpack) and [create-react-app](https://github.com/facebookincubator/create-react-app) projects since the configuration is a merge of those. If you want to know anything else about the tasks, about the folder structure or how to change or extend anything refer to their docs.

- `npm start`: Runs the express app on port 3000.
  - You can change the port in the .env file.
  - It will automatically load routes created on the routes folder, you just have to export an object with a format from each file. Use the once already created as reference.

- `npm run dev`: First-in-class development experience.
  - The page will reload if you make edits.
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `base.blade.php` is auto-generated with proper URLs to these generated assets.

- `npm run unit`: Uses the same configuration as a [create-react-app](https://github.com/facebookincubator/create-react-app) generated project.
  - Runs the test watcher in an interactive mode.
  - By default, runs tests related to files changes since the last commit.

- `npm run generate-html`: Generates individual .html files for each route the application handles.
  - For the moment you have to manually keep track of your routes.
  - It automatically creates a folder structure that represent all the routes in the application.

## So, anything else ?

Not really. I'd just want to thank you for giving it a try or at least reading through. If you have any feedback it'd be greatly appreciated. I bet a lot of things could be improved and I'm open to discussion, so open an issue, send a pull request or message me to gianluca.prwlr@gmail.com.
