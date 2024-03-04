# Commit convention

## Context

Every commit to the repository should follow the predefined commit convention in order to have easier understanding of the changes. We have decided to base it on the <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank">conventional commits</a>.

Basic structure:

> \<type\>(\<optional scope\>): \<description\>
>
> that becomes:

> feat(slider): Add slider component

For more detailed examples refer to the <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank">conventional commits rules</a>.

## Type options

- **build**: Changes that affect the build system, external dependencies or the local environment
- **cd**: Changes to the CD configuration files and scripts
- **chore**: Updates of the dependencies without the code changes
- **ci**: Changes to the CI configuration files and scripts
- **docs**: Changes related to the documentation only
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: Changes that improve the performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **revert**: Revert previous commit
- **style**: Changes that do not affect the meaning of the code (white-space, fromatting, missing semi-colons etc.)
- **test**: Changes related to tests only
