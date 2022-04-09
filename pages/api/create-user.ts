// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const nearSeedPhrase = require('near-seed-phrase');

type Data = {
    seedPhrase: string,
    secretKey: string,
    publicKey: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {
    if (req.method != "POST"){
        return res.status(500).json({ name: "Error", message: "Not implemented" });
    }
    
    const seedPhrase = req.body;
    const { secretKey, publicKey } = nearSeedPhrase.parseSeedPhrase(seedPhrase)
    return {
        seedPhrase,
        secretKey,
        publicKey
    }
}
