# Learning MSW

This repo is used to learn [MSW](https://mswjs.io/) for a GraphQL API with Vite and React.

## Getting started

```bash
# install dependencies
pnpm i

# run dev server
pnpm dev

# build for prod
pnpm build

# server prod
pnpm preview
```

## Setup

- use `graphql-request` to do 2 different GraphQL request
    - one should be ignored by msw and executed regularly
    - the other also gets executed regularly, but gets patched in order to overwrite a specific variable
- only include msw in `development`