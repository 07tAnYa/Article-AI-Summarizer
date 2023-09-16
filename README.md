# Article Summarizer


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Key Configuration](#api-key-configuration)
- [Demo](#demo)
- [Contributing](#contributing)

## Introduction

This is a web-based Article Summarizer built using React and Vite. It utilizes the Rapid API to provide summaries of articles from the provided links. The project aims to simplify the process of extracting key information from lengthy articles.

## Features

- Summarize articles by providing a link.
- Easy-to-use web interface.
- Customizable summary length.
- Responsive design for various screen sizes.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- A Rapid API key. You can obtain one by signing up at [Rapid API](https://rapidapi.com/).

### Installation

1. Clone the repository:
   git clone https://github.com/your-username/article-summarizer.git
2. Change into the project directory:
   cd article-summarizer
3. Install dependencies:
   (most important) npm install react-redux

## Usage

To start the development server, run the following command:
npm run dev

The application should now be running locally. You can access it in your browser at `http://localhost:3000`.

## API Key Configuration

To configure your Rapid API key, create a `.env.local` file in the project root and add your API key like this:

REACT_APP_RAPID_API_KEY=your-api-key-here


Remember to replace `your-api-key-here` with your actual Rapid API key.

## Demo

You can view a live demo of this project at [Demo Link](https://your-demo-link.com).

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to your fork: `git push origin feature-name`.
5. Create a pull request on the main repository.
