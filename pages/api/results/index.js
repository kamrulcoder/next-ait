import nc from "next-connect";
import db from "../../../utils/db";
import Result from "../../../models/Result";

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  try {
    const { roll, session, course } = req.body;
    const result = await Result.findOne({ roll, session, course });
    await db.disconnect();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Your Information is not Valid");
  }
});

export default handler;
