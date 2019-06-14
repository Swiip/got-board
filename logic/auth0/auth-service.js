import { WebAuth } from "auth0-js";

const origin = process.browser ? location.origin : ""; // eslint-disable-line

const auth0 = new WebAuth({
  domain: "swiip.eu.auth0.com",
  clientID: "WD3n26zm65tWPzOuezijXuiHtXXO3CiH",
  redirectUri: `${origin}/callback`,
  audience: "https://swiip.eu.auth0.com/userinfo",
  responseType: "token id_token",
  scope: "openid email"
});

let idToken = null;

export const getIdToken = () => {
  return idToken;
};

export const login = () => {
  auth0.authorize();
};

export const logout = () => {
  auth0.logout();
};

export const handleAuthentication = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((err, authResult) => {
      if (err) {
        idToken = null;
        return reject(err);
      }
      if (!authResult || !authResult.idToken) {
        return reject(err);
      }
      idToken = authResult.idToken; // eslint-disable-line prefer-destructuring
      return resolve();
    });
  });
};

export const silentAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.checkSession({}, (err, authResult) => {
      if (err) {
        idToken = null;
        return reject(err);
      }
      idToken = authResult.idToken; // eslint-disable-line prefer-destructuring
      return resolve();
    });
  });
};
