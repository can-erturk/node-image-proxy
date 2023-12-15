## About this project
This is an image proxy tool. It allows you to use image assets from third-party sites without cookies. The purpose of creating the project is to prevent the source site from creating or reading cross-site cookies. If this is not prevented, the following issues will be encountered in the console.

> Current Chrome version: 120.0.6099.109

>- Issue: "Setting cookie in cross-site context will be blocked in future Chrome versions"
>- Issue: "Reading cookie in cross-site context will be blocked in future Chrome versions"

This issues will prevent you from developing projects that score 100 points from all features in Lighthouse. I developed this tool because the necessary adjustments were not made when cookies were saved by the content owner site.

## Usage example
Specify the image address you want to call using the "q" parameter in the "/" route.

>Example: http://localhost:3001/?q=https://assets.coingecko.com/coins/images/1/large/bitcoin.png