const admin = require('firebase-admin');

const serviceAccount = require('../config/google/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore().collection('databases').doc('db_music');

export default db;

