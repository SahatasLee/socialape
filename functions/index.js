const functions = require("firebase-functions");

const app = require("express")();

const FBAuth =require('./util/fbAuth');

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login, uploadImage } = require("./handlers/users");

// screams route
app.get("/screams", getAllScreams);
// Post one scream
app.post("/scream", FBAuth, postOneScream);

//user route
//Signup route
app.post("/signup", signup);
//Login route
app.post("/login", login);

app.post('/user/image', FBAuth, uploadImage);

exports.api = functions.region("asia-southeast2").https.onRequest(app);
