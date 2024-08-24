// File: pages/api/saveAppointment.ts
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "your_mongodb_uri";
const client = new MongoClient(uri);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    await client.connect();
    const db = client.db("appointments");
    const collection = db.collection("marriageAppointments");

    const { nid } = req.body;

    // Check if an appointment with the same NID already exists
    const existingAppointment = await collection.findOne({ nid });

    if (existingAppointment) {
      return res
        .status(409)
        .json({ error: "An appointment with this NID already exists." });
    }

    // Insert the new appointment
    const result = await collection.insertOne(req.body);
    res
      .status(201)
      .json({ message: "Appointment created successfully", result });
  } catch (error) {
    console.error("Error saving appointment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
}

export default handler;
