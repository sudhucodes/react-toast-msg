# How to Use Changesets

This repo uses [Changesets](https://github.com/changesets/changesets) for automated changelog and version management.

## Common Commands

- **Add a changeset:**

    ```sh
    pnpm changeset
    ```

    Follow the prompts to describe your change and select affected packages and version bumps.

- **Version packages & update changelog:**

    ```sh
    pnpm changeset version
    ```

    This will update versions and changelogs for all packages with pending changesets.

- **Publish (after versioning):**
    ```sh
    pnpm changeset publish
    ```

## Workflow

1. Run `pnpm changeset` after making a change. Commit the generated markdown file.
2. When ready to release, run `pnpm changeset version` and commit the updated changelogs and package versions.
3. Publish with `pnpm changeset publish`.

See the [Changesets docs](https://github.com/changesets/changesets) for more details.
