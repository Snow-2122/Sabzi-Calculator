# Sabzi Calculator

A clean, responsive web app to help users calculate vegetable and meat costs. It can calculate the quantity you can afford for a given budget or the total cost for a desired quantity.

![Sabzi Calculator App Screenshot](https://github.com/user-attachments/assets/d2cb2a71-8c72-491a-9e66-0f770ce757f7)

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
| ![Screenshot of the app calculating quantity by a set budget](https://github.com/user-attachments/assets/61164bd1-cbdc-44bd-867e-c05a3fcfe27c) | ![Screenshot of the app calculating total cost by a set quantity](https://github.com/user-attachments/assets/cf0ec6c8-ef90-4565-8c9d-a4b973b05678) |


## 🚀 How to Run the Application

This is a frontend-only application built with React and TypeScript. You don't need a complex build process to run it, just a simple local web server. Below are detailed instructions for Windows and Linux users, especially for those using Visual Studio Code.

### Prerequisites

- A modern web browser (like Chrome, Firefox, or Edge).
- **(Optional, but recommended)** [Visual Studio Code](https://code.visualstudio.com/download) as your code editor.
- One of the following for serving the files:
    - The [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code.
    - [Node.js](https://nodejs.org/) (which includes `npm`).
    - [Python](https://www.python.org/downloads/) installed on your system.

### Step-by-Step Guide

#### 1. Get the Code

First, you need to have the project files on your computer. If this were a project on GitHub, you would clone it. For this environment, you already have the files.

#### 2. Open the Project in VS Code

1.  Open Visual Studio Code.
2.  Go to `File > Open Folder...` and select the root directory of this project (the folder containing `index.html`).

#### 3. Start a Local Server

You need a local server to view the app correctly in your browser. Here are three easy methods:

---

#### Method 1: VS Code Live Server Extension (Easiest)

This is the recommended method for beginners using VS Code.

1.  **Install the Extension**:
    - In VS Code, go to the **Extensions** view (click the icon with four squares on the sidebar or press `Ctrl+Shift+X`).
    - Search for `Live Server` by Ritwick Dey.
    - Click **Install**.

2.  **Start the Server**:
    - Once installed, open the `index.html` file in the editor.
    - Right-click anywhere in the `index.html` file and select **"Open with Live Server"**.
    - Alternatively, click the **"Go Live"** button in the bottom-right corner of the VS Code status bar.

3.  Your browser will automatically open with the application running, usually at an address like `http://127.0.0.1:5500`.

---

#### Method 2: Using Node.js (Cross-Platform)

If you have Node.js installed, you can use the lightweight `serve` package.

1.  **Install `serve`**:
    - Open the integrated terminal in VS Code (`View > Terminal` or `Ctrl+\``).
    - Run the following command to install `serve` globally on your machine:
      ```bash
      npm install -g serve
      ```

2.  **Start the Server**:
    - In the same terminal, ensure you are in the project's root directory.
    - Run the command:
      ```bash
      serve .
      ```
    - The terminal will give you a local URL, typically `http://localhost:3000`.

3.  **Access the App**:
    - `Ctrl+click` the link in the terminal or copy-paste it into your browser's address bar.

---

#### Method 3: Using Python (Cross-Platform)

Python is often pre-installed on Linux and macOS, and is easy to install on Windows.

1.  **Start the Server**:
    - Open the integrated terminal in VS Code (`View > Terminal` or `Ctrl+\``).
    - Ensure you are in the project's root directory.
    - Run the command for your Python version:

    **For Python 3:**
    ```bash
    python -m http.server
    ```
    *This is the most common command for modern systems.*

    **For Python 2:**
    ```bash
    python -m SimpleHTTPServer
    ```

2.  **Access the App**:
    - The server will start, usually on `http://localhost:8000`. Open this URL in your browser to see the app.

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
