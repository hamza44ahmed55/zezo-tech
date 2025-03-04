# My Docker Project

This project demonstrates how to set up a simple application using Docker. Below are the instructions to build and run the application.

## Project Structure

```
my-docker-project
├── src
│   ├── app.js
│   └── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## Prerequisites

- Docker installed on your machine
- Docker Compose installed

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd my-docker-project
   ```

2. **Build the Docker image:**

   You can build the Docker image using the following command:

   ```bash
   docker-compose build
   ```

3. **Run the application:**

   To run the application, use the following command:

   ```bash
   docker-compose up
   ```

4. **Access the application:**

   Open your web browser and go to `http://localhost:3000` to see the application in action.

## Stopping the Application

To stop the application, press `CTRL+C` in the terminal where the application is running. You can also run:

```bash
docker-compose down
```

## License

This project is licensed under the MIT License.