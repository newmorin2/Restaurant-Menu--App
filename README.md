# Sir Newton's Restaurant Menu 

## Overview

Sir Newton's Restaurant Menu is a beginner-friendly React application that displays a restaurant's menu. It allows visitors to view different meals, explore vegetarian and non-vegetarian options, and find affordable meals.

The application also calculates the average meal price and displays the number of vegetarian and non-vegetarian meals available.

The project uses React, JavaScript, props and Bootstrap to create a responsive and visually appealing restaurant menu.

## Features

- **All Meals:** Displays all available meals with their names, prices, categories, and dietary information.
- **Vegetarian Meals:** Filters and displays meals suitable for vegetarians.
- **Non-Vegetarian Meals:** Displays meals that contain meat.
- **Affordable Meals:** Displays meals priced at Ksh 800 or less.
- **Average Meal Price:** Calculates the average price of all meals 
- **Meal Counts:** Displays the total number of vegetarian and non-vegetarian meals.
- **Food Images:** Displays images of individual meals.
- **Background Image:** Uses a restaurant-themed background image to improve the visual appearance of the application.
- **Responsive Layout:** Uses Bootstrap grid classes to display meal cards across different screen sizes.

## Technologies Used

- React
- JavaScript
- HTML
- Bootstrap

## JavaScript Concepts Practiced

This project demonstrates several fundamental JavaScript concepts.

### 1. Arrays and Objects

The menu is stored in an array of objects. Each object represents a meal and contains its name, price, category, and vegetarian status.

### 2. The map() Method

The `map()` method is used to loop through the meals array and display each meal as a card in React.

### 3. The filter() Method

The `filter()` method creates lists of meals based on specific conditions, such as whether a meal is vegetarian or whether its price is within the affordable range.

### 4. The reduce() Method

The `reduce()` method calculates the total price of all meals.

The average meal price is then calculated by dividing the total price by the number of meals.

### 5. The length Property

The `length` property counts the number of meals in a list.

For example, it can determine how many vegetarian meals are available.

### 6. Ternary Operator

The ternary operator displays whether a meal is vegetarian or non-vegetarian based on its `vegetarian` property.

## Styling and Images

Bootstrap is used to create responsive layouts and styled meal cards.

Custom CSS is used to add a restaurant background image and control its appearance.

Images are stored in the `src/assets/` directory and referenced using their paths.

For example:

    /assets/restaurant-bg.jpg


## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### 1. Clone the Repository

If the project is hosted on GitHub, run:

    git clone <your-repository-url>


### 2. Navigate to the Project Folder

    cd restaurant-menu-react

### 3. Install Dependencies

    npm install

### 4. Start the Development Server

    npm run dev


## Learning Objectives

The main objective of this project is to practice React fundamentals and JavaScript array methods while building a simple, practical application.

The project provides experience with:

- Rendering lists in React.
- Working with arrays of objects.
- Filtering data using conditions.
- Performing calculations with `reduce()`.
- Displaying calculated values in JSX.
- Styling components with Bootstrap and CSS.
- Adding images to a React application.
- Organizing a React project into reusable components.

## Future Improvements

Possible improvements include:

- Add search functionality for meals.
- Add category-based filtering.
- Add meal details and descriptions.
- Display customer reviews.

## Author

-  Newton Mwangi