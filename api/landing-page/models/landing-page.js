"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require("axios");
const netlifyWebhook = strapi.config.get("custom.netlifyWebhook");

module.exports = {
  lifecycles: {
    async afterCreate(_, __) {
      netlifyWebhook && axios.post(netlifyWebhook);
    },
    async beforeCreate(_, __, ___) {
      netlifyWebhook && axios.post(netlifyWebhook);
    },
  },
};
