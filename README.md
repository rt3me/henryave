# ✨ henryave ✨

<img src="https://themes.stackbit.com/images/agency-demo-1024x768.png" width="600">

My personal portfolio site: a [Next.js](https://nextjs.org) [Jamstack](https://jamstack.org) site using [Contentful](https://www.contentful.com) as a [CMS](https://en.wikipedia.org/wiki/Content_management_system).

## Develop Locally

1. Install [Node.js and npm](https://nodejs.org/en/)

1. Install npm dependencies:

        npm install

1. Navigate to ["API keys" Settings page](https://app.contentful.com/spaces/kpvbnea5rrok/api/cma_tokens) of your Contentful space and generate new "Personal Access Token"

1. Assign the generated Personal Access Token to the `CONTENTFUL_ACCESS_TOKEN` environment variable (replace `{personal_access_token}` with the access token):

        export CONTENTFUL_ACCESS_TOKEN={personal_access_token}

1. Start the Next.js local development server:

        npm run develop

1. Open [http://localhost:3000/](http://localhost:3000/) in the browser

1. 🎉
