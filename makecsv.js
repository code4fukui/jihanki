import { CSV } from "https://js.sabae.cc/CSV.js";
import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { EXIF } from "https://taisukef.github.io/exif-js/EXIF.js";

const fns = await dir2array("img");
const data = [];
for (const fn of fns) {
  if (!fn.endsWith(".jpg")) {
    continue;
  }
  const bin = await Deno.readFile("img/" + fn);
  const exif = EXIF.readFromBinaryFile(bin.buffer);
  if (!exif) {
    throw new Error(fn + " has no EXIF");
  }
  const ll = EXIF.toLatLng(exif);
  data.push({
    icon: "icon/" + fn,
    photo: "https://code4fukui.github.io/jihanki/img/" + fn,
    lat: ll.lat.toFixed(6),
    lng: ll.lng.toFixed(6),
  })
}
await Deno.writeTextFile("jihanki.csv", CSV.stringify(data));
