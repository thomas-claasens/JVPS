'use strict';

// Production specific configuration
// =================================
module.exports = {
    // Server IP
    ip: process.env.OPENSHIFT_NODEJS_IP ||
    process.env.IP ||
    undefined,

    // Server port
    port: process.env.OPENSHIFT_NODEJS_PORT ||
    process.env.PORT ||
    8080,

    // MongoDB connection options
    mongo: {
        uri: 'mongodb://jvapes:12vape12@ds047945.mongolab.com:47945/jvapes'
    }
};
