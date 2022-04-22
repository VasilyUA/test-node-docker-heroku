const mongoose = require("mongoose");

module.exports = async () => {
  const connect = async () => {
    mongoose.Promise = global.Promise;
    await mongoose.connect(
      process.env.MONGODB,
      {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: false,
        autoEncryption: {
          keyVaultNamespace: require("./encryption").keyVaultNamespace,
          kmsProviders: require("./encryption").kmsProviders,
          schemaMap: require("./encryption").schemaMap,
        },
      },
      (err) => {
        console.info(`*  Database: MongoDB`);
        console.info(
          err
            ? `*  Error connecting to DB: ${err}
              \n****************************\n`
            : `*  DB Connection: OK
              \n****************************\n`
        );
      }
    );
  };
  await connect();
};
