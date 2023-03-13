import { brandsData } from "@/utils/brandsData";
import { NextApiRequest, NextApiResponse } from "next";
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(brandsData)) {
      throw new Error("Cannot find brand data");
    }
    res.status(200).json(brandsData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
