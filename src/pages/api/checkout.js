import pluto from '../../lib/pluto';

async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      if (!req.body.name || !req.body.email) return res.status(400);

      const customer = await pluto.customers.create({
        name: req.body.name,
        email: req.body.email,
      });

      const paymentIntent = await pluto.paymentIntents.create({
        chain: 'eth',
        currency: 'eth',
        amount: 0.01,
        customer: customer.id,
      });

      return res.send(paymentIntent.id);
    }

    return res.status(400).json({ message: 'Invalid request' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

export default handler;