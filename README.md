# jihanki

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A project to crowdsource and provide open data of vending machines in Japan. The dataset includes geotagged photos and a CSV file, perfect for creating mapping applications.

## Demos

- [Vending Machine Map](https://code4fukui.github.io/jihanki/)
- [Vending Machines along the Megane Street](https://code4fukui.github.io/jihanki/meganestreet.html)

## Features

- Crowdsourced collection of geotagged vending machine photos.
- Automated EXIF data extraction for latitude and longitude.
- Provides data in multiple formats:
  - **CSV:** `jihanki.csv` with coordinates and links to images.
  - **Images:** Full-size photos (1024px width, portrait).
  - **Icons:** Thumbnail images (122px width, portrait).
- Simple integration with web mapping components like `<csv-map>`.

## Using the Data

You can access the data directly via the following URLs.

- **CSV Data:** [https://code4fukui.github.io/jihanki/jihanki.csv](https://code4fukui.github.io/jihanki/jihanki.csv)
- **Photo Data:** [img/](img/) (Hosted at `https://github.com/code4fukui/jihanki)
- **Icon Data:** [icon/](icon/) (Hosted at `https://github.com/code4fukui/jihanki)

### Example: Fetching Data in JavaScript

Here's how to fetch and parse the CSV data in a web browser:

```javascript
import { CSV } from "https://js.sabae.cc/CSV.js";

const url = "https://code4fukui.github.io/jihanki/jihanki.csv";
const data = CSV.toJSON(await CSV.fetch(url));
console.log(data);
/*
[
  {
    "icon": "icon/IMG_2299.jpg",
    "photo": "https://code4fukui.github.io/jihanki/img/IMG_2299.jpg",
    "lat": "35.943322",
    "lng": "136.195267"
  },
  ...
]
*/
```

## How to Contribute

This is a community-driven project, and we welcome contributions!

- **Submit Photos:** Take photos of vending machines with your phone's location services (GPS) enabled. Upload your photos to a new [GitHub Issue](https://github.com/code4fukui/jihanki/issues).
- **Submit a Pull Request:** If you're comfortable with Git, you can add the photos and run the update script yourself. See the section below.
- **Share Ideas:** Have an idea to improve the project? Open an [Issue](https://github.com/code4fukui/jihanki/issues) to discuss it.

## Updating the Dataset

This section is for maintainers or contributors who want to update the CSV file from source images.

### Requirements

- [Deno](https://deno.land/) runtime

### Steps

1.  Add new geotagged JPEG photos (1024px width, portrait orientation) to the `img/` directory.
2.  Create corresponding thumbnails (122px width, portrait orientation) and place them in the `icon/` directory.
3.  Run the script to regenerate `jihanki.csv` from the image EXIF data:
    ```bash
    deno run -A makecsv.js
    ```

## Acknowledgments

- This project uses the [EXIF.js](https://github.com/exif-js/exif-js) library (via `taisukef.github.io`) to extract latitude and longitude from photo metadata.

## License

MIT License — see [LICENSE](LICENSE).