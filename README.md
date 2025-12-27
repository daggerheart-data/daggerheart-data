# Daggerheart Data

This repository provides JSON game data and schema definitions for the [Daggerheart System Reference Document (SRD)](https://www.daggerheart.com/srd/). Use these files to build custom websites, bots, tools, and more for our favorite TTRPG!

## Darrington Press Community Gaming License

This product includes materials from the Daggerheart System Reference Document 1.0, © Critical Role, LLC. under the terms of the Darrington Press Community Gaming (DPCGL) License. More information can be found at https://www.daggerheart.com. There are no previous modifications by others.

## Structure

The [releases](https://github.com/daggerheart-data/daggerheart-data/tree/main/releases) directory contains JSON files for each Daggerheart release, such as **Core** and **The Void**. This includes JSON files for ancestries, communities, subclasses, domain cards, weapons, items, etc.

The [schemas](https://github.com/daggerheart-data/daggerheart-data/tree/main/schemas) directory contains JSON schemas that validate each release's JSON files.

## Contributing

[Create a fork](https://github.com/daggerheart-data/daggerheart-data/fork) of this repository, then clone your fork and install dependencies:

```bash
git clone git@github.com:YOUR-USERNAME/daggerheart-data.git
cd daggerheart-data
npm install
```

After making any changes, format and validate by running:

```bash
npm run format
npm run validate
```

When you're done, push your changes and open a pull request!

## Support

For questions or issues, please [open an issue](https://github.com/daggerheart-data/daggerheart-data/issues) on GitHub.
