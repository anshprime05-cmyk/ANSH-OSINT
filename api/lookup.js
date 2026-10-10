export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  return res.status(200).json({
    status: "ok",
    service: "ANSH OSINT",
    message: "Backend is running"
  });
}
