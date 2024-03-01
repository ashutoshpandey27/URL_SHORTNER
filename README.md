# Node.js URL Shortener Backend

![Node.js](https://img.shields.io/badge/Node.js-14.0-green)
![Express.js](https://img.shields.io/badge/Express.js-4.17-blue)
![License](https://img.shields.io/badge/license-MIT-orange)

This repository contains a backend server built with Node.js and Express.js for URL shortening functionality. The server provides endpoints to shorten long URLs and redirect users to the original URLs using shortened links. It utilizes a simple database to store the mappings between original and shortened URLs.

## Features

- **Shorten URLs:** Convert long URLs into compact, easy-to-share links.
- **Redirect Users:** Seamless redirection to original URLs using shortened links.
- **Simple Database:** Implementation for storing URL mappings.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/your-username/node-url-shortener-backend.git
    ```

2. Install dependencies:

    ```
    cd node-url-shortener-backend
    npm install
    ```

3. Start the server:

    ```
    npm start
    ```

## Usage

- **Shorten a URL:** Send a POST request to `/shorten` with the long URL in the request body. The server will respond with a shortened URL.
  
- **Redirect to the Original URL:** Access the shortened URL in your browser. The server will automatically redirect you to the original URL.

## Configuration

You can configure the server settings in the `config.js` file.

## Contributing

Contributions are welcome! Please feel free to open a pull request or report any issues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or suggestions, please contact [jnuite.ashutosh@gmail.com].
