# Changelog

All notable changes to this project will be documented in this file.  
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- Themeable, responsive card layout using TailwindCSS
- Support for user-provided OpenAI API keys with validation
- Blog generation based on title, description, and blog type
- Markdown rendering for blog preview using `react-markdown`
- Copy-to-clipboard functionality with feedback animation

### Changed

- UI loading skeleton for API validation state
- Improved input validation and state management
- Restructured component logic into smaller, reusable components

### Fixed

- Fixed clipboard button overlapping markdown content
- Fixed flicker on invalid API keys
- Handled empty input edge cases

---

## [1.0.0] - 2024-02-12

### Added

- Initial release of **Smart Blog Generator**
- Integrated GPT-3.5-turbo via OpenAI API
- Responsive, accessible React UI with TailwindCSS
- Form inputs for title, description, and blog type
- Validation flow for OpenAI API key
- Markdown blog result view with copy feature

---

## [Older Versions]

Initial release – no prior versions.

---

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

---

## Authors

- [Soumen Das](https://github.com/mfsi-soumend) – Creator and Maintainer

---

## License

This project is licensed under the [MIT License](./LICENSE.md).
