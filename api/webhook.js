export default async function handler(req, res) {
  console.log("LINE Webhook Received:", req.body);

  // LINE 要收到 200 才不會重試
  return res.status(200).send("OK");
}
