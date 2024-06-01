# About

This repository is a [Next.js](https://nextjs.org) template that can be used to publish the Next.js app as an NPM package. The idea is instead of making a desktop app using a native platform or Electron for cross-platform support, you can make a Next.js app that anyone can run locally in a single command.

# Demo

To run this repo's Next.js app, run the following command:

```
npx @nicnocquee/next-app-as-npm@latest
```

Once the package is downloaded, it will automatically run the production build of the Next.js app and open the [http://localhost:1184](http://localhost:1184) URL in your browser.

# Usage

To create your own Next.js app that can be published as an NPM package, you can use the template of this repository:

1. click the "Use this template" button on GitHub and then follow the instructions.
2. clone the repository to your local machine.
3. change the `name` of the package in `package.json` to your own package name.
4. run `npm install` to install the dependencies.
5. run `npm run dev` to start the development server.
6. start developing the Next.js app as usual.
7. once you're done, you can publish the app to NPM by running `npm publish --access public`.

The Next.js template is bootstrapped using [create-next-app](https://nextjs.org/docs/pages/api-reference/create-next-app) and equipped with [Shadcn UI components](https://ui.shadcn.com).

# License

MIT

# Contact

Nico Prananta - [@2co_p](https://twitter.com/2co_p) - [nico.fyi](https://nico.fyi)
