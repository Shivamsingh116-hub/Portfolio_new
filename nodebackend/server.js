const http = require("http");
const { Resend } = require("resend");
require("dotenv").config();
const resend = new Resend(process.env.RESEND_API_KEY);
const server = http.createServer(async (req, res) => {

    /* =====================
       CORS (robust)
    ====================== */
    res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_URL || "https://shivamsingh116.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }
    if (req.url !== "/form_data") {
        res.writeHead(404);
        return res.end("Not Found");
    }

    /* =====================
       Only POST allowed
    ====================== */
    if (req.method !== "POST") {
        res.writeHead(405);
        return res.end("Method Not Allowed");
    }

    /* =====================
       Read Body
    ====================== */
    let body = "";
    req.on("data", chunk => body += chunk);
    console.log(body)
    req.on("end", async () => {
        try {
            if (!body) {
                throw new Error("Empty request body");
            }

            const { Name, ContactNo, Message } = JSON.parse(body);

            /* =====================
               Validation (mandatory)
            ====================== */
            if (!Name || !ContactNo || !Message) {
                res.writeHead(400);
                return res.end("All fields are required");
            }

            if (!/^\+?[0-9]{7,15}$/.test(ContactNo)) {
                res.writeHead(400);
                return res.end("Invalid contact number");
            }

            /* =====================
               Mail Content
            ====================== */
            await resend.emails.send({
                from: `"Portfolio Contact" <onboarding@resend.dev>`,
                to: process.env.RECEIVER_EMAIL,
                subject: `📩 New Portfolio Inquiry from ${Name}`,
                text: `
You have received a new message via your portfolio website.

━━━━━━━━━━━━━━━━━━━━━━
👤 Sender Details
━━━━━━━━━━━━━━━━━━━━━━
Name        : ${Name}
Contact No : ${ContactNo}

━━━━━━━━━━━━━━━━━━━━━━
💬 Message
━━━━━━━━━━━━━━━━━━━━━━
${Message}

━━━━━━━━━━━━━━━━━━━━━━
📌 Additional Information
━━━━━━━━━━━━━━━━━━━━━━
• Source     : Portfolio Contact Form
• Received   : ${new Date().toLocaleString()}
• Priority   : Normal

━━━━━━━━━━━━━━━━━━━━━━
⚠️ Action Required
━━━━━━━━━━━━━━━━━━━━━━
Consider responding within 24 hours to maintain engagement.

This is an automated notification. Do not reply directly to this email.
`
            });


            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: true }));

        } catch (error) {
            console.error("Mail Error:", error.message);
            res.writeHead(500);
            res.end("Internal Server Error");
        }
    });
});

/* =====================
   Server Start
===================== */
const PORT = process.env.PORT || 3200;
server.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
