import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

export const getEstimateAmount = async (formData) => {
  const estimateAmount = await axios.post("/estimate/eamt", formData);
  return estimateAmount;
};

export const createOrder = async (formData) => {
  const order = await axios.post("/estimate/createorder", formData);

  return order.data.data;
};

export const verifyPayment = async (payment) => {
  const paymentConfirmation = await axios.post("/estimate/payverify", {
    response: payment,
  });
  return paymentConfirmation.data;
};

export const getPdfFile = async (formData, orderId, payId) => {
  const pdfFileBlob = await axios.post(
    "/estimate/",

    { ...formData, orderId, payId },
    {
      responseType: "blob",
      headers: { Accept: "application/pdf" },
    }
  );
  return new Blob([pdfFileBlob.data], {
    type: "application/pdf",
  });
};

export const downloadPdf = async (pdfBlob, formData) => {
  const furl = window.URL.createObjectURL(pdfBlob);

  const tempLink = document.createElement("a");
  tempLink.href = furl;
  tempLink.setAttribute("download", `Estimate_${formData.customerName}.pdf`);

  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(furl);
};

export const stripeHandler = async (formData) => {
  // const stripe = await loadStripe(`${getKeyId()}`);
  const stripe = await loadStripe(
    `pk_test_51NrhvoSJukRFIJnJz8Ah2WWELi7xOjKZrfSbOpCLRKHp5ihFtOKJjyqbTjTjAjYZORrKO0serrJl244OpJfR7u2j00rDBoW3iB`
  );

  const stripepay = await axios.post("/estimate/stripecheckout", {
    formData,
  });
  console.log(stripepay);
  const session = await stripepay;
  return session;
};

export const razorPayHandler = async (response, data, formData) => {
  const roid = response.razorpay_order_id;
  const rpid = response.razorpay_payment_id;

  const paymentConfirmation = await verifyPayment(response);

  if (paymentConfirmation.message === "Valid Sign") {
    const pdfBlob = await getPdfFile(formData, roid, rpid);
    await downloadPdf(pdfBlob, formData);
    await addClient(response, formData, roid, rpid, data.amount);
  } else {
    console.log("Error");
  }
};

export const contactUs = async (contactForm) => {
  const contactsubmit = await axios.post("/estimate/contactus", contactForm);
  return contactsubmit;
};

export const addClient = async (
  response,
  formData,
  rorder_id,
  rpayment_id,
  pay_amt
) => {
  const client = await axios.post("/client/addclient", {
    response,
    formData,
    rorder_id,
    rpayment_id,
    pay_amt,
  });
  return client;
};
export const getCharges = async () => {
  const master = await axios.post("/master/");
  return master.data.data[0].charges;
};
export const getKeyId = async () => {
  const master = await axios.post("/master/");
  return master.data.data[0].keyid;
};
export const getCompanyName = async () => {
  const master = await axios.post("/master/");
  return master.data.data[0].companyname;
};
export const getRazorPayOptions = (data, formData, keyid, companyname) => ({
  key: keyid,
  amount: Number(data.amount),
  currency: data.currency,
  name: companyname,
  description: "ESTIMATE PAYMENT",
  order_id: data.id,
  send_sms_hash: true,
  prefill: {
    name: formData.customerName,
    email: formData.mailId,
    contact: formData.mobileNo,
  },
});

export const handOpenRazorpay = async (data, formData) => {
  const options = {
    key: `${getKeyId()}`,
    amount: Number(data.amount),
    currency: data.currency,
    name: `${getCompanyName().toUpperCase()}`,
    description: "PAYMENT FOR ESTIMATE",
    order_id: data.id,
    send_sms_hash: true,
    handler: async function (response) {
      await razorPayHandler(response, data, formData);
    },
    prefill: {
      name: formData.customerName,
      email: formData.mailId,
      contact: formData.mobileNo,
    },
    notes: {
      address: "AHMEDNAGAR, MAHARASHTRA",
    },
    theme: {
      color: "#6c55ff",
    },
  };
  const rzp = new window.Razorpay(options);
  await rzp.open();
  // return rzp;
};
