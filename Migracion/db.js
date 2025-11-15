import { MongoClient } from "mongodb";

const uri = "mongodb+srv://SamuelMogollon_db_user:KxvpwO7qPtQxvfq4@samuel.xwsf8e9.mongodb.net/";
const client = new MongoClient(uri);

let db = null;

export async function testConnection() {
    try {
        await client.connect();
        console.log("✅ Conectado a MongoDB correctamente");

        db = client.db("gastosDB");  // 👈 SE GUARDA AQUÍ
        return db;                   // 👈 SE RETORNA CORRECTAMENTE
    } catch (error) {
        console.log("❌ Error conectando a MongoDB:", error.message);
    }
}

export { db };