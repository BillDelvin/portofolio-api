const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// Authentication middleware
// This middleware will check token in authorization
// off request
// it will verified access token auth0 json web key set
exports.checkJwt = jwt({
 secret: jwksRsa.expressJwtSecret({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 10,
  jwksUri: 'https://dev-5nvh09nn.auth0.com/.well-known/jwks.json',
 }),
 audience: 'https://dev-5nvh09nn.auth0.com/api/v2/',
 issuer: 'https://dev-5nvh09nn.auth0.com/',
 algorithms: ['RS256'],
});
