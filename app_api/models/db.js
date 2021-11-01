const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://admin:admin@inclass.vxbxj.mongodb.net/imageDB?retryWrites=true&w=majority';
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error : ', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});


const gracefulShutDown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

// nodemon changes
process.once('SIGUSR2', () => {
    gracefulShutDown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// for app termination
process.once('SIGINT', () => {
    gracefulShutDown('app termination', () => {
        process.exit(0);
    });
}); 

// for heroku app termination
process.once('SIGTERM', () => {
    gracefulShutDown('Heroku app termination', () => {
        process.exit(0);
    });
}); 

require('./image');