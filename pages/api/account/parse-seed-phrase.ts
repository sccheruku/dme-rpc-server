// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const nearSeedPhrase = require('near-seed-phrase');

type Data = {
    seedPhrase: string,
    secretKey: string,
    publicKey: string,
}

/**
 * @swagger
 * /account/parse-seed-phrase:
 *   get:
 *      tags: 
 *       - "account"
 *      responses:
 *          500:
 *              description: not supported
 *      
 *   post:
 *      tags:
 *       - "account"
 *      description: Returns the hello world
 *      responses:
 *          200:
 *              description: hello world
 */

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {
    if (req.method != "POST") {
        return res.status(500).json({ name: "Error", message: "Not implemented" });
    }
    const payload = req.body;
    const { seedPhrase, secretKey, publicKey } = nearSeedPhrase.parseSeedPhrase(payload.seedPhrase)
    return res.status(200).json({
        seedPhrase,
        secretKey,
        publicKey
    });
}