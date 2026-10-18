# Enochian: A Symbolic Representation of the Universe

A single-page interactive grimoire for exploring the Enochian system recorded by Dr. John Dee and Sir Edward Kelley (1582-1589). It is a modern HTML5 re-engineering of a classic Visual Basic 6 Enochian software suite, rebuilt to run entirely in the browser with no backend and no build step.

The app covers the 19 Angelic Keys, the Great Table of the Watchtowers, the Tablets of Creation, the Lamen, the planetary Ensigns, a searchable Enochian lexicon with a live gematria calculator, and a world map that matches any location to its nearest Governor.

## Features

| Tab | What it does |
| --- | --- |
| **Enochian Calls** | Browse the 19 Calls. Shows the text in Enochian script or Latin alphabet, the phonetic text, and the English translation. A **Recite** button reads the translation aloud with the browser's speech synthesis (en-GB voice preferred). |
| **World Map** | "The 91 Governors." Search for any city (with autocomplete), fly to it on the map, and get the nearest resonating Governor, its Aethyr, location, distance, ruling angel, quarter, and Good Ministers. A dashed line connects your location to the Governor's site. |
| **Great Table** | Two variants: *Tabula Recensa* (1857) and *The Great Table* (1584). Select a quadrant to see its Watchtower hierarchy: Holy Names, Great Elemental King, Seniors, Kerubic Angels, Lesser Angle powers, and compelling names. Includes the 30 Aethyrs. |
| **VII Tablets** | Tablets of Creation shown as 7x7 grids with cell numbers on hover, the floating *Sigillum Dei Aemeth*, and the *Tabula Bonorum* image. |
| **Lamen** | The Heptarchic Lamen redrawn as SVG so its letters can be shown in either script, plus the original Lamen image. |
| **Ensign** | Pick one of the seven planetary symbols to view its Ensign. |
| **Dictionary & Gematria** | Search the Enochian-to-English concordance by word, meaning, or numeric value, and use the live gematria calculator. |
| **Reference Archive** | Background on the project and its data sources. |

Global controls in the sidebar:

- **Enochian Script** toggle switches the whole app between the Latin alphabet and the Enochian typeface.
- **Harmonic Resonance** toggle enables synthesized UI sounds (clicks and a whoosh) via the Web Audio API.

## Tech Stack

- Vanilla JavaScript (ES2022), no framework and no bundler
- [Tailwind CSS](https://tailwindcss.com/) via the Play CDN
- [Leaflet](https://leafletjs.com/) 1.9.4 for the map overlay (markers, popups, `flyTo`, polylines)
- [MapLibre GL JS](https://maplibre.org/) with [`@maplibre/maplibre-gl-leaflet`](https://github.com/maplibre/maplibre-gl-leaflet) to render vector tiles
- [OpenFreeMap](https://github.com/hyperknot/openfreemap) for free vector map tiles from OpenStreetMap data
- [Nominatim](https://nominatim.org/) for city search and autocomplete
- Web Audio API and Web Speech API for sound and recitation
- Google Fonts: Cinzel and Inter

## Project Structure

Everything must sit in the same folder as the HTML file.

```
.
├── index.html                 # The application (markup, styles, logic)
├── enochian-data.js           # Dictionary and Tablets of Creation data (window.EnochianData)
├── enochian-calls.js          # The 19 Calls (window.ENOCHIAN_CALLS)
├── enochian-tables.js         # Great Table, Watchtowers, Aethyrs, Lamen, planets (window.EnochianTables)
├── enochian-worldmap.js       # Governor sites and Aethyrs for the map (window.EnochianWorld)
│
├── deenoch.ttf                # Enochian typeface
├── ASTRO.ttf                  # Astro typeface
├── kartka.ttf                 # Kartka typeface
├── t4cbeaulieux.ttf           # Beaulieux typeface
│
├── earth.jpeg                 # Image on the World Map sidebar
├── sigillumdeiaemeth.png      # Sigillum Dei Aemeth
├── tabula-bonorum.jpeg        # Tabula Bonorum
├── original-lamen.jpeg        # Original Lamen
└── (planetary Ensign images)  # File names are defined in enochian-tables.js
```

If a data file fails to load, the app logs an error in the console and shows a "Could not load" message. If an image is missing, a placeholder with the expected file name appears instead.

## Getting Started

The app is static, so any web server will do.

```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# Serve it locally (pick one)
python3 -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000` in your browser.

You can also open `index.html` directly from disk. A local server is recommended, though, because some browsers restrict font loading and external requests on `file://` pages.

### Deploying

The project works on any static host, such as GitHub Pages, Netlify, or Cloudflare Pages. For GitHub Pages, push to your repository and enable Pages under **Settings -> Pages**.

## Network Requirements

The page loads resources from these hosts, so they must be reachable:

| Host | Used for |
| --- | --- |
| `cdn.tailwindcss.com` | Tailwind CSS |
| `unpkg.com` | Leaflet, MapLibre GL, and the Leaflet bridge |
| `fonts.googleapis.com` / `fonts.gstatic.com` | Cinzel and Inter fonts |
| `tiles.openfreemap.org` | Vector map tiles and styles |
| `nominatim.openstreetmap.org` | City search and autocomplete |

## Map Styling

The map uses OpenFreeMap's `positron` style. A CSS filter inverts it into a dark theme that matches the app:

```css
.maplibregl-canvas,
.leaflet-control-zoom-in,
.leaflet-control-zoom-out,
.leaflet-control-attribution {
    filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
}
```

To try another style (`liberty`, `bright`), change the URL passed to `L.maplibreGL` in `initMap()` and remove the filter if you want its native colors.

## Gematria

The calculator uses this letter-value table:

| Letter(s) | Value | Letter(s) | Value |
| --- | --- | --- | --- |
| A | 6 | O | 70 |
| B | 5 | P | 8 |
| C, K | 300 | Q | 100 |
| D | 4 | R | 200 |
| E | 5 | S | 9 |
| F | 8 | T | 9 |
| G | 3 | U, V, W | 70 |
| H | 5 | X | 400 |
| I, Y, J | 60 | Z | 7 |
| L | 30 | M | 40 |
| N | 50 | | |

## Data Sources

The dictionary and tablet data derive from the fixed-length `ROWEDIC.DAT` and `TABLETS.DAT` files of the original VB6 suite, now compiled into `enochian-data.js`.

## Attribution

Created by **Michael W.P. Wenas** - [michaelwenas.biz.id](https://michaelwenas.biz.id)

Map data is from [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, served by [OpenFreeMap](https://openfreemap.org) and [OpenMapTiles](https://www.openmaptiles.org/).

## License

This project is released under a **Copyfarleft** license. Copyfarleft licensing is free for workers, cooperatives, and the commons to use, modify, and share, while restricting commercial exploitation by those who profit from labor without contributing back.

Third-party components keep their own licenses: Leaflet, MapLibre GL JS, Tailwind CSS, and the map data and tiles credited above. Check the licenses of the bundled fonts and images before redistributing them.
