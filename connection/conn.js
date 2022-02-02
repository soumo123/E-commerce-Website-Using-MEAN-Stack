
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
// const URL = 'mongodb+srv://soummya:admin123@cluster0.w5vnd.mongodb.net/soummyaproject?retryWrites=true&w=majority'
const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.bn8ug.mongodb.net:27017,cluster0-shard-00-01.bn8ug.mongodb.net:27017,cluster0-shard-00-02.bn8ug.mongodb.net:27017/productdata?ssl=true&replicaSet=atlas-qysr0r-shard-0&authSource=admin&retryWrites=true&w=majority`
// const URL = 'mongodb://soummya:admin123@clustermasjeed1-shard-00-00-ekpfe.mongodb.net:27017,clustermasjeed1-shard-00-01-ekpfe.mongodb.net:27017,clustermasjeed1-shard-00-02-ekpfe.mongodb.net:27017/soummyaproject?ssl=true&replicaSet=ClusterMasjeed1-shard-0&authSource=admin&retryWrites=true'
mongoose.connect(URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log(`Connection is succesful`)
}).catch((err)=> console.log('No connection'))

