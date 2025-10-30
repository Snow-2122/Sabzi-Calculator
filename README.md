# Sabzi Calculator

A clean, responsive web app to help users calculate vegetable and meat costs. It can calculate the quantity you can afford for a given budget or the total cost for a desired quantity.

**[🚀 View Live Demo](https://snow-2122.github.io/Sabzi-Calculator/)**

![Sabzi Calculator App Screenshot](https://github.com/user-attachments/assets/543cc39d-5e7a-43c9-80b3-2c1da554d3f9)

## ✨ Features

- **Dual Calculation Modes**:
    - **Quantity by Budget**: Determine the amount of an item you can purchase with a specific budget.
    - **Cost by Quantity**: Calculate the total cost for a desired quantity of an item.
- **Quick Select**: Instantly set the reference unit for common items (e.g., 1 kg of potatoes), so you only need to enter the current price.
- **Flexible Units**: Supports both weight (grams, kilograms) and volume (milliliters, liters).
- **Intuitive UI**: A modern, easy-to-use interface designed for quick calculations.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## 📸 Screenshots

Here's a glimpse of the Sabzi Calculator in action, featuring the helpful Quick Select unit presets:

| Quantity by Budget | Cost by Quantity |
| :---: | :---: |
| ![Screenshot of the app calculating quantity by a set budget](https://github.com/user-attachments/assets/477a67c4-b99a-4044-a37a-c107f3d81f32) | ![Screenshot of the app calculating total cost by a set quantity](https://github.com/user-attachments/assets/b5376a17-4cbc-4559-9778-ecbd7118b756) |

## 💻 How to Run Locally

This project is built with React and TypeScript and uses **Vite** as its development server. 

Follow these steps to set up a proper development environment and run the app.

### Prerequisites

1.  **[Node.js](https://nodejs.org/en/download/)**: You **must** have Node.js installed (version 18 or newer is recommended).
2.  **A Code Editor**: [Visual Studio Code](https://code.visualstudio.com/download) is highly recommended.
3.  **A Terminal**: You can use the integrated terminal in VS Code (`Ctrl+\``) or your system's default terminal.

### Step-by-Step Guide

1.  **Open the Project Folder**:
    - Unzip the project files into a folder on your computer.
    - Open this folder in Visual Studio Code (`File > Open Folder...`).

2.  **Install Dependencies**:
    - Open the integrated terminal in VS Code.
    - In the terminal, run the following command. This will download all the necessary libraries into a `node_modules` folder.
      ```bash
      npm install
      ```
    - This step only needs to be done once.

3.  **Start the Development Server**:
    - After the installation is complete, run this command in the same terminal:
      ```bash
      npm run dev
      ```

4.  **View the Application**:
    - The terminal will display a local URL, typically `http://localhost:5173/`.
    - `Ctrl+click` the link, or copy and paste it into your web browser.
    - The application should now be running!

### To Stop the Server

- Go back to the terminal window where the server is running and press `Ctrl+C`.

## 💻 Technology Stack

- **React**: For building the user interface.
- **TypeScript**: For type-safe JavaScript.
- **Vite**: For the local development server and build tooling.
- **Tailwind CSS**: For styling (included via CDN).

---

Made with 💚 for fresh calculations.