# About

This repository is a [Next.js](https://nextjs.org) template that can be used to publish the Next.js app as an NPM package.

The idea is instead of making a "desktop" app using a native platform or Electron for cross-platform support, you can make a Next.js app that anyone can **run locally in a single command**. And the app can also work offline if it doesn't need to access the internet.

> [!NOTE]  
> I call it a "desktop" app even though it runs in the browser. Because unlike the web apps that are hosted in the cloud, the Next.js app using this template runs in user's computer and can have access to the file system.

# Why use this?

|     |                                                                                                                           |
| --- | ------------------------------------------------------------------------------------------------------------------------- |
| 👨‍💻  | Your app targets people who have installed Node.js in their computer, which is the majority of web developers these days. |
| ▲   | You're already familiar with Next.js.                                                                                     |
| 🌐  | You don't mind the app runs in the browser instead of in a stand alone window.                                            |

# Features

|     |                                                                                                                                                                            |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 👜  | Small package size. This template app is only 1.3 MB (excluding the dependencies, which will be downloaded when the user install the package).                             |
| 🔄  | Easy to update. Simply `npm publish --access public` to update the package. You can then show the banner or notification on the page when there's a new update.            |
| 📵  | Works offline. Unless your app actually needs to access the internet. Note that you need to install the package globally `npm i -g <package-name>` instead of using `npx`. |
| 🔐  | No need for authentication because the app runs on user's own computer. Less code to write! Users of your app can keep their data in their own computer.                   |
| 🌀  | No need to worry about network waterfalls or slow network. Every HTML, CSS, and JS files are literally already in the user's computer.                                     |
| 🗄️  | The Next.js app can have access to the file system. So you can persist data easily to text files, JSON, or even database like SQLite.                                      |

# Demo

To run this repo's Next.js app, run the following command:

```
npx @nicnocquee/next-app-as-npm@latest
```

Once the package is downloaded, it will automatically run the production build of the Next.js app and open the [http://localhost:4323](http://localhost:4323) URL in your browser.

If you want to run the app offline, you need to install it globally first instead of using `npx`:

```
npm i -g @nicnocquee/next-app-as-npm@latest
```

then run the app:

```
next-app-as-npm
```

# Usage

To create your own Next.js app that can be published as an NPM package, you can use the template of this repository:

1. click the "Use this template" button on GitHub and then follow the instructions.
2. clone the repository to your local machine.
3. change the `name` of the package in `package.json` to your own package name.
4. run `npm install` to install the dependencies.
5. run `npm run dev` to start the development server.
6. start developing the Next.js app as usual.
7. once you're done, you can publish the app to NPM by running `npm publish --access public`.

The Next.js template is bootstrapped using [create-next-app](https://nextjs.org/docs/pages/api-reference/create-next-app) and equipped with [Shadcn UI components](https://ui.shadcn.com) and [MDX support](https://nextjs.org/docs/pages/building-your-application/configuring/mdx).

# The main sauce

If you don't want to use the template, you can simply add the following properties to your package.json that enables the app to be published as an NPM package:

```json
{
  "bin": {
    "<package-name>": "start.js"
  },
  "files": [
    ".next",
    "next.config.mjs",
    "README.md",
    "LICENSE",
    "start.js",
    "public"
  ],
  "scripts": {
    "build": "rimraf .next && next build && rimraf .next/cache",
    "start": "concurrently \"next start -p 4323\" \"npm run open-browser\"",
    "bump": "npm version patch --force",
    "prepublishOnly": "npm run bump && npm run build",
    "open-browser": "wait-on http://localhost:4323 && open http://localhost:4323"
  },
  "dependencies": {
    "concurrently": "^8.2.2",
    "wait-on": "^7.2.0"
  },
  "devDependencies": {
    "copyfiles": "^2.4.1",
    "rimraf": "^5.0.5"
  }
}
```

Then add the [`start.js` file](https://github.com/nicnocquee/next-app-as-npm/blob/main/start.js) to the root of your project.

# License

MIT

# Contact

Nico Prananta - [@2co_p](https://twitter.com/2co_p) - [nico.fyi](https://nico.fyi)
