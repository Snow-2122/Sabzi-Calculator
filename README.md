# Grocery Calculator

A clean, responsive web app to help users calculate grocery costs for items like vegetables, meat, and more. It can calculate the quantity you can afford for a given budget or the total cost for a desired quantity.

![Grocery Calculator App Screenshot](https://github.com/user-attachments/assets/543cc39d-5e7a-43c9-80b3-2c1da554d3f9)

## ✨ Features

- **Dual Calculation Modes**:
    - **Quantity by Budget**: Determine the amount of an item you can purchase with a specific budget.
    - **Cost by Quantity**: Calculate the total cost for a desired quantity of an item.
- **Quick Select**: Instantly set the reference unit for common items (e.g., 1 kg of potatoes), so you only need to enter the current price.
- **Flexible Units**: Supports both weight (grams, kilograms) and volume (milliliters, liters).
- **Intuitive UI**: A modern, easy-to-use interface designed for quick calculations.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## 📸 Screenshots

Here's a glimpse of the Grocery Calculator in action, featuring the helpful Quick Select unit presets:

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

## 🚀 Deployment to GitHub Pages

To deploy this application and create a live demo, follow these steps:

1.  **Create a GitHub Repository**:
    - Create a new public repository on GitHub named `Grocery-Calculator`.

2.  **Push Your Code**:
    - Follow the standard Git workflow to push your local project code to the `main` branch of the repository you just created.

3.  **Install Dependencies**:
    - If you haven't already, install the necessary packages by running:
      ```bash
      npm install
      ```

4.  **Run the Deploy Script**:
    - The project is pre-configured with a script to handle the build and deployment process. Run the following command in your terminal:
      ```bash
      npm run deploy
      ```
    - This command will:
        - Build the application for production into a `dist` folder.
        - Use the `gh-pages` package to push the contents of the `dist` folder to a new branch called `gh-pages` in your repository.

5.  **Configure GitHub Pages Settings**:
    - In your GitHub repository, go to `Settings > Pages`.
    - Under "Build and deployment", set the **Source** to "Deploy from a branch".
    - Set the **Branch** to `gh-pages` with the folder `/(root)`.
    - Save your changes.

6.  **View Your Live Site**:
    - After a few minutes, GitHub will publish your site. The URL will be available at the top of the Pages settings screen, following the format: `https://<YOUR_USERNAME>.github.io/Grocery-Calculator/`.

## 💻 Technology Stack

- **React**: For building the user interface.
- **TypeScript**: For type-safe JavaScript.
- **Vite**: For the local development server and build tooling.
- **Tailwind CSS**: For styling (included via CDN).

---

Made with 💚 for fresh calculations.