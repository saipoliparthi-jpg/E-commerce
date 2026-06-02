# ShopEasy - E-Commerce Application

## Project Overview

ShopEasy is a responsive E-Commerce web application built using React.js. Users can browse products, search products, filter by category, sort products, add items to cart, manage quantities, and view order summaries.

## Features

* Product listing using Fake Store API
* Search products by title
* Category filtering
* Product sorting
* Add to Cart functionality
* Mini Cart component
* Cart page with quantity controls
* Order summary section
* Local Storage persistence
* Featured Categories navigation
* Responsive UI
* Loading and Error handling

## Technologies Used

* React.js
* JavaScript
* React Router DOM
* Context API
* CSS
* Fake Store API
* Vercel

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/saipoliparthi-jpg/e-commerce.git
```

### Navigate to Project

```bash
cd e-commerce
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

## Approach

The application follows a component-based architecture. Product data is fetched from the Fake Store API and stored in state. Search, filtering, and sorting are implemented using JavaScript array methods. Cart functionality is managed globally using React Context API. Cart data is persisted using localStorage to maintain data after page refresh.

## Assumptions

* Fake Store API is used as the product data source.
* Shipping charge is fixed at $5 when cart contains items.
* Checkout functionality is UI only.
* Authentication and payment gateway integration are not included.
* Featured categories are based on the categories available from Fake Store API.

## Live Demo

https://e-commerce-nine-iota-59.vercel.app/

## GitHub Repository

https://github.com/saipoliparthi-jpg/e-commerce
