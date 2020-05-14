A fork from [gatsby-advanced-starter](https://github.com/vagr9k/gatsby-advanced-starter) theme from vagr9k. Check out his excellent theme as a great minimal starter for any gatsby project, as well as notes on what made this a great skeleton theme in the first place

How is this theme any different? A few improvements were made:

- Flattened the components structure so it's easier to modify and customize 
- Moved over independent css styles to a sass-folder struct so you can customize styles quickly
- Convert class components to React Hook friendly components

Here's a quick guide through on how this gatsby-advanced starter works:

## QUICK INSTALL

- `$ npm install`
- `$ npm run dev`

## BACKEND

- gatsby-config.js -> this is your plugins, similar to wordpress plugins
  - When you run the backend to create `public and .cache`, these plugins are being looked at for generating graphql assets
  - When you run the frontend to consume it, it's using those same assets from `public and .cache`. It's also bundling a javascript library to frontend (imageResharp -> lazy loading images)
- gatsby-node.js -> this is the settings to point your data sources, 
  - also includes graphql setup
- data/siteConfig.js -> backend file configs

gatsby-node.js -> gatsby-config.js (middleware plugins - backend processing, and JS library frontend) -> frontend

## DATA

- content -> this is where markdown files live

## BUILD PIPELINES

- .cache 
- public 

## FRONTEND

- src/
  - layout -> entry point
  - pages -> localhost:8000/about
  - templates -> base styling/html for tags/categories/posts
  - components -> dumb reusable react components

## DEV WORKFLOW

- anytime you modify backend files (gatsby-config.js, gatsby-node.js, siteConfig.js) -> you need to clean cache using `$ npm run clean` and then `$ npm run dev`
- basically the 3 backend files are generating data to `public` and `.cache` that the frontend references.
- basically when you deploy the website, there's no backend running
- If you change frontmatter on `md`, you need to run `$ npm run clean` again

