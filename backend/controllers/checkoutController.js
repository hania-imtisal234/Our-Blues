// backend/controllers/checkoutController.js
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const checkoutController = {
  createCheckoutSession: async (req, res) => {
    try {
      const { data } = req.body;

      if (!Array.isArray(data)) {
        return res
          .status(400)
          .json({ error: "Invalid data format. Expected an array." });
      }

      const lineItems = data.map((item) => ({
        priceData: {
          currency: item.currency,
          productData: {
            name: item.therapistName,
          },
          unitAmount: item.amount * 100,
        },
        quantity: 1,
      }));

      const session = await stripe.checkout.sessions.create({
        paymentMethodTypes: ["card"],
        lineItems: lineItems,
        mode: "payment",
        successUrl: "http://localhost:3000/success",
        cancelUrl: "http://localhost:3000/cancel",
        customerEmail: data[0].userEmail,
      });

      res.json({ id: session.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = checkoutController;
