// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import cors from '../../middleware/cors';
import runMiddleware from '../../middleware/runMiddleware';


type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {
    await runMiddleware(req, res, cors);
    res.status(500).json({ name: "Error", message: "Not implemented" });
}