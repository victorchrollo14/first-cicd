# First ci-cd Implementation.

- Learning ci-cd, so forked the repo from 100xdevs and added my own CI pipeline that runs a build job, whenever someone makes a PR.
- Next up, let's add a build pipeline that deploys the project and see if it works.

## workflow one - a build workflow.

What are we doing here.

- on pull_request to master branch.
- we checkout current repository using actions/checkout@v3 (which is an action written by someone else to take care of cloning your repo on an AzureVM, we could definitely writing from scratch, but not necessarily needed. why reinvent the wheel)
- we set up node.js using actions/setup-node@v3, where we can also specify the version using the `with` property
- now we are set to install the dependencies, generate prisma client and build the project.
- so when someone makes a PR, the above job would be run on a virtual machine and you would get the result of it in the github ui.

## workflow two - The deployment workflow.

What's happening here.

- on every commit made on the master branch, we deploy it to production.
- generally it doesn't happen that way, we would have a dev branch, people would commit and push to the dev branch and we would deploy the dev branch to `dev.app100xdevs.com` . Every two weeks we merge the dev branch to the main or master branch. This is called as release cycles.

# How to set up

- Clone the repo

```jsx
git clone https://github.com/100xdevs-cohort-2/week-17-final-code
```

- npm install
- Run postgres either locally or on the cloud (neon.tech)

```jsx
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- Copy over all .env.example files to .env
- Update .env files everywhere with the right db url
- Go to `packages/db`
  - npx prisma migrate dev
  - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)
