# React JSX Compiler with Babel

This project provides a setup for compiling React JSX files into plain JavaScript using Babel. It also includes ESLint for code quality checks and Chokidar for watching file changes in the development environment.

## Features

- **Babel Compilation:** Transpile JSX and TypeScript files into vanilla JavaScript.
- **Source Mapping:** Generated source maps for easier debugging of the compiled code.
- **ESLint Integration:** Lint your code for potential errors and code quality issues before the build process.
- **File Watching:** Automatically recompile files as you save changes.

## Getting Started
Clone the repository to your local machine:


### `git clone https://github.com/ZeeshanAG/compile-babel`

Navigate to the project directory:

### `cd compile-babel`

Install the required dependencies:

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm run lint`

Lints the `src` directory for any potential coding issues. Ensure you fix any linting errors before you attempt to build the project.

### `npm run build`

Compiles all `.js`, `.jsx`, `.ts`, and `.tsx` files in the `src` directory into the `compiled` directory with source maps for debugging.

### `npm run watch`

Watches for any changes in the `src` directory and automatically runs the build script whenever a file is saved.

## Project Structure

- `src`: The directory where you place all your source files (`.js`, `.jsx`, `.ts`, `.tsx`).
- `compiled`: The directory where the transpiled JavaScript files will be placed after running the build script.
- `.eslintrc.js`: The ESLint configuration file.
- `.babelrc`: The Babel configuration file.
- `.gitkeep`: This file was added to allow for the src folder to be added to the repository. Feel free to delete this file.
- `package.json`: The NPM package file that includes metadata and scripts for the project.

## Building Your Project

To compile your JSX and TypeScript files into JavaScript, run:

### `npm run build`

This script will lint your code and then compile it using Babel. If there are any linting errors, the build will fail, and you will need to fix those errors first.

## Watching for Changes

During development, you can use the `watch` script to automatically recompile your code as you make changes:

### `npm run watch`