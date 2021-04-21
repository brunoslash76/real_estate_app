# Real Estate API
This restful api was created following Domain-Driven Design to easily scale and easily maintanence.

## Involved Technologies
All codebase is writen in Typescript over a MySQL database. Sequelize is the chosen ORM, but for demonstrative porposes all queries are writen.

## Runing Application Locally 
To run you application locally you must have MySQL server runing and have been created a database named realestate. 

A .env-example file is provided with examples to populate Sequelize's config. It is important to rename **.env-example** to **.env**.

Before run the project run `npm install` to install all node modules required to run the project.

After installing all node dependencies run `npm run debug` to enter debug mode, whch consists in building/compiling the code to Javascript and serve the application with nodemon.

## API endpoints
Available endpoints: 
    /house-details/:id
    /houses
    /most-visited
    /update-most-visited
    /houses-by-zipcode
    /houses-by-city
    /houses-by-neighborhood
