const express = require('express');
const cors = require('cors');
const surveyRoutes = require('./routes/surveyRoutes');
const mongoose = require('./config/database'); 
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs'); 
const swaggerDocument = yaml.load('./docs/swagger.yaml'); 
const Eureka = require('eureka-js-client').Eureka;

const app = express();
const PORT = 3011;

const eurekaClient = new Eureka({
  instance: {
    app: 'survey-service',
    hostName: 'ec2-13-216-183-248.compute-1.amazonaws.com',
    ipAddr: 'ec2-13-216-183-248.compute-1.amazonaws.com',
    port: {
      '$': PORT,
      '@enabled': true,
    },
    vipAddress: 'survey-service',
    statusPageUrl: `http://ec2-13-216-183-248.compute-1.amazonaws.com:${PORT}/info`,
    healthCheckUrl: `http://ec2-13-216-183-248.compute-1.amazonaws.com:${PORT}/health`,
    homePageUrl: `http://ec2-13-216-183-248.compute-1.amazonaws.com:${PORT}`,
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
    registerWithEureka: true,
    fetchRegistry: true,
    leaseRenewalIntervalInSeconds: 30,
    leaseExpirationDurationInSeconds: 90,
  },
  eureka: {
    host: 'ec2-13-216-183-248.compute-1.amazonaws.com',
    port: 8761,
    servicePath: '/eureka/apps/',
    maxRetries: 10,
    requestRetryDelay: 2000,
    heartbeatInterval: 5000,
    registryFetchInterval: 5000,
  },
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.get('/info', (req, res) => {
  res.json({
    app: 'survey-service',
    status: 'UP',
    timestamp: new Date()
  });
});

app.use(cors());
app.use(express.json());

app.use('/questions', surveyRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  eurekaClient.start(error => {
    console.log(error || 'Eureka registration complete');
  });
  console.log(`Survey service running at http://ec2-13-216-183-248.compute-1.amazonaws.com:${PORT}`);
});

process.on('SIGINT', () => {
  eurekaClient.stop(error => {
    console.log('Deregistered from Eureka');
    process.exit();
  });
});
