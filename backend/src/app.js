import { config } from "dotenv";
import express, { json } from "express";
import fetch from "node-fetch";
import cors from "cors";

config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(cors());

// POST /subscribers — to subscribe someone
app.post("/subscribers", async (req, res) => {
    const { email, name } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    try {
        const response = await fetch(
            "https://connect.mailerlite.com/api/subscribers",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
                },
                body: JSON.stringify({
                    email: email,
                    fields: name ? { name } : undefined,
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data });
        }

        res.status(201).json({ success: true, data: data });
    } catch (err) {
        console.error("Error subscribing:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// GET /subscribers — to list subscribers (or something similar)
app.get("/subscribers", async (req, res) => {
    try {
        const response = await fetch(
            "https://connect.mailerlite.com/api/subscribers",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
                },
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data });
        }

        res.json({ subscribers: data });
    } catch (err) {
        console.error("Error fetching subscribers:", err);
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`);
});
