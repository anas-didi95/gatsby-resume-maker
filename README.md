<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Resume Maker
</h1>

The application to generate resume based on the values inputted in the JSON files.
Built using GatsbyJS, TypeScript and GraphQL

<br/>

## 🚀 Quick start

_Following guide is based on Linux environment._

1.  **Clone the site.**

    Clone the site using Git command.

    ```sh
    git clone https://github.com/anas-didi95/gatsby-resume-maker.git
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.
    The project is configured with VSCode Devcontainer.

    Open VSCode

    ```sh
    cd gatsby-resume-maker/
    code .
    ```

    Later the prompt to reopen project in container will display. Click it.
    After container is configured, install the packages and start the application using the VS Code terminal.

    ```sh
    # Install packages
    yarn install

    # Start application
    yarn start
    ```

    To generate GraphQL TypeScript typings using [GraphQL Code Generator](https://graphql-code-generator.com).
    ```sh
    yarn codegen:watch
    ```

    To check TypeScript typings.
    ```sh
    yarn type-check:watch
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000` if you using the VSCode Devcontainer! Otherwise, some file need to change in `package.json`.

    Open `package.json` and update `host` value to **127.0.0.1**.

    ```sh
      ...
      "scripts": {
      "prebuild": "npm run type-check",
      "build": "gatsby build",
      ## Update the command. Change --host 0.0.0.0 to --host 127.0.0.1
      #"develop": "gatsby develop --host 127.0.0.1 --port 8000",
      "develop": "gatsby develop --host 0.0.0.0 --port 8000",
      "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css}'",
      "start": "npm run develop",
      ## Update the develop command. Change --host 0.0.0.0 to --host 127.0.0.1
      #"serve": "gatsby serve --host 127.0.0.1 --port 8000",
      "serve": "gatsby serve --host 0.0.0.0 --port 9000",
      "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\"",
      "type-check": "tsc --noEmit",
      ...
    ```

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `gatsby-resume-maker` directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real time!

2.  **Print the resume**

    After finished editting, print the resume and save as PDF for softcopy.
    Set the **paper size** to **A4** and set other settings (margin, background color, etc) as required.
