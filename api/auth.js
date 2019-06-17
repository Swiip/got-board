import { verify } from "jsonwebtoken";
import jwksClient from "jwks-rsa";

const { AUTH0_DOMAIN, AUTH0_CLIENT_ID } = process.env;

const client = jwksClient({
  jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`
});

const getKey = (header, cb) => {
  client.getSigningKey(header.kid, (err, key) => {
    const signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
};

const options = {
  audience: AUTH0_CLIENT_ID,
  issuer: `https://${AUTH0_DOMAIN}/`,
  algorithms: ["RS256"]
};

export default async ({ req }) => {
  // Debug
  if (process.env.NODE_ENV) {
    return { mail: "matthieu.lux@gmail.com" };
  }

  const codedToken = req.headers.authorization;
  const decodedToken = await new Promise((resolve, reject) => {
    verify(codedToken, getKey, options, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      return resolve(decoded);
    });
  });

  return { mail: decodedToken.email };
};
