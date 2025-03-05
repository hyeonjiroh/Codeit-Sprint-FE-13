import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "PATCH":
      res.send("ShortLink 수정");
      break;

    case "GET":
      const shortLink = await ShortLink.findById(id);
      res.send(shortLink);
      break;

    default:
      res.send();
      break;
  }
}
