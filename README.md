# E-commerce Back End Starter Code

## Description

Build the back end for an e-commerce site. Use mysql database to store data. Use express and sequelize as tools to help create the back end, and use dotenv to enhance security of sensitive data.

### User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

### Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

This application uses [Express](https://www.npmjs.com/package/express/v/4.16.4) as a node js web application framework, and [MySQL2](https://www.npmjs.com/package/mysql2) to connect to your MySQL database, and [Sequelize](https://sequelize.org/docs/v6/) as a promise-based Node.js ORM tool for MySQL, and [dotenv](https://www.npmjs.com/package/dotenv) to load environment variables from a .env file. 

The application will be invoked by using the following command:

```
node server.js
```

## Usage

To manage inventory organizing by categories, tags, and products. Update inventory by adding, modifying, or deleting categories, tags, and products.

### Screencastify Demo
https://drive.google.com/file/d/1JJuXVGqj3mkHWhAcCRrmoJBK78L8MXz9/view?usp=sharing


## Credits

Tutor: Doug Kumagai:
<br />
https://www.linkedin.com/in/doug-kumagai/
<br />
https://github.com/ndesmic
<br />

mdn web docs: https://developer.mozilla.org/en-US/

Express: https://www.npmjs.com/package/express/v/4.16.4

MySQL2: https://www.npmjs.com/package/mysql2

Sequelize: https://sequelize.org/docs/v6/

dotenv: https://www.npmjs.com/package/dotenv

Insomnia: https://insomnia.rest/

Markdown License badges: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

shields.io: https://shields.io/

Screencastify: Create, Share, and Assess: https://www.youtube.com/watch?v=CX-XvngtsZw&ab_channel=Screencastify

Video Submission Guide: https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide


## License

Please refer to the LICENSE in the repo.

---

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

