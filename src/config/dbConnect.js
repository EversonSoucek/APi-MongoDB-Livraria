import mongoose from "mongoose";

mongoose.connect("mongodb+srv://EversonSoucek:1108Junior@projetonode.1vrsqsq.mongodb.net/Alura-nodee?")

let db = mongoose.connection;

export default db