<a href="https://covidheroes.net/">
  <img src="public/img/logo.svg" width="100px" align="right" />
</a>

# COVID Heroes

[![Build Status](https://travis-ci.org/camasscioly/covidheroes.net.svg?branch=master)](https://travis-ci.org/camasscioly/covidheroes.net.)
[![Dependencies](https://img.shields.io/david/camasscioly/covidheroes.net.svg?style=flat)](https://img.shields.io/david/camasscioly/covidheroes.net.svg?style=flat)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/camasscioly/covidheroes.net)

###### [Website](https://covidheroes.net) | [Code of Conduct](https://github.com/camasscioly/covidheroes.net/blob/master/.github/CODE_OF_CONDUCT.md) | [Contributing](https://github.com/camasscioly/covidheroes.net/blob/master/.github/CONTRIBUTING.md) | [License](https://github.com/camasscioly/covidheroes.net/blob/master/LICENSE)

> COVID Heroes is a NodeJS webapp which provides centralized communication between medical institutions and PPE volunteers.

###### What can I do?

Most things you can do in email can be done in COVID Heroes

- Creating card-based offers/requests for resources
- User account management and tracking
- Reputation system for active contributors
- Location mapping and distance calculation
- Simple NodeJS backend with MongoDB adapters
- Email and SMS integration

Give it a spin: https://covidheroes.net/

## Getting Started

### Installation

```bash
git clone https://github.com/camasscioly/covidheroes.net.git
cd covidheroes.net
```

Note: You will need at least NodeJS 10.18.1+, VSCode 1.44+, and MongoDB 3+. You will also need to configure .env variables before launching.

### Configuring Environment Variables

```bash
# Environment Config
# Store your secrets and config variables in here
# reference these in code with process.env.ENV_VARIABLE

PORT=3000
DB_URL=mongodb://mongodb.example.com:27017
MAILGUN_API_KEY=example-mailgun-token

# Note: MongoDB URI must be in the mongodb:// protocol, the mongodb+srv:// is not supported
```

Rename `.env.example` to `.env` to be able to interact with `process.env` in NodeJS.

### Usage

COVID Heroes follows the latest maintenance LTS version of Node.

```bash
yarn
yarn dev
# production: yarn start
```

## FAQ

#### Q: Who maintains COVID Heroes?

The Camas Science Olympiad team maintains the webapp, but we'd love your help and expertise on the project!
See [Contributing](https://github.com/camasscioly/covidheroes.net/blob/master/CONTRIBUTING.md).

#### Q: What are COVID Heroes’ goals and principles?

The goals of the project are:

- Provide a slim, canonical webapp that centralizes communication between medical institutions and PPE volunteers.
- Provide a reference implementation for similar webapps for crisis in the future.
- Grow the adoption of web platforms for managing requests/offers.
- Help dogfood the PPE and maker volunteer movement.
- Learn more about the pain points of creating a CRUD webapp and learn from the experience.

We adapt [Chromium principles](https://www.chromium.org/developers/core-principles) to help us drive product decisions:

- **Speed**: COVID Heroes core has almost zero performance overhead and is compressed with deflate and gzip.
- **Security**: COVID Heroes is secured with 128-bit SSL and passwords are hashed with bcrypt with 10 rounds of salt.
- **Stability**: COVID Heroes should not be flaky and should not leak memory.
- **Simplicity**: COVID Heroes provides a high-level interface that’s easy to use, understand, and debug.

#### Q: What's the difference between `yarn start` and `yarn dev`?

Our project has two environments: Production and Development. The production environment is used when it is actually hosted, an example is https://covidheroes.net. The development environment shows more "developer" metrics, helping you to debug, but is not suitible for production.

```bash
yarn start # production

yarn dev # development
```

#### Q: I'm recieving `Error: Cannot find module 'example'` whenever I start the project

You need to install the packages with the command below.

```bash
yarn
```

#### Q: I'm recieving `ERR_SOCKET_BAD_PORT` whenever I start the project

You need to configure your environment variables. First, rename `.env.example` to `.env`.

```bash
PORT=3000
```

#### Q: Database queries arent working.

You need to configure your environment variables. First, rename `.env.example` to `.env`.

```bash
DB_URL=mongodb://mongodb.example.com:27017
```

## Useful Links

- [The website](https://covidheroes.net) hosts the production version of the website.
- [Our Github Repository](https://github.com/camasscioly/covidheroes.net) contains the most updated code.
- [Our GoFundMe Page](https://www.gofundme.com/f/face-shields-and-glasses-for-front-lines?utm_source=customer&utm_medium=email&utm_campaign=p_cf+share-flow-1) is where you can donate and support us.
- [Our Instagram Page](https://instagram.com/covid_heroes_official) contains the latest announcements.
- [Our Producthunt Page](https://www.producthunt.com/posts/covid-heroes?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-covid-heroes) shows the latest feedback from indie makers.

## Made by Camas Science Olympiad

Camas High School SciOly is like an academic track meet, consisting of 23 events for both middle and high school divisions. While exploring disciplines such as chemistry, biology, earth science, physics, and engineering, students are able to develop valuable teamwork and study skills in a fun and challenging environment.

Find out more [about Camas Scioly](https://camasscioly.weebly.com).

( ᵔ ᴥ ᵔ )
