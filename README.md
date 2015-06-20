# REST API for Biodiversity/Conservation Search Data

REST API interface for Conservation Hack Search Chrome Browser Plugin
see: https://github.com/ConsHack/article-search-chrome-plugin

## Why?

See: http://conservationhackathon.org

## What?

This API is built using **Hapi.js** (Node.js)
and **ElasticSearch** (_with [**esta**](https://github.com/dwyl/esta)_).  
If you are *new* to either of these we have ***beginner tutorials*** to get you started:

+ *What* is an API? https://github.com/docdis/learn-api-design
+ Hapi.js: https://github.com/nelsonic/learn-hapi
+ ElasticSearch: https://github.com/docdis/learn-elasticsearch
   + esta: https://github.com/dwyl/esta (*ultra-simple ElasticSearch node.js driver*)

If you have any ***ideas***, suggestions, feature requests or spot an issue/bug that needs to be fixed,
***please submit an issue***:
https://github.com/ConsHack/conshack-api/issues



## How?

### Implementation Overview

#### Data Types

1. People - the people who are using the application
2. Sessions - all session information for the person using the plugin (when they logged in, what browser, if they logged out etc.)
3. Articles - Journal Articles and their meta data
4. Searches - list of searches that were performed and where they were run


### Future Features > We need your Help!! [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/ConsHack/article-search-chrome-plugin/issues)

+ [ ] API access to Predicts to get list of articles which have already been reviewed (*with data entered*);

+ [ ] Auto-complete Search Article Titles  

+ [ ] Dashboard of all articles which have been reviewed & recent searches

+ [ ] Realtime interaction between all people using the plugin
to enable (*google-docs style*) collaboration and eliminate duplicated effort! requires a bit of: https://github.com/nelsonic/learn-rethinkdb



### Run Server Locally

#### ElasticSearch

The API server ~~uses~~ *requires* ElasticSearch
You will need to have a running instance of ElasticSearch on your localhost to run the API *locally*.

There a couple of ways to get ElasticSearch running on your machine,
please see: https://github.com/docdis/learn-elasticsearch

we have included a **Vagrantfile** to simplify booting ElasticSearch on *any* Operating System.

> Read more about how Vagrant will change your life (*as a developer...*): https://github.com/docdis/learn-vagrant

***Alternatively*** you can simply add an environment variable and connect to our ElasticSearch instance on Heroku:

```sh
export SEARCHBOX_SSL_URL=AskUsForTheElasticSearchURI--WeCantPublish
```

ElasticSearch Index (*export these environment variables*)
```sh
export ES_INDEX=conshack
```

#### Node.js Server

Once you have ElasticSearch up and running, boot the hapi.js (node.js) API Server with the following terminal command:

```sh
npm install && npm run dev
```


### heroku

The API is hosted on Heroku: https://conshack-api.herokuapp.com/

If you want to build on the API you will need to:

```sh
git remote add heroku git@heroku.com:conshack-api.git
```

***Ask us*** for heroku access to the app so you can push changes!
