---
'@changesets/cli':
    description: 'Automated versioning and changelog management.'
    homepage: 'https://github.com/changesets/changesets'
---

# Changelog Management

This repo uses [Changesets](https://github.com/changesets/changesets) for automated changelog and version management.

## How it works

- Run `pnpm changeset` after making a change. This creates a markdown file in `.changeset/` describing your change.
- When ready to release, run `pnpm changeset version` to update changelogs and bump versions.
- Publish with `pnpm changeset publish`.

See `.changeset/README.md` for more details.
