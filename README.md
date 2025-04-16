# Zezo Tech

A modern web application built with Node.js and Express.

## Features

- Secure authentication system
- Session management
- Rate limiting
- Input validation
- CORS protection
- Helmet security headers
- MySQL database integration

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v8 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zezo-tech
```

2. Install dependencies:
```bash
npm install
```

3. Create a MySQL database and update the `.env` file with your database credentials.

4. Start the development server:
```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
SESSION_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:3000
```

## API Endpoints

### Authentication

- `POST /api/login` - User login
- `GET /api/logout` - User logout

## Security Features

- Password hashing with bcrypt
- Session management
- Rate limiting
- Input validation
- CORS protection
- Helmet security headers
- SQL injection prevention
- XSS protection

## Development

To start the development server with hot reloading:
```bash
npm run dev
```

## Testing

Run the test suite:
```bash
npm test
```

## Production Deployment

1. Set `NODE_ENV=production` in your `.env` file
2. Update security settings in `.env`
3. Build and start the application:
```bash
npm start
```

## License

MIT
