import currencies from '../../constants/currencies.json';
import pluto from '../../lib/pluto';

async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const currency = currencies.find((c) => c.code === req.body.currency);
      if (!req.body.name || !req.body.email || !currency) return res.status(400).json({ error: 'Missing name or email' });

      const customer = await pluto.customers.create({
        name: req.body.name,
        email: req.body.email,
      });

      const paymentIntent = await pluto.paymentIntents.create({
        chain: currency.chain,
        currency: currency.code,
        amount: 0.01,
        customer: customer.id,
      });

      return res.send(paymentIntent);
    }

    return res.status(400).json({ message: 'Invalid request' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
}

export default handler;
