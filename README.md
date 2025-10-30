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

## 💻 How to Run Locally

This project is built with React and TypeScript and uses **Vite** as its development server. The previous methods using static servers (like VS Code's Live Server or Python's server) will not work because they cannot process the TypeScript (`.tsx`) files that browsers don't understand.

Follow these steps to set up a proper development environment and run the app on any system (Windows, macOS, Linux).

### Prerequisites

1.  **[Node.js](https://nodejs.org/en/download/)**: You **must** have Node.js installed. Version 18 or newer is recommended. This installation also includes `npm` (Node Package Manager), which is required to manage project dependencies.
2.  **[Git](https://git-scm.com/downloads/)**: Git must be installed and accessible from your terminal. The `npm run deploy` script uses Git to push the built application to GitHub Pages.
3.  **A Code Editor**: [Visual Studio Code](https://code.visualstudio.com/download) is highly recommended.
4.  **A Terminal**: You can use the integrated terminal in VS Code (`Ctrl+\`` or `View > Terminal`) or your system's default terminal (Command Prompt, PowerShell, or Git Bash on Windows).

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

## 🚀 Build and Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages. The `gh-pages` package automates the process.

### **Important: First-Time Deployment Setup**

If you have just downloaded this project and haven't pushed it to GitHub yet, you **must** initialize a Git repository and link it to a remote repository on GitHub. **This is a mandatory, one-time setup.**

1.  **Create a Repository on GitHub**:
    - Go to [github.com/new](https://github.com/new) and create a new **public** repository. Let's say you name it `Sabzi-Calculator`.
    - **Do not** initialize it with a README, .gitignore, or license file. You need an empty repository to push your existing code into.

2.  **Initialize Git in Your Project**:
    - Open your terminal in the project's root folder.
    - Run the following commands one by one:
      ```bash
      # Initializes a new Git repository
      git init

      # Adds all your project files to be tracked by Git
      git add .

      # Creates your first commit (a snapshot of your code)
      git commit -m "Initial commit"
      ```

3.  **Link Your Local Repository to GitHub**:
    - In your terminal, run the command below. **Replace `<your-repo-url>`** with the URL you copied from your new GitHub repository (it will look like `https://github.com/your-username/Sabzi-Calculator.git`).
      ```bash
      git remote add origin <your-repo-url>
      ```

4.  **Push Your Code to GitHub**:
    - Push your `main` branch to GitHub. This uploads your project files.
      ```bash
      git push -u origin main
      ```
    - Now your local project is connected to GitHub, and the `gh-pages` script will know where to deploy your site. You can now proceed with the deployment steps below.

### Step-by-Step Deployment Guide

Once your project is on GitHub, follow these steps to deploy it.

1.  **Ensure `base` is correct in `vite.config.ts`**:
    - Open the `vite.config.ts` file.
    - The `base` property **must exactly match** the name of your GitHub repository, including capitalization, and be enclosed in slashes. For example, if your repository URL is `https://github.com/your-username/Sabzi-Calculator`, the `base` must be `'/Sabzi-Calculator/'`.

2.  **Run the Deployment Script**:
    - Open your terminal in the project's root directory.
    - Run the following command:
      ```bash
      npm run deploy
      ```
    - This command will first run `npm run build` to create a `dist` folder.
    - Then, it will push the contents of that `dist` folder to a new branch called `gh-pages` in your GitHub repository.

3.  **Configure GitHub Pages Source**:
    - **This is a crucial step.** You need to tell GitHub to serve your site from the `gh-pages` branch, not your `main` branch.
    - In your GitHub repository, go to **Settings** > **Pages**.
    - Under the "Build and deployment" section, change the **Source** to **Deploy from a branch**.
    - Under "Branch", select `gh-pages` from the dropdown menu and leave the folder as `/ (root)`.
    - Click **Save**.

4.  **Wait and Verify**:
    - GitHub will take a minute or two to build and deploy your site from the `gh-pages` branch.
    - Once the process is complete, your live site will be available at the URL shown on the Pages settings page (e.g., `https://your-username.github.io/Sabzi-Calculator/`).

By following these steps, you are deploying the compiled, static assets that browsers can understand, ensuring your app works correctly when live.

## 💻 Technology Stack

- **React**: For building the user interface.
- **TypeScript**: For type-safe JavaScript.
- **Vite**: For the local development server and build tooling.
- **Tailwind CSS**: For styling (included via CDN).

## 🤖 AI Integration Status

This is a roadmap of potential AI features to enhance the Sabzi Calculator.

- [ ] **AI-Powered Price Suggestions**: Integrate with a Gemini model to suggest average market prices for items based on location and season.
- [ ] **Recipe Finder**: Allow users to input their budget and find recipes they can make with the items they can afford.
- [ ] **Voice Input**: Use voice-to-text to allow users to input numbers and items hands-free.

---

Made with 💚 for fresh calculations.