module.exports = {
    "auth0": {
        "domain": "Your Auth Domain",
        "clientID": "Your clientId",
        "redirectUri": "Your callback URL"
    },
    "firebase": {
        "apiKey": process.env.REACT_APP_APIKEY,
        "authDomain": process.env.REACT_APP_AUTHDOMAIN,
        "databaseURL": process.env.REACT_APP_DATABASEURL,
        "projectId": process.env.REACT_APP_PROJECTID,
        "storageBucket": process.env.REACT_APP_STORAGEBUCKET,
        "messagingSenderId": process.env.REACT_APP_MESSAGINGSENDERID,
        "appId": process.env.REACT_APP_APPID,
        "measurementId": process.env.REACT_APP_MEASUREMENTID
    },
    "jwt_token": ""
}