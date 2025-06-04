// Go to mongoDb website
// Create a free m0 cluster
// create a user
// get the connection string
// Install Mongo DB compass

const { MongoClient, ObjectId } = require("mongodb");

const url =
  "mongodb+srv://namastedev:C0kRd4BfA6guoFZR@namastenode.e1smuki.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstname: "Ram",
    lastname: "shayam",
    city: "ahmedabad",
    phoneNumber: "7014977953",
  };
  // // Insert
  // const insertResult = await collection.insertMany([data]);
  // console.log("Inserted documents =>", insertResult);

  // // Read
  // const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);

  // find all documents
  const result = await collection.find({ firstname: "Ram" }).toArray();
  console.log("🚀 ~ main ~ result:", result);
  // const result = await collection.updateOne({ firstname: "Ram" });

  const updatedData = await collection.updateOne(
    { _id: new ObjectId("683df27507e9eb6a0417aee3") },
    { $set: { city: "Sanchore", phoneNumber: "7014977953" } },
    { upsert: false }
  );
  console.log("🚀 ~ main ~ result2:", updatedData);

  const deleteData = await collection.deleteOne({
    _id: new ObjectId("683dfa075157e6c9e1636422"),
  });
  console.log("🚀 ~ main ~ deleteData:", deleteData);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
