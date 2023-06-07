# My Shop

This repository contains a simple e-commerce web application built using Angular, TypeScript, and Tailwind CSS. The application utilizes the Angular Material library for UI components.

## Project Structure

The project is structured into the following modules:

1. Login Module: Handles the authentication process, including login functionality.
2. Homepage Module: Displays the main homepage of the e-commerce app.
3. Product Details Module: Shows detailed information about a specific product.
4. Cart Module: Manages the user's shopping cart.

## Technologies Used

-   [Angular](https://angular.io/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Angular Material](https://material.angular.io/)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```
    git clone <repository-url>
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Build the project:

    ```
    ng build
    ```

4. Run the project:
    ```
    ng serve
    ```

## APIs

The application uses a dummy API for development purposes. The available API endpoints include:

-   `GET /api/products`: Retrieves all products.
-   `GET /api/products/{id}`: Retrieves a single product by its ID.
-   `GET /api/products/category/{category}`: Retrieves products by category.
-   `GET /api/products/search?query={searchQuery}`: Searches for products based on a query string.
-   `POST /api/login`: Performs user login.

The API documentation can be found at [https://dummyjson.com/docs](https://dummyjson.com/docs).

## Login Module

The Login module handles the authentication process and provides login functionality.

## Homepage Module

The homepage module displays the main home page of the eCommerce application. It uses the `getAllProduct` API to fetch and display featured products. The `searchProduct` API is also used to perform the search function. The `getProductByCategory` API is also used to allow users to perform categorization.

## Product Detail Module

The product details module is responsible for displaying detailed information about a specific product. It uses the `getSingleProduct` API to retrieve product data. It also contains "add to cart" button to allow users to add products. The added products will be stored in localStorage for future use.

## Cart Module

The shopping cart module manages the user's shopping cart. It allows the user to update the quantity, and proceed to checkout. cartItem will be fetched from localStorage and the total price will be calculated.

## shared.service

The Shared service contains common functions and utility methods used throughout the project.

## product.service

Contained all the API called related to the products.

## auth.service

It includes an AuthService file that covers the `login` API and fetchWithAuth function with act as a interceptor which embed the token to the header whenever an API call is made.

## Library Used

The project utilizes [Angular Material](https://material.angular.io/), a UI component library for Angular applications. Angular Material provides pre-built and customizable components that enhance the user interface and user experience.

## Contact Information

-   Name: Ong Zi Leong
-   Email: [zileongggg@gmail.com]()
-   GitHub: [https://github.com/zileongggg]()
