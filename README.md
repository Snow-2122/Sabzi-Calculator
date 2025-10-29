# Sabzi Calculator

A clean, responsive web app to help users calculate vegetable and meat costs. It can calculate the quantity you can afford for a given budget or the total cost for a desired quantity.

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


## 🚀 Live Deployment with GitHub Pages

Follow these steps to deploy your application to a free, public URL using GitHub Pages.

### Prerequisites

*   You must have a GitHub account.
*   Your project code must be pushed to a GitHub repository.

### Deployment Steps

1.  **Install `gh-pages` package**:
    This is a one-time step. The `gh-pages` package helps you publish the contents of your `dist` folder (the build output) to GitHub. Run this command in your terminal:
    ```bash
    npm install gh-pages --save-dev
    ```
    *(This has already been added to your `package.json`, so an `npm install` will handle it, but it's good to know).*

2.  **Push Your Code to GitHub**:
    Make sure your latest code, including the `vite.config.ts` and `package.json` files from this update, is pushed to your GitHub repository.
    ```bash
    git add .
    git commit -m "Configure for GitHub Pages deployment"
    git push
    ```

3.  **Run the Deploy Command**:
    Now for the magic. Run the following command in your terminal:
    ```bash
    npm run deploy
    ```
    This command will first run `npm run build` to create a production-ready version of your app, and then it will push the contents of the newly created `dist` folder to a special branch in your repository called `gh-pages`.

4.  **Configure GitHub Pages in Your Repository**:
    - Go to your repository on the GitHub website.
    - Click on the **Settings** tab.
    - In the left sidebar, click on **Pages**.
    - Under "Build and deployment", for the **Source**, select **Deploy from a branch**.
    - For the **Branch**, select `gh-pages` from the dropdown menu and make sure the folder is set to `/ (root)`. Click **Save**.

    

5.  **Access Your Live Site!**
    - GitHub will now build and deploy your site. It may take a minute or two.
    - Once it's ready, a green box will appear on the same settings page with your public URL. It will look something like this:
      **`https://<your-github-username>.github.io/<your-repository-name>/`**

    Now you have a permanent link that you can share with anyone!

---

## 💻 How to Run Locally

This project is built with React and TypeScript and uses **Vite** as its development server. The previous methods using static servers (like VS Code's Live Server or Python's server) will not work because they cannot process the TypeScript (`.tsx`) files that browsers don't understand.

Follow these steps to set up a proper development environment and run the app on any system (Windows, macOS, Linux).

### Prerequisites

1.  **[Node.js](https://nodejs.org/en/download/)**: You **must** have Node.js installed. Version 18 or newer is recommended. This installation also includes `npm` (Node Package Manager), which is required to manage project dependencies.
2.  **A Code Editor**: [Visual Studio Code](https://code.visualstudio.com/download) is highly recommended.
3.  **A Terminal**: You can use the integrated terminal in VS Code (`Ctrl+\`` or `View > Terminal`) or your system's default terminal (Command Prompt, PowerShell, or Git Bash on Windows).

### Step-by-Step Guide

1.  **Open the Project Folder**:
    - Unzip the project files into a folder on your computer.
    - Open this folder in Visual Studio Code (`File > Open Folder...`).

2.  **Install Dependencies**:
    - Open the integrated terminal in VS Code.
    - In the terminal, run the following command. This will read the `package.json` file and download all the necessary libraries (like React and Vite) into a `node_modules` folder.
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
    - The terminal will display a message indicating that the server is running, along with a local URL, typically `http://localhost:5173/`.
    - `Ctrl+click` the link in the terminal, or copy and paste it into your web browser.
    - The application should now be running! The Vite server also provides **Hot Module Replacement (HMR)**, meaning any changes you save to the code will instantly update in the browser without needing a full refresh.

### To Stop the Server

- Go back to the terminal window where the server is running and press `Ctrl+C`.

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
- **Vite**: For the local development server and build tooling.
- **Tailwind CSS**: For styling (included via CDN).

---

Made with 💚 for fresh calculations.