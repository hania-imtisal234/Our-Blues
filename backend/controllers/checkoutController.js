// backend/controllers/checkoutController.js
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const checkoutController = {
  createCheckoutSession: async (req, res) => {
    try {
      const { data } = req.body;
      console.log(data);
      if (!Array.isArray(data)) {
        return res
          .status(400)
          .json({ error: "Invalid data format. Expected an array." });
      }

      const lineItems = data.map((item) => ({
        price_data: {
          currency: item.currency,
          product_data: {
            name: item.therapistName,
          },
          unit_amount: item.amount * 100,
        },
        quantity: 1,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
        customer_email: data[0].userEmail,
      });

      res.json({ id: session.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = checkoutController;
