# React + TypeScript + Vite

This is an example of how how you can implement microfront architecture in a monorepo
using react and - [@vite-plugin-federation]([https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md](https://www.npmjs.com/package/@originjs/vite-plugin-federation))
which support Module Federation. Inspired by Webpack and compatible with Webpack Module Federation.

## Run the aplication
  - Clone or download project files.
```sh
$ git clone https://github.com/DavidCZ94/micro-front-example.git # or clone your own fork
```
  - Install the dependences
  ```sh
$ npm install
```
  - This monorepo contains three distinct applications: the shell (application wrapper), micro front 1, and micro front 2. To run this project locally, you'll need to open three separate consoles and execute the following commands in sequential order.

  ```sh
$ npm run dev:mf1
```
  ```sh
$ npm run dev:mf2
```
  ```sh
$ npm run dev:shell
```

 - After all the processes are running you can open the browser in http://localhost:5000/home/mfReact/a
