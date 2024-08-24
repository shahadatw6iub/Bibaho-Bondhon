import type { NextApiRequest, NextApiResponse } from "next";

import clientPromise from "../../utils/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("appointments"); // Replace with your database name
      const appointments = await db
        .collection("marriageAppointments")
        .find({})
        .toArray(); // Replace with your collection name

      res.status(200).json(appointments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch appointments." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
