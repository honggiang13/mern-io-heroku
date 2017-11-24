const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://honggiang13:abcde#12345@cluster0-shard-00-00-ljcor.mongodb.net:27017,cluster0-shard-00-01-ljcor.mongodb.net:27017,cluster0-shard-00-02-ljcor.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
  port: process.env.PORT || 8000,
};

export default config;
