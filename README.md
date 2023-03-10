# SIMPLE CRUD API USING NESTJS
This is a simple CRUD API powered by Nodejs, Nestjs and TS

## Requirements
- NodeJS runtime
- NPM or Yarn package manager
- Postgres Database

## Features
- Completely written in [Typescript](https://typescriptlang.org/)
- [Nestjs](https://github.com/nestjs/nest) Nodejs framework
- [PostgreSQL](https://www.postgresql.org/docs/) Open Source Relational Database
- [TypeORM](https://typeorm.io/) SQL ORM for Nodejs

## How to install
- Clone the repository
- `git clone https://github.com/OjerIsaac/crud_nestjs.git`
- `cd crud_nestjs`
- Install dependencies
- `npm install`
- Setup environment variable
- `cp .env.sample .env`
- Fill in data for db (MySQL or Postgres)
- Run the server in dev env
- `npm run start:dev`

## Documentation link
- The endpoints for test of the service;
- Create new data `http://localhost:3000/crud/create`
- Fetch all data `http://localhost:3000/crud/`
- Update data `http://localhost:3000/crud/2/update`
- Delete data `http://localhost:3000/crud/2/delete`
- Fetch single data `http://localhost:3000/crud/2`

## Fields to fill for endpoint
- `firstName`
- `lastName`
- `email`
- `phone`
- `city`
- `country`
