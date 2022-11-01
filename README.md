# Simple CRUD with NodeJS-ExpressJS & MySQL-Sequelize

## Setup and run project

### 1. Clone project: `git clone https://github.com/CuongPaul/sequelize.git`

### 2. Go to root project: `cd sequelize`

### 3. Build image: `docker build -t nodejs-mysql-docker .`

### 4. Run project: `docker run --rm -v $(pwd):/app -w /app node:13-alpine npm install && docker-compose up`

## Access app container: `docker exec -it app_1 sh`

## Access database container: `docker exec -it db_1 mysql -uroot -p`

## Creating Database: `npx sequelize-cli db:create`

## Migrations: `npx sequelize-cli db:migrate`

## Seeders: `npx sequelize-cli db:seed:all`

## Stop project: `docker-compose down`
