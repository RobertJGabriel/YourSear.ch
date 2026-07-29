# YourSear.ch

> An open-source metasearch engine that aggregates results from several sources.

YourSear.ch runs one query across multiple search engines and social networks and
brings the results back onto a single page, so you are not tied to any one
provider's ranking. It ships OpenDyslexic styling as an accessibility option.

## Requirements

Node.js, for the Gulp build.

## Setup

```sh
npm install
npx gulp
```

Then open `index.html`, or serve the folder:

```sh
python3 -m http.server
```

## Contents

| Path | Purpose |
| --- | --- |
| `index.html` | The search interface |
| `gulpfile.js` | Less compilation, CSS and JS minification |
| `assets/css/bootstrap/` | Bootstrap and Material Design styles |
| `assets/css/opendyslexic/` | OpenDyslexic accessibility stylesheet |
| `assets/dist/` | Minified build output |

## Status

An early-stage experiment, kept for reference. Not actively maintained — the
scrapers depend on page structures that have since changed.

## License

No licence file. All rights reserved unless stated otherwise.
