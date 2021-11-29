## Home Assistant UI Components

### Development

Development relies on VS Code Studio and the [Remote Containers](https://code.visualstudio.com/docs/remote/containers) extension.

1. Install [docker](https://www.docker.com/get-started) if it's not installed already.
2. Install the VS Code Studio [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.
3. Create a remote container with Ubuntu, Python, Git, and other necessary tools. Follow [Remote Containers tutorial](https://code.visualstudio.com/docs/remote/containers-tutorial#_check-installation)
4. Run `npm install` or `yarn install`. See `package.json` for list of scripts.
5. Scripts start with `serve` will spin up a Parcel server at port 8000 to serve the compiled JS file(s).
6. (Optional, but recommended) install a [Home Assistant container](https://www.home-assistant.io/installation/linux#install-home-assistant-container) inside the docker container so that you can use a fresh HASS instance to test changes.
