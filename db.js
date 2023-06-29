const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

const dbConnect = async () => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`[db] successfully connected`);
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = { mongoose, dbConnect }