# Sabzi Calculator

A clean, responsive web app to help users calculate vegetable and meat costs. It can calculate the quantity you can afford for a given budget or the total cost for a desired quantity.

![image alt](https://github.com/Snow-2122/Sabzi-Calculator/blob/cf58570d421c7c1ff234ee794f8ab2fbdfefdf06/images/Sabzi%20Calculator-1.jpg)

## ✨ Features

- **Dual Calculation Modes**:
    - **Quantity by Budget**: Determine the amount of an item you can purchase with a specific budget.
    - **Cost by Quantity**: Calculate the total cost for a desired quantity of an item.
- **Flexible Units**: Supports both weight (grams, kilograms) and volume (milliliters, liters).
- **Intuitive UI**: A modern, easy-to-use interface designed for quick calculations.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## 📸 Screenshots

Here's a glimpse of the Sabzi Calculator in action:

| Quantity by Budget | Cost by Quantity |
| :---: | :---: |
| ![image alt](./images/Sabzi Calculator-2.jpg) | ![image alt](./images/Sabzi Calculator-3.jpg) |


## 🚀 How to Run the Application

This is a frontend-only application built with React and TypeScript, served directly from an `index.html` file. You do not need a complex build process to run it.

1.  **Prerequisites**: You need a simple local web server. If you have Python or Node.js installed, you're all set.

2.  **Serve the files**:
    - Open your terminal in the root directory of this project (where `index.html` is located).
    - Choose one of the following commands to start a local server:

    **Using Node.js (with `serve`)**
    If you don't have `serve` installed, run `npm install -g serve` first.
    ```bash
    serve .
    ```

    **Using Python 3**
    ```bash
    python -m http.server
    ```

3.  **Access the App**:
    - Open your web browser and navigate to the local address provided by the server (usually `http://localhost:3000`, `http://localhost:5000`, or `http://localhost:8000`).

## 🤖 AI Integration Status

**This application, in its current version, does not use any AI features or the Google Gemini API.**

The calculation logic is performed entirely on the client-side using standard mathematical operations. Therefore, **no API key is required** to run or use the app. It is a standalone utility tool.

### Future AI Possibilities

While the current build is not AI-powered, future versions could incorporate Gemini to enhance functionality, such as:
- Fetching real-time market prices for items.
- Providing recipe suggestions based on your shopping list.
- Allowing users to input their requests using natural language.

## 💻 Technology Stack

- **React**: For building the user interface.
- **TypeScript**: For type-safe JavaScript.
- **Tailwind CSS**: For styling (included via CDN).
- **esbuild**: The development environment uses esbuild to bundle the code on the fly.

---

Made with 💚 for fresh calculations.