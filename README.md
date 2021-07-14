# mongoDBCRUD

This project performs Create, Read, Update, Delete (CRUD) operations on a Mongo DB. I created a free tier with MongoDB Atlas to host my db for free that I will use to test this app.

I created an env variable to store the connection string to my database hosted on MongoDB Atlas.

My env files looks as follows DB_CONNECTION=mongodb+srv://Your username:Your Password@cluster0.x7bc1.mongodb.net/rest?retryWrites=true&w=majority. After you create your free tier
and obtain your username and password you will replace that in strings Your username Your Password appropriately. Please note that there is a full colon between username and password and it should not be removed.

You can test this with Postman.
