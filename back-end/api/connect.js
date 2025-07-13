import {MongoClient} from "mongodb"
const URI =
"mongodb+srv://wallyson:wallyson@cluster0.be5kpw9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotfy")
// const songCollection = await db.collection('songs').find({}).toArray()
// console.log(songCollection)