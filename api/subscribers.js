export default async function handler(req, res) {
    const API_KEY = process.env.MAILERLITE_API_KEY;

    if (!API_KEY) {
        return res.status(500).json({ error: "API key not found" });
    }

    switch (req.method) {
        case "POST":
            const { email, name, last_name } = req.body;

            if (!email) {
                return res.status(400).json({ error: "Email is required" });
            }

            try {
                const response = await fetch(
                    "https://connect.mailerlite.com/api/subscribers",
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email,
                            fields: {
                                ...(name && { name }),
                                ...(last_name && { last_name }),
                            },
                        }),
                    }
                );

                const data = await response.json();

                res.status(201).json({ success: true, data });
            } catch (err) {
                res.status(500).json({
                    error: "Failed to subscribe",
                    details: err.message,
                });
            }
        case "GET":
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

                return res.json({ subscribers: data });
            } catch (err) {
                console.error("Error fetching subscribers:", err);
                res.status(500).json({ error: "Server error" });
            }
        default:
            res.status(405).json({ error: "Method not allowed" });
    }
}
