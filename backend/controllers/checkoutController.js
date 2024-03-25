/* eslint-disable camelcase */
// backend/controllers/checkoutController.js
const stripe = require("stripe")(process.env.STRIPE_SECRET);

module.exports.createCheckoutSession = async (req, res) => {
  try {
    const { data, returnUrl } = req.body; // Add a new parameter 'returnUrl' to get the return URL

    if (!Array.isArray(data)) {
      return res
        .status(400)
        .json({ error: "Invalid data format. Expected an array." });
    }

    const lineItems = data.map((item) => ({
      price_data: {
        currency: "usd",
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
      success_url: `${returnUrl}`, // Set success_url to the returnUrl
      cancel_url: `${returnUrl}`, // Set cancel_url to the returnUrl
      customer_email: data[0].userEmail,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
