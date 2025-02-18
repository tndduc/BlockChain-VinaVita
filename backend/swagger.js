const swaggerJsdoc = require('swagger-jsdoc');

// Cấu hình Swagger
const options = {
  definition: {
    openapi: '3.0.0', // Phiên bản OpenAPI
    info: {
      title: 'My Express API',
      version: '1.0.0',
      description: 'API Documentation for my Express app',
    },
  },
  apis: ['./routes/*.js'], // Đường dẫn đến các tệp chứa các route API (có thể sử dụng comment JSDoc để mô tả API)
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
