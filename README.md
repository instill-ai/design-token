# Instill design token

This repo stores all the design tokens we use in our design.

## How to use

### Figma

In your Figma, press the run button and select "Send Design Tokens to Url"

#### "URL Export settings" section

- Select "Comporess JSON output" 

#### "Server settings" section

- "Event type" = update-tokens
- "Server url" = https://api.github.com/repos/instill-ai/design-token/dispatches
- "Access header" = application/vnd.github.everest-preview+json
- "Content-Type header" = text/plain;charset=UTF-8
- "Auth type" = Select "(Github) token"
- "Access token" = Input Instill ai GitHub bot access token

#### "About This Export" section

- "Commit Message" - blank

#### Finish

- Click "Save & Export" button

### Github repo - instill-ai/design-token

Once you successfully export the token, there should have a new automated-pr in this repo's pull request. Inform the repo owner and merge this PR.

## How it works

- We use [lukasoppermann/design-tokens](https://github.com/lukasoppermann/design-tokens) to transform the Figma preset style into design-token (It can also transform customized tokens).
- lukasoppermann/design-tokens will dispatch the newly generated token into instill-ai/design-token repo. There has a [dispatch-new-token]() action which will operate once the dispatch event is fired. This action will store and transform the tokened in local and file a PR.
- Once you merge this auto-generated PR into the main branch, release-please action will be activated and arrange a new release.
- After you merge the release PR into the main branch, it will trigger release action which will build the package and publish it to the npm registry.