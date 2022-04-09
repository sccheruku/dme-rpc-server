// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Account, Near, connect, ConnectConfig , keyStores} from "near-api-js";
import { AccountBalance } from 'near-api-js/lib/account';
import runMiddleware from '../../../middleware/runMiddleware';
import cors from '../../../middleware/cors';

const networkId = process.env.NEAR_NETWORK_ID!;
const config: ConnectConfig = {
    headers: {},
    networkId,
    nodeUrl: `https://rpc.${networkId}.near.org`,
    keyStore: new keyStores.InMemoryKeyStore(),
    walletUrl: `https://wallet.${networkId}.near.org`,
    helperUrl: `https://helper.${networkId}.near.org`
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<AccountBalance | Error>
) {
    await runMiddleware(req, res, cors);
    try {
        const accountId: string = req.query.accountId! as string;
        const near = await connect(config);
        const account = await near.account(accountId);
        const accountInfo = await account.getAccountBalance();
        return res.status(200).json(accountInfo);
    }
    catch (error: any) {
        res.status(500).json({
            name: error.name,
            message: error.message,
            stack: error.stack
        });
    }

}