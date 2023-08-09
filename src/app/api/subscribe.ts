export default async function handler(req: Request, res) {
  console.log('req, res', req, res);
  if (req.method === 'POST') {
    const { email } = req.body;

    return res.status(200).json({ message: 'Подписка успешно оформлена' });
  }

  return res.status(405).end();
}
