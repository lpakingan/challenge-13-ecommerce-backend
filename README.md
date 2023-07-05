# Bootcamp Challenge #13: E-commerce Back End using Object-Relational Mapping (ORM)

## Summary of the Challenge

In this week's challenge, we were tasked with building the back end for an e-commerce site. In order to make the working back end, Express.js was used to create a working API and Sequelize was used to configure it to interact with a MySQL database.

## Acceptance Criteria
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

## Installation
For this application, installation of Node.js and MySQL are required for setting up the API and database. Express, MySQL2, Sequelize, and dotenv packages are also required and can be installed from the command line using ```npm install``` when in the directory of the application's code. The specific dependencies and the versions used by each package can be viewed in the package.json folder. Insomnia may also be installed in order to test the GET/POST/DELETE route functionalities of the application.

## Usage
To use the application, ensure that all packages/dependencies are installed by running ```npm install``` once in the directory of the application. Navigate to the db folder and login locally to MySQL to run schema.sql by typing in ```source schema.sql```. To populate the database with example data, run ```npm seeds/index.js```. After the database has been created and populated, make a copy of the ```.env.EXAMPLE``` file and name it ```.env```. Enter your own MySQL login credentials (DB_USER and DB_PW) into this new file to ensure that the database can be configured to the API and the application can run. Once the login information has been added, ensure that you are in the root of the directory and type ```npm start``` to run the application.

Once connected to the application, you will see successful confirmation that all the table data has been populated if the database has been connected. Open Insomnia to use the routes for creating, updating, deleting, or getting data within the 3 different tables of the database.

## Resources Used
- W3Schools
- MDN Web Docs
- Stack Overflow
- Github Issues
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Node.js Documentation](https://nodejs.org/en/docs)
- [Sequelize Documentation](https://sequelize.org/)
- [dotenv Documentation](https://www.npmjs.com/package/dotenv)

## Deployed Application
A video demoing how to use the application when opened in the command-line terminal and in Insomnia can be watched at [this link](https://youtu.be/yErHXKIOgEI).
