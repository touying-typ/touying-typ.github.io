# Touying

[![typst universe](https://img.shields.io/badge/typst-universe-239dad?logo=typst&logoColor=white)](https://typst.app/universe/package/touying)
[![GitHub Stars](https://img.shields.io/github/stars/touying-typ/touying?style=flat&logo=github)](https://github.com/touying-typ/touying/stargazers)
[![License](https://img.shields.io/github/license/touying-typ/touying)](https://github.com/touying-typ/touying/blob/main/LICENSE)

This repository hosts the documentation of [Touying](https://github.com/touying-typ/touying) —
a powerful slide-creation package for [Typst](https://typst.app/).

🌐 **Website:** https://touying-typ.github.io/

---

## Dependencies

- [Node.js](https://nodejs.org/) >= 20
- [Python](https://www.python.org/) >= 3.8 with [Pillow](https://pypi.org/project/Pillow/)
- [Typst](https://github.com/typst/typst) (optional, for generating slide preview images; CI uses `typst-community/setup-typst`)

## Local Development

Clone the repository and install dependencies:

```sh
git clone https://github.com/touying-typ/touying-typ.github.io
cd touying-typ.github.io
# init touying submodule
git submodule update --init --recursive
npm ci
pip install Pillow
```

Copy docs from the touying submodule and generate API reference documentation:

```sh
npm run copy-docs
npm run generate-docs
```

Generate the slide preview images (requires Typst on `$PATH`):

```sh
npm run generate-images
```

Start the local dev server:

```sh
npm run start
```

The site will be available at http://localhost:3000.
For the Chinese locale, run:

```sh
npm run start -- --locale zh
```

## Build

```sh
npm run build
```

The static output will be in the `build/` directory.

## Contributing

Contributions are welcome! Please open an issue or pull request on
[GitHub](https://github.com/touying-typ/touying-typ.github.io).

Pull requests automatically get a **preview deployment** — look for the
bot comment on your PR with a link to the live preview.

## Acknowledgements

The reference documentation style, Typst syntax-highlighting theme, and overall
design of this site are inspired by and adapted from the
[lilaq](https://lilaq.org/) project documentation
([lilaq-project/lilaq-project.github.io](https://github.com/lilaq-project/lilaq-project.github.io)).
Many thanks to the lilaq contributors for their excellent work.
