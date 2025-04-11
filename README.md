# Smart Blog Generator

Smart Blog Generator utilizes OpenAI's ChatGPT 3.5 to generate custom blogs on any topic based on user-provided titles, optional descriptions, and selected blog types.

## Table of Contents

- [Project Name](#smart-blog-generator)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Props](#props)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Description

Smart Blog Generator is a React component library that leverages OpenAI's ChatGPT 3.5 to create unique and relevant blog content based on user input. It allows users to enter a blog title, provide an optional description, and select the type of blog they want to generate. With a sleek and responsive interface, Smart Blog Generator is designed to be easily embedded into other React applications for dynamic content creation.

---

## ✨ Features

- 🎯 Generate blog posts based on user-provided title and optional descriptions
- 🧠 Uses OpenAI's GPT-3.5-turbo model to generate human-like content
- 🔐 API key validation before use
- 🧩 Copy-to-clipboard functionality for generated content
- 💅 TailwindCSS-powered UI with support for custom styling
- 💻 Markdown rendering with code block support

---

## Getting Started

This guide will help you install and start using the Smart Blog Generator component in your React project.

### Prerequisites

Before using this package, make sure you have:

- Node.js >= 14.x
- A valid OpenAI API Key
- A React project (with Tailwind CSS if you want consistent styling)
- Internet connection (required for OpenAI API calls)

### Installation

Install the package using your preferred package manager:

```bash
npm install smart-blog-generator
# or
yarn add smart-blog-generator
```

Ensure you have Tailwind CSS configured. If not, follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/guides/create-react-app).

Then, include the CSS file in your project’s entry file :

```js
import "smart-blog-generator/dist/style.css";
```

### Usage

Import and use the component in your React project:

```js
import React from "react";
import { SmartBlogGenerator } from "smart-blog-generator";

const App = () => {
  return (
    <div className="p-8">
      <SmartBlogGenerator
        apiKey="YOUR_OPENAI_API_KEY"
        cardClassName="shadow-lg"
      />
    </div>
  );
};

export default App;
```

### Props

| Prop            | Type     | Required | Description                                      |
| --------------- | -------- | -------- | ------------------------------------------------ |
| `apiKey`        | `string` | Yes      | Your OpenAI API key                              |
| `cardClassName` | `string` | No       | Custom Tailwind classes for outer card container |

---

## Contributing

We welcome contributions!

To contribute:

1. Fork this repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

---

## License

This project is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.

---

## Acknowledgments

- [OpenAI](https://openai.com) for the GPT-3.5-turbo API
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- [React Markdown](https://github.com/remarkjs/react-markdown) for rendering markdown in React
- [Radix UI Icons](https://icons.radix-ui.com/) for beautiful icons

---

> 🚀 If you find this project useful, feel free to star the repository or share it!
