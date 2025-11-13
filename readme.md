# qxtabris

qxtabris is a [Qooxdoo](https://qooxdoo.org/), server application that illustrates how Qooxdoo and [Tabris.js](https://tabris.com/) can work together.

## Set up

### Qooxdoo's boot loader for Tabris.js

Tabris uses the same basic module system as Node.js but does not support npm modules installed globally ([Referrence](https://docs.tabris.com/latest/modules.html)). Therefore, the following Node.js features must be installed as local modules:

* path [npm package](https://www.npmjs.com/package/path)
* url [npm package](https://www.npmjs.com/package/url)

Install the Tabris Cli locally.

```sh
npm i tabris-cli
```

Install the [Tabris.js Developer App](https://docs.tabris.com/latest/developer-app.html) on your mobile device.

You now should have everything needed to compile and run this project. The Qooxdoo compiler uses a loader template tailored for the Tabris.js runtime. Below is an exerpt from the project's compile.json file showing where the boot loader temple is stored.

```json
"applications": [
    {
      "class": "qxtabris.Application",
      "name": "qxtabris",
      "type": "node",
      "loaderTemplate": "template/loader-tabris.tmpl.js",
      "exclude": [ "qx.theme.*" ]
    }
  ]
```

## Compile and run the application

In it's own terminal window, compile and watch the Qooxdoo application.

```sh
npx qx compile --watch
```

In a different terminal window, run tabris serve

```sh
npm run start
```

Finally, use the Tabris.js Developer App to see the results.
