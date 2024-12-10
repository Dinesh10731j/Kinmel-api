import crypto from "crypto";


const generateHmacSha256Hash = (data, secret) => {
  return crypto.createHmac("sha256", secret).update(data).digest("hex");
};

const E_sewaIntegration = async (req, res) => {
  try {

    const { amount, transactionId, productId } = req.body;





    const merchantCode = "EPAYTEST";
    const secretKey = "8gBm/:&EnhH.1/q";

    const payload = {
      amt: amount,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: amount,
      pid: productId,
      tranId: transactionId,
      scd: merchantCode,
      su: "http://localhost:5173/esewa/success",
      fu: "http://localhost:5173/esewa/failure",
    };


    const dataToHash = `amt=${payload.amt}&pid=${payload.pid}&scd=${payload.scd}`;

    const hash = generateHmacSha256Hash(dataToHash, secretKey);

    payload.hash = hash;

    const paymentUrl = `https://uat.esewa.com.np/epay/main?${new URLSearchParams(payload).toString()}`;


    res.json({ paymentUrl });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error?.message,
    });
  }
};

export default E_sewaIntegration;
