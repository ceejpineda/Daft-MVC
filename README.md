# Daft MVC Framework

Daft is a lightweight MVC (Model-View-Controller) framework for small projects built using Node.js and Express. It provides a structured way to organize your code, separate concerns, and build scalable applications.

## Features

- **MVC Architecture**: Daft follows the Model-View-Controller design pattern, allowing you to separate your application logic into three distinct components.
- **Routing**: Easily define routes and handle HTTP requests using Express, providing a clean and intuitive way to handle different endpoints.
- **Controllers**: Create controllers to handle the business logic of your application. Controllers interact with models and views to process requests and send responses.
- **Models**: Define models to represent your data and interact with the database. Daft supports various database systems, including MySQL, MongoDB, and PostgreSQL.
- **Views**: Use templating engines like EJS or Handlebars to render dynamic views and generate HTML responses.
- **Middleware**: Daft leverages Express middleware to handle common tasks such as authentication, logging, error handling, and more.
- **Configuration**: Configure your application settings, database connections, and other environment-specific variables in a dedicated configuration file.
- **Easy to Use**: Daft aims to be beginner-friendly, with a simple and intuitive API that allows you to get started quickly and efficiently.


## Getting Started

Follow these steps to get started with Daft:

1. **Installation**: Clone the Daft repository or use npm to install it as a dependency.

   ```shell
   $ git clone https://github.com/ceejpineda/Daft-MVC.git
   $ cd Daft-MVC
   $ npm install

2. **Configuration**: Customize the configuration file `config.js` to suit your needs. Configure your database connection, environment settings, and any other required variables.

3. **Define Routes**: Create your application routes in the `routes` directory. You can use the provided example routes as a reference.

4. **Controllers**: Implement your controllers in the `controllers` directory. Add your application logic and handle requests from the routes.

5. **Models**: Define your models in the `models` directory. Interact with the database, perform data validation, and handle data manipulation tasks.

6. **Views**: Create your views using your templating engine EJS in the `views` directory. Render dynamic content and generate HTML responses.

7. **Start the Server**: Run the following command to start the server.
```shell
$ npm start