// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../util/mongodb';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { db } = await connectToDatabase();
  const data = await db.collection('users').find({}).toArray();
  res.json(data);
}
