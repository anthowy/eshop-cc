const crypto = require("crypto");

module.exports = function verifyWebhookIntegrity(signature, hmac, requestBody) {
    const hash = crypto
        .createHmac("sha256", signature)
        .update(requestBody, "utf8", "hex")
        .digest("base64");

    return hash === hmac;
};
