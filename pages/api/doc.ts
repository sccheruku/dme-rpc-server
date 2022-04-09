import { withSwagger } from 'next-swagger-doc';

const host = process.env.HOST;
const schemes = host?.includes("localhost") ? ["http"] : ["https"];

const swaggerHandler = withSwagger({
  definition: {
    swagger: '2.0',
    info: {
      title: 'dmechat',
      version: '0.1.0',
    },
    host,
    basePath: "/api",
    schemes
  },
  apiFolder: 'pages/api',
});
export default swaggerHandler();
