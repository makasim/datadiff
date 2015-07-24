/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function (req, res) {
  res.json([
    {
      "data": {
        "_id": "55afe86baf6e7bcb42cd748a",
        "campaign": {
          "items_forecasts": [],
          "shipping_forecasts": [
            {
              "campaign": 4,
              "action_config": 7,
              "matched_rules": [
                4
              ],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\FreeShipping",
                "amount": 47.2,
                "percentage": 100,
                "minimumCartAmount": "500.00"
              },
              "subject": {
                "id": "55afe86b1e374",
                "class": "Ecom\\Order\\Model\\Shipping"
              }
            }
          ]
        },
        "dynamics": {
          "requestedArrivalAt": "2015-08-24T18:31:25+0000"
        },
        "klarna_invoice": {
          "pno": "410321-9202",
          "comment": "The order 34 created from subscription 1 at Wed, 22 Jul 2015 19:00:59 +0000, requested delivery at Wed, 26 Aug 2015 18:31:25 +0000"
        },
        "self": {
          "items": [
            {
              "self": {
                "instance": "base",
                "quantity": 2,
                "id": "55afe86b1eb64",
                "unitPrice": 1295.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 1619,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 1619,
                "totalTaxRate": 25,
                "totalTax": 647.6,
                "totalPrice": 2590.4,
                "totalPriceWithTax": 3238,
                "totalPriceWithDiscountTax": 3238,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "2",
                "sku": "104804001",
                "title": "Meadow Feast Lamb 2,5 Kg"
              }
            },
            {
              "self": {
                "instance": "base",
                "quantity": 3,
                "id": "55afe86b1ec60",
                "unitPrice": 623.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 779,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 779,
                "totalTaxRate": 25,
                "totalTax": 467.4,
                "totalPrice": 1869.6,
                "totalPriceWithTax": 2337,
                "totalPriceWithDiscountTax": 2337,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "3",
                "sku": "104804002",
                "title": "Meadow Feast Lamb 12 Kg"
              }
            }
          ],
          "discounts": [],
          "paymentHistory": [],
          "transactions": [],
          "shippingStatusHistory": [],
          "state": "subscription_cart",
          "id": "55afe86b08ebf07455728755afe86b08ec6120923817",
          "store": {
            "self": {
              "id": "55afe86b05ea0",
              "slug": "sv",
              "originId": 1,
              "name": "Sweden Store",
              "country": "SE",
              "locale": "sv_SE",
              "currency": "SEK"
            }
          },
          "orderNumber": "34",
          "currency": "SEK",
          "user": {
            "self": {
              "id": "55afe86b07e2a",
              "originId": 1,
              "firstName": "Sandra",
              "lastName": "Johansson",
              "username": "admin1",
              "email": "admin1@example.com",
              "ssn": "410321-9202"
            }
          },
          "shippingAddress": [],
          "billingAddress": {
            "self": {
              "id": "55afe86b1e447",
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700"
            }
          },
          "shipping": {
            "self": {
              "id": "55afe86b1e374",
              "price": 47.2,
              "taxes": [
                {
                  "self": {
                    "id": "rate-25",
                    "rate": 25
                  }
                }
              ],
              "totalTaxRate": 25,
              "totalTax": 0,
              "totalDiscount": -47.2,
              "totalDiscountWithTax": -59,
              "totalPriceWithTax": 59,
              "totalPriceWithDiscountTax": 0,
              "discounts": [
                {
                  "self": {
                    "id": "campaign-4",
                    "originId": 4,
                    "amount": -47.2,
                    "taxes": [
                      {
                        "self": {
                          "id": "rate-25",
                          "rate": 25,
                          "originId": 1,
                          "name": "Default"
                        }
                      }
                    ],
                    "totalTaxRate": 25,
                    "totalTax": -11.8,
                    "amountWithTax": -59,
                    "name": "Sweden free shipping",
                    "description": "Sweden free shipping",
                    "sku": "DISCOUNTSV4"
                  }
                }
              ],
              "originId": 1,
              "name": "Postpaket 1-2 dagar",
              "code": "Posten-P19",
              "sku": "SHIPPINGSVPosten-P19"
            }
          },
          "totalItemsPrice": 4460,
          "totalItemsPriceWithTax": 5575,
          "totalItemsDiscount": 0,
          "totalItemsDiscountWithTax": 0,
          "totalItemsTax": 1115,
          "totalItemsPriceWithDiscountTax": 5575,
          "totalShippingTax": 0,
          "totalShippingDiscount": -47.2,
          "totalShippingDiscountWithTax": -59,
          "totalShippingPriceWithDiscountTax": 0,
          "totalOrderDiscountTax": 0,
          "totalOrderDiscount": 0,
          "totalOrderDiscountWithTax": 0,
          "totalDiscount": -47.2,
          "totalDiscountWithTax": -59,
          "totalTax": 1115,
          "totalPriceWithTax": 5634,
          "totalPriceWithDiscountTax": 5575,
          "createdAt": "2015-07-22T19:00:59+0000",
          "updatedAt": "2015-07-22T19:00:59+0000"
        },
        "subscription": {
          "id": 1,
          "status_before_purchase": "active",
          "process_errors_before_purchase": "",
          "delivery_date": "2015-08-26T18:31:25+0000",
          "delivery_interval": "P0Y0M7DT00H00M00S",
          "delivery_interval_in_weeks": 1,
          "purchase_date": "2015-08-24T18:31:25+0000",
          "creditworthy_status": 1,
          "creditworthy_status_title": "unknown",
          "creditworthy_details": [],
          "creditworthy_checked_at": "",
          "delivery_date_next": "2015-09-02T18:31:25+0000"
        }
      },
      "diff": [
        {
          "op": "add",
          "path": "/_id",
          "value": "55afe86baf6e7bcb42cd748a"
        },
        {
          "op": "add",
          "path": "/campaign",
          "value": {
            "items_forecasts": [],
            "shipping_forecasts": [
              {
                "campaign": 4,
                "action_config": 7,
                "matched_rules": [
                  4
                ],
                "effect": {
                  "class": "Ecom\\Campaign\\Processor\\Effect\\FreeShipping",
                  "amount": 47.2,
                  "percentage": 100,
                  "minimumCartAmount": "500.00"
                },
                "subject": {
                  "id": "55afe86b1e374",
                  "class": "Ecom\\Order\\Model\\Shipping"
                }
              }
            ]
          }
        },
        {
          "op": "add",
          "path": "/dynamics",
          "value": {
            "requestedArrivalAt": "2015-08-24T18:31:25+0000"
          }
        },
        {
          "op": "add",
          "path": "/klarna_invoice",
          "value": {
            "pno": "410321-9202",
            "comment": "The order 34 created from subscription 1 at Wed, 22 Jul 2015 19:00:59 +0000, requested delivery at Wed, 26 Aug 2015 18:31:25 +0000"
          }
        },
        {
          "op": "add",
          "path": "/self",
          "value": {
            "items": [
              {
                "self": {
                  "instance": "base",
                  "quantity": 2,
                  "id": "55afe86b1eb64",
                  "unitPrice": 1295.2,
                  "taxes": [
                    {
                      "self": {
                        "id": "rate-25",
                        "rate": 25,
                        "originId": 1,
                        "name": "Default"
                      }
                    }
                  ],
                  "unitPriceWithTax": 1619,
                  "unitDiscount": 0,
                  "unitDiscountWithTax": 0,
                  "unitPriceWithDiscountTax": 1619,
                  "totalTaxRate": 25,
                  "totalTax": 647.6,
                  "totalPrice": 2590.4,
                  "totalPriceWithTax": 3238,
                  "totalPriceWithDiscountTax": 3238,
                  "totalDiscount": 0,
                  "totalDiscountWithTax": 0,
                  "discounts": [],
                  "originId": "2",
                  "sku": "104804001",
                  "title": "Meadow Feast Lamb 2,5 Kg"
                }
              },
              {
                "self": {
                  "instance": "base",
                  "quantity": 3,
                  "id": "55afe86b1ec60",
                  "unitPrice": 623.2,
                  "taxes": [
                    {
                      "self": {
                        "id": "rate-25",
                        "rate": 25,
                        "originId": 1,
                        "name": "Default"
                      }
                    }
                  ],
                  "unitPriceWithTax": 779,
                  "unitDiscount": 0,
                  "unitDiscountWithTax": 0,
                  "unitPriceWithDiscountTax": 779,
                  "totalTaxRate": 25,
                  "totalTax": 467.4,
                  "totalPrice": 1869.6,
                  "totalPriceWithTax": 2337,
                  "totalPriceWithDiscountTax": 2337,
                  "totalDiscount": 0,
                  "totalDiscountWithTax": 0,
                  "discounts": [],
                  "originId": "3",
                  "sku": "104804002",
                  "title": "Meadow Feast Lamb 12 Kg"
                }
              }
            ],
            "discounts": [],
            "paymentHistory": [],
            "transactions": [],
            "shippingStatusHistory": [],
            "state": "subscription_cart",
            "id": "55afe86b08ebf07455728755afe86b08ec6120923817",
            "store": {
              "self": {
                "id": "55afe86b05ea0",
                "slug": "sv",
                "originId": 1,
                "name": "Sweden Store",
                "country": "SE",
                "locale": "sv_SE",
                "currency": "SEK"
              }
            },
            "orderNumber": "34",
            "currency": "SEK",
            "user": {
              "self": {
                "id": "55afe86b07e2a",
                "originId": 1,
                "firstName": "Sandra",
                "lastName": "Johansson",
                "username": "admin1",
                "email": "admin1@example.com",
                "ssn": "410321-9202"
              }
            },
            "shippingAddress": [],
            "billingAddress": {
              "self": {
                "id": "55afe86b1e447",
                "originId": 1,
                "country": "SE",
                "phone": "0733-134929",
                "city": "Boras",
                "street": "Borasvagen 1",
                "zip": "51700"
              }
            },
            "shipping": {
              "self": {
                "id": "55afe86b1e374",
                "price": 47.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25
                    }
                  }
                ],
                "totalTaxRate": 25,
                "totalTax": 0,
                "totalDiscount": -47.2,
                "totalDiscountWithTax": -59,
                "totalPriceWithTax": 59,
                "totalPriceWithDiscountTax": 0,
                "discounts": [
                  {
                    "self": {
                      "id": "campaign-4",
                      "originId": 4,
                      "amount": -47.2,
                      "taxes": [
                        {
                          "self": {
                            "id": "rate-25",
                            "rate": 25,
                            "originId": 1,
                            "name": "Default"
                          }
                        }
                      ],
                      "totalTaxRate": 25,
                      "totalTax": -11.8,
                      "amountWithTax": -59,
                      "name": "Sweden free shipping",
                      "description": "Sweden free shipping",
                      "sku": "DISCOUNTSV4"
                    }
                  }
                ],
                "originId": 1,
                "name": "Postpaket 1-2 dagar",
                "code": "Posten-P19",
                "sku": "SHIPPINGSVPosten-P19"
              }
            },
            "totalItemsPrice": 4460,
            "totalItemsPriceWithTax": 5575,
            "totalItemsDiscount": 0,
            "totalItemsDiscountWithTax": 0,
            "totalItemsTax": 1115,
            "totalItemsPriceWithDiscountTax": 5575,
            "totalShippingTax": 0,
            "totalShippingDiscount": -47.2,
            "totalShippingDiscountWithTax": -59,
            "totalShippingPriceWithDiscountTax": 0,
            "totalOrderDiscountTax": 0,
            "totalOrderDiscount": 0,
            "totalOrderDiscountWithTax": 0,
            "totalDiscount": -47.2,
            "totalDiscountWithTax": -59,
            "totalTax": 1115,
            "totalPriceWithTax": 5634,
            "totalPriceWithDiscountTax": 5575,
            "createdAt": "2015-07-22T19:00:59+0000",
            "updatedAt": "2015-07-22T19:00:59+0000"
          }
        },
        {
          "op": "add",
          "path": "/subscription",
          "value": {
            "id": 1,
            "status_before_purchase": "active",
            "process_errors_before_purchase": "",
            "delivery_date": "2015-08-26T18:31:25+0000",
            "delivery_interval": "P0Y0M7DT00H00M00S",
            "delivery_interval_in_weeks": 1,
            "purchase_date": "2015-08-24T18:31:25+0000",
            "creditworthy_status": 1,
            "creditworthy_status_title": "unknown",
            "creditworthy_details": [],
            "creditworthy_checked_at": "",
            "delivery_date_next": "2015-09-02T18:31:25+0000"
          }
        }
      ],
      "meta": {
        "date": "2015-07-22T19:00:59+0000",
        "message": null,
        "cli": {
          "argv": "./app/console ecommerce:subscription:create-carts --subscription=1",
          "whoami": "vagrant",
          "ssh": "10.0.2.2 63119 10.0.2.15 22"
        }
      }
    },
    {
      "data": {
        "_id": "55afe86baf6e7bcb42cd748a",
        "campaign": {
          "items_forecasts": [],
          "shipping_forecasts": [
            {
              "campaign": 4,
              "action_config": 7,
              "matched_rules": [
                4
              ],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\FreeShipping",
                "amount": 47.2,
                "percentage": 100,
                "minimumCartAmount": "500.00"
              },
              "subject": {
                "id": "55afe86b1e374",
                "class": "Ecom\\Order\\Model\\Shipping"
              }
            }
          ]
        },
        "dynamics": {
          "requestedArrivalAt": "2015-08-24T18:31:25+0000"
        },
        "klarna_invoice": {
          "pno": "410321-9202",
          "comment": "The order 34 created from subscription 1 at Wed, 22 Jul 2015 19:00:59 +0000, requested delivery at Wed, 26 Aug 2015 18:31:25 +0000"
        },
        "self": {
          "items": [
            {
              "self": {
                "instance": "base",
                "quantity": 2,
                "id": "55afe86b1eb64",
                "unitPrice": 1295.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 1619,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 1619,
                "totalTaxRate": 25,
                "totalTax": 647.6,
                "totalPrice": 2590.4,
                "totalPriceWithTax": 3238,
                "totalPriceWithDiscountTax": 3238,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "2",
                "sku": "104804001",
                "title": "Meadow Feast Lamb 2,5 Kg"
              }
            },
            {
              "self": {
                "instance": "base",
                "quantity": 3,
                "id": "55afe86b1ec60",
                "unitPrice": 623.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 779,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 779,
                "totalTaxRate": 25,
                "totalTax": 467.4,
                "totalPrice": 1869.6,
                "totalPriceWithTax": 2337,
                "totalPriceWithDiscountTax": 2337,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "3",
                "sku": "104804002",
                "title": "Meadow Feast Lamb 12 Kg"
              }
            }
          ],
          "discounts": [],
          "paymentHistory": [],
          "transactions": [],
          "shippingStatusHistory": [],
          "state": "subscription_cart",
          "id": "55afe86b08ebf07455728755afe86b08ec6120923817",
          "store": {
            "self": {
              "id": "55afe86b05ea0",
              "slug": "sv",
              "originId": 1,
              "name": "Sweden Store",
              "country": "SE",
              "locale": "sv_SE",
              "currency": "SEK"
            }
          },
          "orderNumber": "34",
          "currency": "SEK",
          "user": {
            "self": {
              "id": "55afe86b07e2a",
              "originId": 1,
              "firstName": "Sandra",
              "lastName": "Johansson",
              "username": "admin1",
              "email": "admin1@example.com",
              "ssn": "410321-9202"
            }
          },
          "shippingAddress": {
            "self": {
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700"
            }
          },
          "billingAddress": {
            "self": {
              "id": "55afe86b1e447",
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700"
            }
          },
          "shipping": {
            "self": {
              "id": "55afe86b1e374",
              "price": 47.2,
              "taxes": [
                {
                  "self": {
                    "id": "rate-25",
                    "rate": 25
                  }
                }
              ],
              "totalTaxRate": 25,
              "totalTax": 0,
              "totalDiscount": -47.2,
              "totalDiscountWithTax": -59,
              "totalPriceWithTax": 59,
              "totalPriceWithDiscountTax": 0,
              "discounts": [
                {
                  "self": {
                    "id": "campaign-4",
                    "originId": 4,
                    "amount": -47.2,
                    "taxes": [
                      {
                        "self": {
                          "id": "rate-25",
                          "rate": 25,
                          "originId": 1,
                          "name": "Default"
                        }
                      }
                    ],
                    "totalTaxRate": 25,
                    "totalTax": -11.8,
                    "amountWithTax": -59,
                    "name": "Sweden free shipping",
                    "description": "Sweden free shipping",
                    "sku": "DISCOUNTSV4"
                  }
                }
              ],
              "originId": 1,
              "name": "Postpaket 1-2 dagar",
              "code": "Posten-P19",
              "sku": "SHIPPINGSVPosten-P19"
            }
          },
          "totalItemsPrice": 4460,
          "totalItemsPriceWithTax": 5575,
          "totalItemsDiscount": 0,
          "totalItemsDiscountWithTax": 0,
          "totalItemsTax": 1115,
          "totalItemsPriceWithDiscountTax": 5575,
          "totalShippingTax": 0,
          "totalShippingDiscount": -47.2,
          "totalShippingDiscountWithTax": -59,
          "totalShippingPriceWithDiscountTax": 0,
          "totalOrderDiscountTax": 0,
          "totalOrderDiscount": 0,
          "totalOrderDiscountWithTax": 0,
          "totalDiscount": -47.2,
          "totalDiscountWithTax": -59,
          "totalTax": 1115,
          "totalPriceWithTax": 5634,
          "totalPriceWithDiscountTax": 5575,
          "createdAt": "2015-07-22T19:00:59+0000",
          "updatedAt": "2015-07-22T19:04:02+0000"
        },
        "subscription": {
          "id": 1,
          "status_before_purchase": "active",
          "process_errors_before_purchase": "",
          "delivery_date": "2015-08-26T18:31:25+0000",
          "delivery_interval": "P0Y0M7DT00H00M00S",
          "delivery_interval_in_weeks": 1,
          "purchase_date": "2015-08-24T18:31:25+0000",
          "creditworthy_status": 1,
          "creditworthy_status_title": "unknown",
          "creditworthy_details": [],
          "creditworthy_checked_at": "",
          "delivery_date_next": "2015-09-02T18:31:25+0000"
        }
      },
      "diff": [
        {
          "op": "replace",
          "path": "/self/shippingAddress",
          "value": {
            "self": {
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700"
            }
          }
        },
        {
          "op": "replace",
          "path": "/self/updatedAt",
          "value": "2015-07-22T19:04:02+0000"
        }
      ],
      "meta": {
        "date": "2015-07-22T19:04:02+0000",
        "message": null,
        "user": {
          "id": 1,
          "name": "Sandra Johansson",
          "email": "admin1@example.com",
          "createdAt": "2015-07-22T18:31:16+0000",
          "gender": null,
          "roles": [
            "ROLE_ADMIN",
            "ROLE_USER"
          ]
        },
        "http_request": {
          "uri": "/admin/order/55afe86b08ebf07455728755afe86b08ec6120923817/edit/shipping-address/origin",
          "method": "POST",
          "clientIp": "192.168.33.1",
          "clientIps": [
            "192.168.33.1"
          ],
          "contentType": "form",
          "locale": "sv",
          "defaultLocale": "sv",
          "serverIp": "192.168.33.99"
        }
      }
    },
    {
      "data": {
        "_id": "55afe86baf6e7bcb42cd748a",
        "campaign": {
          "items_forecasts": [],
          "shipping_forecasts": [
            {
              "campaign": 4,
              "action_config": 7,
              "matched_rules": [
                4
              ],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\FreeShipping",
                "amount": 47.2,
                "percentage": 100,
                "minimumCartAmount": "500.00"
              },
              "subject": {
                "id": "55afe86b1e374",
                "class": "Ecom\\Order\\Model\\Shipping"
              }
            }
          ]
        },
        "dynamics": {
          "requestedArrivalAt": "2015-08-24T18:31:25+0000"
        },
        "klarna_invoice": {
          "pno": "410321-9202",
          "comment": "The order 34 created from subscription 1 at Wed, 22 Jul 2015 19:00:59 +0000, requested delivery at Wed, 26 Aug 2015 18:31:25 +0000"
        },
        "self": {
          "items": [
            {
              "self": {
                "instance": "base",
                "quantity": 2,
                "id": "55afe86b1eb64",
                "unitPrice": 1295.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 1619,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 1619,
                "totalTaxRate": 25,
                "totalTax": 647.6,
                "totalPrice": 2590.4,
                "totalPriceWithTax": 3238,
                "totalPriceWithDiscountTax": 3238,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "2",
                "sku": "104804001",
                "title": "Meadow Feast Lamb 2,5 Kg"
              }
            },
            {
              "self": {
                "instance": "base",
                "quantity": 3,
                "id": "55afe86b1ec60",
                "unitPrice": 623.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 779,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 779,
                "totalTaxRate": 25,
                "totalTax": 467.4,
                "totalPrice": 1869.6,
                "totalPriceWithTax": 2337,
                "totalPriceWithDiscountTax": 2337,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "3",
                "sku": "104804002",
                "title": "Meadow Feast Lamb 12 Kg"
              }
            }
          ],
          "discounts": [],
          "paymentHistory": [],
          "transactions": [],
          "shippingStatusHistory": [],
          "state": "subscription_cart",
          "id": "55afe86b08ebf07455728755afe86b08ec6120923817",
          "store": {
            "self": {
              "id": "55afe86b05ea0",
              "slug": "sv",
              "originId": 1,
              "name": "Sweden Store",
              "country": "SE",
              "locale": "sv_SE",
              "currency": "SEK"
            }
          },
          "orderNumber": "34",
          "currency": "SEK",
          "user": {
            "self": {
              "id": "55afe86b07e2a",
              "originId": 1,
              "firstName": "Sandra",
              "lastName": "Johansson",
              "username": "admin1",
              "email": "admin1@example.com",
              "ssn": "410321-9202"
            }
          },
          "shippingAddress": {
            "self": {
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700"
            }
          },
          "billingAddress": {
            "self": {
              "id": "55afe86b1e447",
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700"
            }
          },
          "shipping": {
            "self": {
              "id": "55afe86b1e374",
              "price": 47.2,
              "taxes": [
                {
                  "self": {
                    "id": "rate-25",
                    "rate": 25
                  }
                }
              ],
              "totalTaxRate": 25,
              "totalTax": 0,
              "totalDiscount": -47.2,
              "totalDiscountWithTax": -59,
              "totalPriceWithTax": 59,
              "totalPriceWithDiscountTax": 0,
              "discounts": [
                {
                  "self": {
                    "id": "campaign-4",
                    "originId": 4,
                    "amount": -47.2,
                    "taxes": [
                      {
                        "self": {
                          "id": "rate-25",
                          "rate": 25,
                          "originId": 1,
                          "name": "Default"
                        }
                      }
                    ],
                    "totalTaxRate": 25,
                    "totalTax": -11.8,
                    "amountWithTax": -59,
                    "name": "Sweden free shipping",
                    "description": "Sweden free shipping",
                    "sku": "DISCOUNTSV4"
                  }
                }
              ],
              "originId": 1,
              "name": "Postpaket 1-2 dagar",
              "code": "Posten-P19",
              "sku": "SHIPPINGSVPosten-P19"
            }
          },
          "totalItemsPrice": 4460,
          "totalItemsPriceWithTax": 5575,
          "totalItemsDiscount": 0,
          "totalItemsDiscountWithTax": 0,
          "totalItemsTax": 1115,
          "totalItemsPriceWithDiscountTax": 5575,
          "totalShippingTax": 0,
          "totalShippingDiscount": -47.2,
          "totalShippingDiscountWithTax": -59,
          "totalShippingPriceWithDiscountTax": 0,
          "totalOrderDiscountTax": 0,
          "totalOrderDiscount": 0,
          "totalOrderDiscountWithTax": 0,
          "totalDiscount": -47.2,
          "totalDiscountWithTax": -59,
          "totalTax": 1115,
          "totalPriceWithTax": 5634,
          "totalPriceWithDiscountTax": 5575,
          "createdAt": "2015-07-22T19:00:59+0000",
          "updatedAt": "2015-07-22T19:04:09+0000"
        },
        "subscription": {
          "id": 1,
          "status_before_purchase": "active",
          "process_errors_before_purchase": "",
          "delivery_date": "2015-08-26T18:31:25+0000",
          "delivery_interval": "P0Y0M7DT00H00M00S",
          "delivery_interval_in_weeks": 1,
          "purchase_date": "2015-08-24T18:31:25+0000",
          "creditworthy_status": 1,
          "creditworthy_status_title": "unknown",
          "creditworthy_details": [],
          "creditworthy_checked_at": "",
          "delivery_date_next": "2015-09-02T18:31:25+0000"
        }
      },
      "diff": [
        {
          "op": "replace",
          "path": "/self/updatedAt",
          "value": "2015-07-22T19:04:09+0000"
        }
      ],
      "meta": {
        "date": "2015-07-22T19:04:09+0000",
        "message": null,
        "user": {
          "id": 1,
          "name": "Sandra Johansson",
          "email": "admin1@example.com",
          "createdAt": "2015-07-22T18:31:16+0000",
          "gender": null,
          "roles": [
            "ROLE_ADMIN",
            "ROLE_USER"
          ]
        },
        "http_request": {
          "uri": "/admin/order/55afe86b08ebf07455728755afe86b08ec6120923817/edit/shipping-address/origin",
          "method": "POST",
          "clientIp": "192.168.33.1",
          "clientIps": [
            "192.168.33.1"
          ],
          "contentType": "form",
          "locale": "sv",
          "defaultLocale": "sv",
          "serverIp": "192.168.33.99"
        }
      }
    },
    {
      "data": {
        "_id": "55afe86baf6e7bcb42cd748a",
        "campaign": {
          "items_forecasts": [],
          "shipping_forecasts": [
            {
              "campaign": 4,
              "action_config": 7,
              "matched_rules": [
                4
              ],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\FreeShipping",
                "amount": 47.2,
                "percentage": 100,
                "minimumCartAmount": "500.00"
              },
              "subject": {
                "id": "55afe86b1e374",
                "class": "Ecom\\Order\\Model\\Shipping"
              }
            }
          ],
          "coupon_code_forecasts": [
            {
              "campaign": 6,
              "action_config": 9,
              "matched_rules": [
                6
              ],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\Void"
              },
              "subject": {
                "id": "55afe93aa0f31",
                "class": "Ecom\\Order\\Model\\CouponCode"
              }
            }
          ],
          "coupon_code_sub_forecasts": [
            {
              "campaign": 6,
              "action_config": null,
              "matched_rules": [],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\Discount",
                "amount": 2787.5,
                "percentage": 50
              },
              "subject": {
                "id": "55afe93aa0f31",
                "class": "Ecom\\Order\\Model\\CouponCode"
              }
            }
          ]
        },
        "dynamics": {
          "requestedArrivalAt": "2015-08-24T18:31:25+0000"
        },
        "klarna_invoice": {
          "pno": "410321-9202",
          "comment": "The order 34 created from subscription 1 at Wed, 22 Jul 2015 19:00:59 +0000, requested delivery at Wed, 26 Aug 2015 18:31:25 +0000"
        },
        "self": {
          "items": [
            {
              "self": {
                "instance": "base",
                "quantity": 2,
                "id": "55afe86b1eb64",
                "unitPrice": 1295.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 1619,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 1619,
                "totalTaxRate": 25,
                "totalTax": 647.6,
                "totalPrice": 2590.4,
                "totalPriceWithTax": 3238,
                "totalPriceWithDiscountTax": 3238,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "2",
                "sku": "104804001",
                "title": "Meadow Feast Lamb 2,5 Kg"
              }
            },
            {
              "self": {
                "instance": "base",
                "quantity": 3,
                "id": "55afe86b1ec60",
                "unitPrice": 623.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 779,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 779,
                "totalTaxRate": 25,
                "totalTax": 467.4,
                "totalPrice": 1869.6,
                "totalPriceWithTax": 2337,
                "totalPriceWithDiscountTax": 2337,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "3",
                "sku": "104804002",
                "title": "Meadow Feast Lamb 12 Kg"
              }
            }
          ],
          "discounts": [],
          "paymentHistory": [],
          "transactions": [],
          "shippingStatusHistory": [],
          "state": "subscription_cart",
          "id": "55afe86b08ebf07455728755afe86b08ec6120923817",
          "store": {
            "self": {
              "id": "55afe86b05ea0",
              "slug": "sv",
              "originId": 1,
              "name": "Sweden Store",
              "country": "SE",
              "locale": "sv_SE",
              "currency": "SEK"
            }
          },
          "orderNumber": "34",
          "currency": "SEK",
          "user": {
            "self": {
              "id": "55afe86b07e2a",
              "originId": 1,
              "firstName": "Sandra",
              "lastName": "Johansson",
              "username": "admin1",
              "email": "admin1@example.com",
              "ssn": "410321-9202"
            }
          },
          "shippingAddress": {
            "self": {
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700",
              "id": "55afe93ad47d5"
            }
          },
          "billingAddress": {
            "self": {
              "id": "55afe86b1e447",
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700"
            }
          },
          "shipping": {
            "self": {
              "id": "55afe86b1e374",
              "price": 47.2,
              "taxes": [
                {
                  "self": {
                    "id": "rate-25",
                    "rate": 25
                  }
                }
              ],
              "totalTaxRate": 25,
              "totalTax": 0,
              "totalDiscount": -47.2,
              "totalDiscountWithTax": -59,
              "totalPriceWithTax": 59,
              "totalPriceWithDiscountTax": 0,
              "discounts": [
                {
                  "self": {
                    "id": "campaign-4",
                    "originId": 4,
                    "amount": -47.2,
                    "taxes": [
                      {
                        "self": {
                          "id": "rate-25",
                          "rate": 25,
                          "originId": 1,
                          "name": "Default"
                        }
                      }
                    ],
                    "totalTaxRate": 25,
                    "totalTax": -11.8,
                    "amountWithTax": -59,
                    "name": "Sweden free shipping",
                    "description": "Sweden free shipping",
                    "sku": "DISCOUNTSV4"
                  }
                }
              ],
              "originId": 1,
              "name": "Postpaket 1-2 dagar",
              "code": "Posten-P19",
              "sku": "SHIPPINGSVPosten-P19"
            }
          },
          "totalItemsPrice": 4460,
          "totalItemsPriceWithTax": 5575,
          "totalItemsDiscount": 0,
          "totalItemsDiscountWithTax": 0,
          "totalItemsTax": 1115,
          "totalItemsPriceWithDiscountTax": 5575,
          "totalShippingTax": 0,
          "totalShippingDiscount": -47.2,
          "totalShippingDiscountWithTax": -59,
          "totalShippingPriceWithDiscountTax": 0,
          "totalOrderDiscountTax": 0,
          "totalOrderDiscount": 0,
          "totalOrderDiscountWithTax": 0,
          "totalDiscount": -2834.7,
          "totalDiscountWithTax": -3543.38,
          "totalTax": 418.12,
          "totalPriceWithTax": 5634,
          "totalPriceWithDiscountTax": 2090.62,
          "createdAt": "2015-07-22T19:00:59+0000",
          "updatedAt": "2015-07-22T19:04:26+0000",
          "couponCode": {
            "self": {
              "id": "55afe93aa0f31",
              "discounts": [
                {
                  "self": {
                    "id": "campaign-6",
                    "originId": 6,
                    "amount": -2787.5,
                    "taxes": [
                      {
                        "self": {
                          "id": "rate-25",
                          "rate": 25,
                          "originId": 1,
                          "name": "Default"
                        }
                      }
                    ],
                    "totalTaxRate": 25,
                    "totalTax": -696.88,
                    "amountWithTax": -3484.38,
                    "name": "Coupon Code",
                    "description": "Coupon Code",
                    "sku": "DISCOUNTSV6"
                  }
                }
              ],
              "totalTaxRate": 25,
              "totalTax": -696.88,
              "totalDiscount": -2787.5,
              "totalDiscountWithTax": -3484.38,
              "taxes": [
                {
                  "self": {
                    "id": "rate-25",
                    "rate": 25
                  }
                }
              ],
              "originId": 2,
              "code": "subscription",
              "name": "COUPONCODESV1"
            }
          }
        },
        "subscription": {
          "id": 1,
          "status_before_purchase": "active",
          "process_errors_before_purchase": "",
          "delivery_date": "2015-08-26T18:31:25+0000",
          "delivery_interval": "P0Y0M7DT00H00M00S",
          "delivery_interval_in_weeks": 1,
          "purchase_date": "2015-08-24T18:31:25+0000",
          "creditworthy_status": 1,
          "creditworthy_status_title": "unknown",
          "creditworthy_details": [],
          "creditworthy_checked_at": "",
          "delivery_date_next": "2015-09-02T18:31:25+0000"
        }
      },
      "diff": [
        {
          "op": "add",
          "path": "/campaign/coupon_code_forecasts",
          "value": [
            {
              "campaign": 6,
              "action_config": 9,
              "matched_rules": [
                6
              ],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\Void"
              },
              "subject": {
                "id": "55afe93aa0f31",
                "class": "Ecom\\Order\\Model\\CouponCode"
              }
            }
          ]
        },
        {
          "op": "add",
          "path": "/campaign/coupon_code_sub_forecasts",
          "value": [
            {
              "campaign": 6,
              "action_config": null,
              "matched_rules": [],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\Discount",
                "amount": 2787.5,
                "percentage": 50
              },
              "subject": {
                "id": "55afe93aa0f31",
                "class": "Ecom\\Order\\Model\\CouponCode"
              }
            }
          ]
        },
        {
          "op": "add",
          "path": "/self/couponCode",
          "value": {
            "self": {
              "id": "55afe93aa0f31",
              "discounts": [
                {
                  "self": {
                    "id": "campaign-6",
                    "originId": 6,
                    "amount": -2787.5,
                    "taxes": [
                      {
                        "self": {
                          "id": "rate-25",
                          "rate": 25,
                          "originId": 1,
                          "name": "Default"
                        }
                      }
                    ],
                    "totalTaxRate": 25,
                    "totalTax": -696.88,
                    "amountWithTax": -3484.38,
                    "name": "Coupon Code",
                    "description": "Coupon Code",
                    "sku": "DISCOUNTSV6"
                  }
                }
              ],
              "totalTaxRate": 25,
              "totalTax": -696.88,
              "totalDiscount": -2787.5,
              "totalDiscountWithTax": -3484.38,
              "taxes": [
                {
                  "self": {
                    "id": "rate-25",
                    "rate": 25
                  }
                }
              ],
              "originId": 2,
              "code": "subscription",
              "name": "COUPONCODESV1"
            }
          }
        },
        {
          "op": "add",
          "path": "/self/shippingAddress/self/id",
          "value": "55afe93ad47d5"
        },
        {
          "op": "replace",
          "path": "/self/totalDiscount",
          "value": -2834.7
        },
        {
          "op": "replace",
          "path": "/self/totalDiscountWithTax",
          "value": -3543.38
        },
        {
          "op": "replace",
          "path": "/self/totalPriceWithDiscountTax",
          "value": 2090.62
        },
        {
          "op": "replace",
          "path": "/self/totalTax",
          "value": 418.12
        },
        {
          "op": "replace",
          "path": "/self/updatedAt",
          "value": "2015-07-22T19:04:26+0000"
        }
      ],
      "meta": {
        "date": "2015-07-22T19:04:26+0000",
        "message": null,
        "user": {
          "id": 1,
          "name": "Sandra Johansson",
          "email": "admin1@example.com",
          "createdAt": "2015-07-22T18:31:16+0000",
          "gender": null,
          "roles": [
            "ROLE_ADMIN",
            "ROLE_USER"
          ]
        },
        "http_request": {
          "uri": "/admin/order/55afe86b08ebf07455728755afe86b08ec6120923817/edit/couponCode",
          "method": "POST",
          "clientIp": "192.168.33.1",
          "clientIps": [
            "192.168.33.1"
          ],
          "contentType": "form",
          "locale": "sv",
          "defaultLocale": "sv",
          "serverIp": "192.168.33.99"
        }
      }
    },
    {
      "data": {
        "_id": "55afe86baf6e7bcb42cd748a",
        "campaign": {
          "items_forecasts": [],
          "shipping_forecasts": [
            {
              "campaign": 4,
              "action_config": 7,
              "matched_rules": [
                4
              ],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\FreeShipping",
                "amount": 47.2,
                "percentage": 100,
                "minimumCartAmount": "500.00"
              },
              "subject": {
                "id": "55afe86b1e374",
                "class": "Ecom\\Order\\Model\\Shipping"
              }
            }
          ],
          "coupon_code_forecasts": [
            {
              "campaign": 6,
              "action_config": 9,
              "matched_rules": [
                6
              ],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\Void"
              },
              "subject": {
                "id": "55afe93aa0f31",
                "class": "Ecom\\Order\\Model\\CouponCode"
              }
            }
          ],
          "coupon_code_sub_forecasts": [
            {
              "campaign": 6,
              "action_config": null,
              "matched_rules": [],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\Discount",
                "amount": 2787.5,
                "percentage": 50
              },
              "subject": {
                "id": "55afe93aa0f31",
                "class": "Ecom\\Order\\Model\\CouponCode"
              }
            }
          ]
        },
        "dynamics": {
          "requestedArrivalAt": "2015-08-24T18:31:25+0000"
        },
        "klarna_invoice": {
          "pno": "410321-9202",
          "comment": "The order 34 created from subscription 1 at Wed, 22 Jul 2015 19:00:59 +0000, requested delivery at Wed, 26 Aug 2015 18:31:25 +0000"
        },
        "self": {
          "items": [
            {
              "self": {
                "instance": "base",
                "quantity": 2,
                "id": "55afe86b1eb64",
                "unitPrice": 1295.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 1619,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 1619,
                "totalTaxRate": 25,
                "totalTax": 647.6,
                "totalPrice": 2590.4,
                "totalPriceWithTax": 3238,
                "totalPriceWithDiscountTax": 3238,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "2",
                "sku": "104804001",
                "title": "Meadow Feast Lamb 2,5 Kg"
              }
            },
            {
              "self": {
                "instance": "base",
                "quantity": 3,
                "id": "55afe86b1ec60",
                "unitPrice": 623.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 779,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 779,
                "totalTaxRate": 25,
                "totalTax": 467.4,
                "totalPrice": 1869.6,
                "totalPriceWithTax": 2337,
                "totalPriceWithDiscountTax": 2337,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "3",
                "sku": "104804002",
                "title": "Meadow Feast Lamb 12 Kg"
              }
            }
          ],
          "discounts": [],
          "paymentHistory": [
            {
              "self": {
                "id": "55afe94aee18c",
                "name": "sv_klarna_invoice_risk",
                "context": [
                  {
                    "file": "/vagrant/src/Ecommerce/CommonBundle/Command/PurchaseCartsSubscriptionCommand.php",
                    "line": 156,
                    "function": "create",
                    "class": "Ecom\\Order\\Model\\Payment",
                    "type": "::"
                  },
                  {
                    "file": "/vagrant/src/Ecom/Order/Storage/OrderNewStorage.php",
                    "line": 151,
                    "function": "Ecommerce\\CommonBundle\\Command\\{closure}",
                    "class": "Ecommerce\\CommonBundle\\Command\\PurchaseCartsSubscriptionCommand",
                    "type": "->"
                  },
                  {
                    "file": "/vagrant/src/Ecommerce/CommonBundle/Command/PurchaseCartsSubscriptionCommand.php",
                    "line": 223,
                    "function": "saveOrder",
                    "class": "Ecom\\Order\\Storage\\OrderNewStorage",
                    "type": "->"
                  },
                  {
                    "file": "/vagrant/src/Ecommerce/CommonBundle/Command/PurchaseCartsSubscriptionCommand.php",
                    "line": 108,
                    "function": "processSingle",
                    "class": "Ecommerce\\CommonBundle\\Command\\PurchaseCartsSubscriptionCommand",
                    "type": "->"
                  },
                  {
                    "file": "/vagrant/vendor/symfony/symfony/src/Symfony/Component/Console/Command/Command.php",
                    "line": 257,
                    "function": "execute",
                    "class": "Ecommerce\\CommonBundle\\Command\\PurchaseCartsSubscriptionCommand",
                    "type": "->"
                  }
                ],
                "date": "2015-07-22T19:04:42+0000",
                "status": "new",
                "details": []
              }
            }
          ],
          "transactions": [],
          "shippingStatusHistory": [],
          "state": "order",
          "id": "55afe86b08ebf07455728755afe86b08ec6120923817",
          "store": {
            "self": {
              "id": "55afe86b05ea0",
              "slug": "sv",
              "originId": 1,
              "name": "Sweden Store",
              "country": "SE",
              "locale": "sv_SE",
              "currency": "SEK"
            }
          },
          "orderNumber": "34",
          "currency": "SEK",
          "user": {
            "self": {
              "id": "55afe86b07e2a",
              "originId": 1,
              "firstName": "Sandra",
              "lastName": "Johansson",
              "username": "admin1",
              "email": "admin1@example.com",
              "ssn": "410321-9202"
            }
          },
          "shippingAddress": {
            "self": {
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700",
              "id": "55afe93ad47d5"
            }
          },
          "billingAddress": {
            "self": {
              "id": "55afe86b1e447",
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700"
            }
          },
          "shipping": {
            "self": {
              "id": "55afe86b1e374",
              "price": 47.2,
              "taxes": [
                {
                  "self": {
                    "id": "rate-25",
                    "rate": 25
                  }
                }
              ],
              "totalTaxRate": 25,
              "totalTax": 0,
              "totalDiscount": -47.2,
              "totalDiscountWithTax": -59,
              "totalPriceWithTax": 59,
              "totalPriceWithDiscountTax": 0,
              "discounts": [
                {
                  "self": {
                    "id": "campaign-4",
                    "originId": 4,
                    "amount": -47.2,
                    "taxes": [
                      {
                        "self": {
                          "id": "rate-25",
                          "rate": 25,
                          "originId": 1,
                          "name": "Default"
                        }
                      }
                    ],
                    "totalTaxRate": 25,
                    "totalTax": -11.8,
                    "amountWithTax": -59,
                    "name": "Sweden free shipping",
                    "description": "Sweden free shipping",
                    "sku": "DISCOUNTSV4"
                  }
                }
              ],
              "originId": 1,
              "name": "Postpaket 1-2 dagar",
              "code": "Posten-P19",
              "sku": "SHIPPINGSVPosten-P19"
            }
          },
          "totalItemsPrice": 4460,
          "totalItemsPriceWithTax": 5575,
          "totalItemsDiscount": 0,
          "totalItemsDiscountWithTax": 0,
          "totalItemsTax": 1115,
          "totalItemsPriceWithDiscountTax": 5575,
          "totalShippingTax": 0,
          "totalShippingDiscount": -47.2,
          "totalShippingDiscountWithTax": -59,
          "totalShippingPriceWithDiscountTax": 0,
          "totalOrderDiscountTax": 0,
          "totalOrderDiscount": 0,
          "totalOrderDiscountWithTax": 0,
          "totalDiscount": -2834.7,
          "totalDiscountWithTax": -3543.38,
          "totalTax": 418.12,
          "totalPriceWithTax": 5634,
          "totalPriceWithDiscountTax": 2090.62,
          "createdAt": "2015-07-22T19:00:59+0000",
          "updatedAt": "2015-07-22T19:04:44+0000",
          "couponCode": {
            "self": {
              "id": "55afe93aa0f31",
              "discounts": [
                {
                  "self": {
                    "id": "campaign-6",
                    "originId": 6,
                    "amount": -2787.5,
                    "taxes": [
                      {
                        "self": {
                          "id": "rate-25",
                          "rate": 25,
                          "originId": 1,
                          "name": "Default"
                        }
                      }
                    ],
                    "totalTaxRate": 25,
                    "totalTax": -696.88,
                    "amountWithTax": -3484.38,
                    "name": "Coupon Code",
                    "description": "Coupon Code",
                    "sku": "DISCOUNTSV6"
                  }
                }
              ],
              "totalTaxRate": 25,
              "totalTax": -696.88,
              "totalDiscount": -2787.5,
              "totalDiscountWithTax": -3484.38,
              "taxes": [
                {
                  "self": {
                    "id": "rate-25",
                    "rate": 25
                  }
                }
              ],
              "originId": 2,
              "code": "subscription",
              "name": "COUPONCODESV1"
            }
          },
          "payment": {
            "self": {
              "id": "55afe94b31c50",
              "name": "sv_klarna_invoice_risk",
              "context": [
                {
                  "file": "/vagrant/src/Ecom/Order/Model/Payment.php",
                  "line": 199,
                  "function": "create",
                  "class": "Ecom\\Order\\Model\\Payment",
                  "type": "::"
                },
                {
                  "file": "/vagrant/src/Ecommerce/PaymentBundle/Payum/Klarna/Invoice/Action/AuthorizeOrderWithRiskAction.php",
                  "line": 29,
                  "function": "copy",
                  "class": "Ecom\\Order\\Model\\Payment",
                  "type": "::"
                },
                {
                  "file": "/vagrant/vendor/payum/payum/src/Payum/Core/Gateway.php",
                  "line": 107,
                  "function": "execute",
                  "class": "Ecommerce\\PaymentBundle\\Payum\\Klarna\\Invoice\\Action\\AuthorizeOrderWithRiskAction",
                  "type": "->"
                },
                {
                  "file": "/vagrant/src/Ecommerce/CommonBundle/Subscription/Command/PurchaseSubscriptionOrderCommand.php",
                  "line": 75,
                  "function": "execute",
                  "class": "Payum\\Core\\Gateway",
                  "type": "->"
                },
                {
                  "file": "/vagrant/src/Ecommerce/CommonBundle/Subscription/Command/PurchaseSubscriptionOrderCommand.php",
                  "line": 61,
                  "function": "doPurchase",
                  "class": "Ecommerce\\CommonBundle\\Subscription\\Command\\PurchaseSubscriptionOrderCommand",
                  "type": "->"
                }
              ],
              "date": "2015-07-22T19:04:43+0000",
              "status": "authorized",
              "details": {
                "eid": 1778,
                "mode": "beta",
                "method": "sv_klarna_invoice_risk",
                "pno": "410321-9202",
                "amount": 2090.62,
                "comment": "The order 34 created from subscription 1 at Wed, 22 Jul 2015 19:00:59 +0000, requested delivery at Wed, 26 Aug 2015 18:31:25 +0000",
                "billing_address": {
                  "email": "admin1@likipe.se",
                  "telno": "0733-134929",
                  "cellno": "0733-134929",
                  "fname": "Sandra",
                  "lname": "Johansson",
                  "careof": null,
                  "street": "Borasvagen 1",
                  "zip": "51700",
                  "city": "Boras",
                  "country": "SE"
                },
                "shipping_address": {
                  "email": "admin1@likipe.se",
                  "telno": "0733-134929",
                  "cellno": "0733-134929",
                  "fname": "Sandra",
                  "lname": "Johansson",
                  "careof": null,
                  "street": "Borasvagen 1",
                  "zip": "51700",
                  "city": "Boras",
                  "country": "SE"
                },
                "estore_info": {
                  "order_id1": "34",
                  "order_id2": null,
                  "username": "admin1@likipe.se"
                },
                "articles": [
                  {
                    "qty": 2,
                    "artNo": "104804001",
                    "title": "Meadow Feast Lamb 2,5 Kg",
                    "price": 1619,
                    "vat": 25,
                    "discount": 0,
                    "flags": 32
                  },
                  {
                    "qty": 3,
                    "artNo": "104804002",
                    "title": "Meadow Feast Lamb 12 Kg",
                    "price": 779,
                    "vat": 25,
                    "discount": 0,
                    "flags": 32
                  },
                  {
                    "qty": 1,
                    "artNo": "SHIPPING_1",
                    "title": "Postpaket 1-2 dagar",
                    "price": 0,
                    "vat": 25,
                    "discount": 0,
                    "flags": 40
                  },
                  {
                    "qty": 1,
                    "artNo": "COUPONCODESV1",
                    "title": "subscription",
                    "price": -3484.38,
                    "vat": 25,
                    "discount": 0,
                    "flags": 32
                  }
                ],
                "rno": "2356736540",
                "status": 1
              }
            }
          }
        },
        "subscription": {
          "id": 1,
          "status_before_purchase": "active",
          "process_errors_before_purchase": "",
          "delivery_date": "2015-08-26T18:31:25+0000",
          "delivery_interval": "P0Y0M7DT00H00M00S",
          "delivery_interval_in_weeks": 1,
          "purchase_date": "2015-08-24T18:31:25+0000",
          "creditworthy_status": 1,
          "creditworthy_status_title": "unknown",
          "creditworthy_details": [],
          "creditworthy_checked_at": "",
          "delivery_date_next": "2015-09-02T18:31:25+0000"
        }
      },
      "diff": [
        {
          "op": "add",
          "path": "/self/payment",
          "value": {
            "self": {
              "id": "55afe94b31c50",
              "name": "sv_klarna_invoice_risk",
              "context": [
                {
                  "file": "/vagrant/src/Ecom/Order/Model/Payment.php",
                  "line": 199,
                  "function": "create",
                  "class": "Ecom\\Order\\Model\\Payment",
                  "type": "::"
                },
                {
                  "file": "/vagrant/src/Ecommerce/PaymentBundle/Payum/Klarna/Invoice/Action/AuthorizeOrderWithRiskAction.php",
                  "line": 29,
                  "function": "copy",
                  "class": "Ecom\\Order\\Model\\Payment",
                  "type": "::"
                },
                {
                  "file": "/vagrant/vendor/payum/payum/src/Payum/Core/Gateway.php",
                  "line": 107,
                  "function": "execute",
                  "class": "Ecommerce\\PaymentBundle\\Payum\\Klarna\\Invoice\\Action\\AuthorizeOrderWithRiskAction",
                  "type": "->"
                },
                {
                  "file": "/vagrant/src/Ecommerce/CommonBundle/Subscription/Command/PurchaseSubscriptionOrderCommand.php",
                  "line": 75,
                  "function": "execute",
                  "class": "Payum\\Core\\Gateway",
                  "type": "->"
                },
                {
                  "file": "/vagrant/src/Ecommerce/CommonBundle/Subscription/Command/PurchaseSubscriptionOrderCommand.php",
                  "line": 61,
                  "function": "doPurchase",
                  "class": "Ecommerce\\CommonBundle\\Subscription\\Command\\PurchaseSubscriptionOrderCommand",
                  "type": "->"
                }
              ],
              "date": "2015-07-22T19:04:43+0000",
              "status": "authorized",
              "details": {
                "eid": 1778,
                "mode": "beta",
                "method": "sv_klarna_invoice_risk",
                "pno": "410321-9202",
                "amount": 2090.62,
                "comment": "The order 34 created from subscription 1 at Wed, 22 Jul 2015 19:00:59 +0000, requested delivery at Wed, 26 Aug 2015 18:31:25 +0000",
                "billing_address": {
                  "email": "admin1@likipe.se",
                  "telno": "0733-134929",
                  "cellno": "0733-134929",
                  "fname": "Sandra",
                  "lname": "Johansson",
                  "careof": null,
                  "street": "Borasvagen 1",
                  "zip": "51700",
                  "city": "Boras",
                  "country": "SE"
                },
                "shipping_address": {
                  "email": "admin1@likipe.se",
                  "telno": "0733-134929",
                  "cellno": "0733-134929",
                  "fname": "Sandra",
                  "lname": "Johansson",
                  "careof": null,
                  "street": "Borasvagen 1",
                  "zip": "51700",
                  "city": "Boras",
                  "country": "SE"
                },
                "estore_info": {
                  "order_id1": "34",
                  "order_id2": null,
                  "username": "admin1@likipe.se"
                },
                "articles": [
                  {
                    "qty": 2,
                    "artNo": "104804001",
                    "title": "Meadow Feast Lamb 2,5 Kg",
                    "price": 1619,
                    "vat": 25,
                    "discount": 0,
                    "flags": 32
                  },
                  {
                    "qty": 3,
                    "artNo": "104804002",
                    "title": "Meadow Feast Lamb 12 Kg",
                    "price": 779,
                    "vat": 25,
                    "discount": 0,
                    "flags": 32
                  },
                  {
                    "qty": 1,
                    "artNo": "SHIPPING_1",
                    "title": "Postpaket 1-2 dagar",
                    "price": 0,
                    "vat": 25,
                    "discount": 0,
                    "flags": 40
                  },
                  {
                    "qty": 1,
                    "artNo": "COUPONCODESV1",
                    "title": "subscription",
                    "price": -3484.38,
                    "vat": 25,
                    "discount": 0,
                    "flags": 32
                  }
                ],
                "rno": "2356736540",
                "status": 1
              }
            }
          }
        },
        {
          "op": "add",
          "path": "/self/paymentHistory/-",
          "value": {
            "self": {
              "id": "55afe94aee18c",
              "name": "sv_klarna_invoice_risk",
              "context": [
                {
                  "file": "/vagrant/src/Ecommerce/CommonBundle/Command/PurchaseCartsSubscriptionCommand.php",
                  "line": 156,
                  "function": "create",
                  "class": "Ecom\\Order\\Model\\Payment",
                  "type": "::"
                },
                {
                  "file": "/vagrant/src/Ecom/Order/Storage/OrderNewStorage.php",
                  "line": 151,
                  "function": "Ecommerce\\CommonBundle\\Command\\{closure}",
                  "class": "Ecommerce\\CommonBundle\\Command\\PurchaseCartsSubscriptionCommand",
                  "type": "->"
                },
                {
                  "file": "/vagrant/src/Ecommerce/CommonBundle/Command/PurchaseCartsSubscriptionCommand.php",
                  "line": 223,
                  "function": "saveOrder",
                  "class": "Ecom\\Order\\Storage\\OrderNewStorage",
                  "type": "->"
                },
                {
                  "file": "/vagrant/src/Ecommerce/CommonBundle/Command/PurchaseCartsSubscriptionCommand.php",
                  "line": 108,
                  "function": "processSingle",
                  "class": "Ecommerce\\CommonBundle\\Command\\PurchaseCartsSubscriptionCommand",
                  "type": "->"
                },
                {
                  "file": "/vagrant/vendor/symfony/symfony/src/Symfony/Component/Console/Command/Command.php",
                  "line": 257,
                  "function": "execute",
                  "class": "Ecommerce\\CommonBundle\\Command\\PurchaseCartsSubscriptionCommand",
                  "type": "->"
                }
              ],
              "date": "2015-07-22T19:04:42+0000",
              "status": "new",
              "details": []
            }
          }
        },
        {
          "op": "replace",
          "path": "/self/state",
          "value": "order"
        },
        {
          "op": "replace",
          "path": "/self/updatedAt",
          "value": "2015-07-22T19:04:44+0000"
        }
      ],
      "meta": {
        "date": "2015-07-22T19:04:44+0000",
        "message": null,
        "cli": {
          "argv": "./app/console ecommerce:subscription:purchase-carts --order=55afe86b08ebf07455728755afe86b08ec6120923817",
          "whoami": "vagrant",
          "ssh": "10.0.2.2 63119 10.0.2.15 22"
        }
      }
    },
    {
      "data": {
        "_id": "55afe86baf6e7bcb42cd748a",
        "campaign": {
          "items_forecasts": [],
          "shipping_forecasts": [
            {
              "campaign": 4,
              "action_config": 7,
              "matched_rules": [
                4
              ],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\FreeShipping",
                "amount": 47.2,
                "percentage": 100,
                "minimumCartAmount": "500.00"
              },
              "subject": {
                "id": "55afe86b1e374",
                "class": "Ecom\\Order\\Model\\Shipping"
              }
            }
          ],
          "coupon_code_forecasts": [
            {
              "campaign": 6,
              "action_config": 9,
              "matched_rules": [
                6
              ],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\Void"
              },
              "subject": {
                "id": "55afe93aa0f31",
                "class": "Ecom\\Order\\Model\\CouponCode"
              }
            }
          ],
          "coupon_code_sub_forecasts": [
            {
              "campaign": 6,
              "action_config": null,
              "matched_rules": [],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\Discount",
                "amount": 2787.5,
                "percentage": 50
              },
              "subject": {
                "id": "55afe93aa0f31",
                "class": "Ecom\\Order\\Model\\CouponCode"
              }
            }
          ]
        },
        "dynamics": {
          "requestedArrivalAt": "2015-08-24T18:31:25+0000"
        },
        "klarna_invoice": {
          "pno": "410321-9202",
          "comment": "The order 34 created from subscription 1 at Wed, 22 Jul 2015 19:00:59 +0000, requested delivery at Wed, 26 Aug 2015 18:31:25 +0000"
        },
        "self": {
          "items": [
            {
              "self": {
                "instance": "base",
                "quantity": 2,
                "id": "55afe86b1eb64",
                "unitPrice": 1295.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 1619,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 1619,
                "totalTaxRate": 25,
                "totalTax": 647.6,
                "totalPrice": 2590.4,
                "totalPriceWithTax": 3238,
                "totalPriceWithDiscountTax": 3238,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "2",
                "sku": "104804001",
                "title": "Meadow Feast Lamb 2,5 Kg"
              }
            },
            {
              "self": {
                "instance": "base",
                "quantity": 3,
                "id": "55afe86b1ec60",
                "unitPrice": 623.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 779,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 779,
                "totalTaxRate": 25,
                "totalTax": 467.4,
                "totalPrice": 1869.6,
                "totalPriceWithTax": 2337,
                "totalPriceWithDiscountTax": 2337,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "3",
                "sku": "104804002",
                "title": "Meadow Feast Lamb 12 Kg"
              }
            }
          ],
          "discounts": [],
          "paymentHistory": [
            {
              "self": {
                "id": "55afe94aee18c",
                "name": "sv_klarna_invoice_risk",
                "context": [
                  {
                    "file": "/vagrant/src/Ecommerce/CommonBundle/Command/PurchaseCartsSubscriptionCommand.php",
                    "line": 156,
                    "function": "create",
                    "class": "Ecom\\Order\\Model\\Payment",
                    "type": "::"
                  },
                  {
                    "file": "/vagrant/src/Ecom/Order/Storage/OrderNewStorage.php",
                    "line": 151,
                    "function": "Ecommerce\\CommonBundle\\Command\\{closure}",
                    "class": "Ecommerce\\CommonBundle\\Command\\PurchaseCartsSubscriptionCommand",
                    "type": "->"
                  },
                  {
                    "file": "/vagrant/src/Ecommerce/CommonBundle/Command/PurchaseCartsSubscriptionCommand.php",
                    "line": 223,
                    "function": "saveOrder",
                    "class": "Ecom\\Order\\Storage\\OrderNewStorage",
                    "type": "->"
                  },
                  {
                    "file": "/vagrant/src/Ecommerce/CommonBundle/Command/PurchaseCartsSubscriptionCommand.php",
                    "line": 108,
                    "function": "processSingle",
                    "class": "Ecommerce\\CommonBundle\\Command\\PurchaseCartsSubscriptionCommand",
                    "type": "->"
                  },
                  {
                    "file": "/vagrant/vendor/symfony/symfony/src/Symfony/Component/Console/Command/Command.php",
                    "line": 257,
                    "function": "execute",
                    "class": "Ecommerce\\CommonBundle\\Command\\PurchaseCartsSubscriptionCommand",
                    "type": "->"
                  }
                ],
                "date": "2015-07-22T19:04:42+0000",
                "status": "new",
                "details": []
              }
            }
          ],
          "transactions": [],
          "shippingStatusHistory": [],
          "state": "order",
          "id": "55afe86b08ebf07455728755afe86b08ec6120923817",
          "store": {
            "self": {
              "id": "55afe86b05ea0",
              "slug": "sv",
              "originId": 1,
              "name": "Sweden Store",
              "country": "SE",
              "locale": "sv_SE",
              "currency": "SEK"
            }
          },
          "orderNumber": "34",
          "currency": "SEK",
          "user": {
            "self": {
              "id": "55afe86b07e2a",
              "originId": 1,
              "firstName": "Sandra",
              "lastName": "Johansson",
              "username": "admin1",
              "email": "admin1@example.com",
              "ssn": "410321-9202"
            }
          },
          "shippingAddress": {
            "self": {
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700",
              "id": "55afe93ad47d5"
            }
          },
          "billingAddress": {
            "self": {
              "id": "55afe86b1e447",
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700"
            }
          },
          "shipping": {
            "self": {
              "id": "55afe86b1e374",
              "price": 47.2,
              "taxes": [
                {
                  "self": {
                    "id": "rate-25",
                    "rate": 25
                  }
                }
              ],
              "totalTaxRate": 25,
              "totalTax": 0,
              "totalDiscount": -47.2,
              "totalDiscountWithTax": -59,
              "totalPriceWithTax": 59,
              "totalPriceWithDiscountTax": 0,
              "discounts": [
                {
                  "self": {
                    "id": "campaign-4",
                    "originId": 4,
                    "amount": -47.2,
                    "taxes": [
                      {
                        "self": {
                          "id": "rate-25",
                          "rate": 25,
                          "originId": 1,
                          "name": "Default"
                        }
                      }
                    ],
                    "totalTaxRate": 25,
                    "totalTax": -11.8,
                    "amountWithTax": -59,
                    "name": "Sweden free shipping",
                    "description": "Sweden free shipping",
                    "sku": "DISCOUNTSV4"
                  }
                }
              ],
              "originId": 1,
              "name": "Postpaket 1-2 dagar",
              "code": "Posten-P19",
              "sku": "SHIPPINGSVPosten-P19"
            }
          },
          "totalItemsPrice": 4460,
          "totalItemsPriceWithTax": 5575,
          "totalItemsDiscount": 0,
          "totalItemsDiscountWithTax": 0,
          "totalItemsTax": 1115,
          "totalItemsPriceWithDiscountTax": 5575,
          "totalShippingTax": 0,
          "totalShippingDiscount": -47.2,
          "totalShippingDiscountWithTax": -59,
          "totalShippingPriceWithDiscountTax": 0,
          "totalOrderDiscountTax": 0,
          "totalOrderDiscount": 0,
          "totalOrderDiscountWithTax": 0,
          "totalDiscount": -2834.7,
          "totalDiscountWithTax": -3543.38,
          "totalTax": 418.12,
          "totalPriceWithTax": 5634,
          "totalPriceWithDiscountTax": 2090.62,
          "createdAt": "2015-07-22T19:00:59+0000",
          "updatedAt": "2015-07-22T19:04:45+0000",
          "couponCode": {
            "self": {
              "id": "55afe93aa0f31",
              "discounts": [
                {
                  "self": {
                    "id": "campaign-6",
                    "originId": 6,
                    "amount": -2787.5,
                    "taxes": [
                      {
                        "self": {
                          "id": "rate-25",
                          "rate": 25,
                          "originId": 1,
                          "name": "Default"
                        }
                      }
                    ],
                    "totalTaxRate": 25,
                    "totalTax": -696.88,
                    "amountWithTax": -3484.38,
                    "name": "Coupon Code",
                    "description": "Coupon Code",
                    "sku": "DISCOUNTSV6"
                  }
                }
              ],
              "totalTaxRate": 25,
              "totalTax": -696.88,
              "totalDiscount": -2787.5,
              "totalDiscountWithTax": -3484.38,
              "taxes": [
                {
                  "self": {
                    "id": "rate-25",
                    "rate": 25
                  }
                }
              ],
              "originId": 2,
              "code": "subscription",
              "name": "COUPONCODESV1"
            }
          },
          "payment": {
            "self": {
              "id": "55afe94b31c50",
              "name": "sv_klarna_invoice_risk",
              "context": [
                {
                  "file": "/vagrant/src/Ecom/Order/Model/Payment.php",
                  "line": 199,
                  "function": "create",
                  "class": "Ecom\\Order\\Model\\Payment",
                  "type": "::"
                },
                {
                  "file": "/vagrant/src/Ecommerce/PaymentBundle/Payum/Klarna/Invoice/Action/AuthorizeOrderWithRiskAction.php",
                  "line": 29,
                  "function": "copy",
                  "class": "Ecom\\Order\\Model\\Payment",
                  "type": "::"
                },
                {
                  "file": "/vagrant/vendor/payum/payum/src/Payum/Core/Gateway.php",
                  "line": 107,
                  "function": "execute",
                  "class": "Ecommerce\\PaymentBundle\\Payum\\Klarna\\Invoice\\Action\\AuthorizeOrderWithRiskAction",
                  "type": "->"
                },
                {
                  "file": "/vagrant/src/Ecommerce/CommonBundle/Subscription/Command/PurchaseSubscriptionOrderCommand.php",
                  "line": 75,
                  "function": "execute",
                  "class": "Payum\\Core\\Gateway",
                  "type": "->"
                },
                {
                  "file": "/vagrant/src/Ecommerce/CommonBundle/Subscription/Command/PurchaseSubscriptionOrderCommand.php",
                  "line": 61,
                  "function": "doPurchase",
                  "class": "Ecommerce\\CommonBundle\\Subscription\\Command\\PurchaseSubscriptionOrderCommand",
                  "type": "->"
                }
              ],
              "date": "2015-07-22T19:04:43+0000",
              "status": "authorized",
              "details": {
                "eid": 1778,
                "mode": "beta",
                "method": "sv_klarna_invoice_risk",
                "pno": "410321-9202",
                "amount": 2090.62,
                "comment": "The order 34 created from subscription 1 at Wed, 22 Jul 2015 19:00:59 +0000, requested delivery at Wed, 26 Aug 2015 18:31:25 +0000",
                "billing_address": {
                  "email": "admin1@likipe.se",
                  "telno": "0733-134929",
                  "cellno": "0733-134929",
                  "fname": "Sandra",
                  "lname": "Johansson",
                  "careof": null,
                  "street": "Borasvagen 1",
                  "zip": "51700",
                  "city": "Boras",
                  "country": "SE"
                },
                "shipping_address": {
                  "email": "admin1@likipe.se",
                  "telno": "0733-134929",
                  "cellno": "0733-134929",
                  "fname": "Sandra",
                  "lname": "Johansson",
                  "careof": null,
                  "street": "Borasvagen 1",
                  "zip": "51700",
                  "city": "Boras",
                  "country": "SE"
                },
                "estore_info": {
                  "order_id1": "34",
                  "order_id2": null,
                  "username": "admin1@likipe.se"
                },
                "articles": [
                  {
                    "qty": 2,
                    "artNo": "104804001",
                    "title": "Meadow Feast Lamb 2,5 Kg",
                    "price": 1619,
                    "vat": 25,
                    "discount": 0,
                    "flags": 32
                  },
                  {
                    "qty": 3,
                    "artNo": "104804002",
                    "title": "Meadow Feast Lamb 12 Kg",
                    "price": 779,
                    "vat": 25,
                    "discount": 0,
                    "flags": 32
                  },
                  {
                    "qty": 1,
                    "artNo": "SHIPPING_1",
                    "title": "Postpaket 1-2 dagar",
                    "price": 0,
                    "vat": 25,
                    "discount": 0,
                    "flags": 40
                  },
                  {
                    "qty": 1,
                    "artNo": "COUPONCODESV1",
                    "title": "subscription",
                    "price": -3484.38,
                    "vat": 25,
                    "discount": 0,
                    "flags": 32
                  }
                ],
                "rno": "2356736540",
                "status": 1
              }
            }
          }
        },
        "subscription": {
          "id": 1,
          "status_before_purchase": "active",
          "process_errors_before_purchase": "",
          "delivery_date": "2015-08-26T18:31:25+0000",
          "delivery_interval": "P0Y0M7DT00H00M00S",
          "delivery_interval_in_weeks": 1,
          "purchase_date": "2015-08-24T18:31:25+0000",
          "creditworthy_status": 1,
          "creditworthy_status_title": "unknown",
          "creditworthy_details": [],
          "creditworthy_checked_at": "",
          "delivery_date_next": "2015-09-02T18:31:25+0000"
        }
      },
      "diff": [
        {
          "op": "replace",
          "path": "/self/updatedAt",
          "value": "2015-07-22T19:04:45+0000"
        }
      ],
      "meta": {
        "date": "2015-07-22T19:04:45+0000",
        "message": null,
        "cli": {
          "argv": "./app/console ecommerce:subscription:purchase-carts --order=55afe86b08ebf07455728755afe86b08ec6120923817",
          "whoami": "vagrant",
          "ssh": "10.0.2.2 63119 10.0.2.15 22"
        }
      }
    },
    {
      "data": {
        "_id": "55afe86baf6e7bcb42cd748a",
        "campaign": {
          "items_forecasts": [],
          "shipping_forecasts": [
            {
              "campaign": 4,
              "action_config": 7,
              "matched_rules": [
                4
              ],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\FreeShipping",
                "amount": 47.2,
                "percentage": 100,
                "minimumCartAmount": "500.00"
              },
              "subject": {
                "id": "55afe86b1e374",
                "class": "Ecom\\Order\\Model\\Shipping"
              }
            }
          ],
          "coupon_code_forecasts": [
            {
              "campaign": 6,
              "action_config": 9,
              "matched_rules": [
                6
              ],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\Void"
              },
              "subject": {
                "id": "55afe93aa0f31",
                "class": "Ecom\\Order\\Model\\CouponCode"
              }
            }
          ],
          "coupon_code_sub_forecasts": [
            {
              "campaign": 6,
              "action_config": null,
              "matched_rules": [],
              "effect": {
                "class": "Ecom\\Campaign\\Processor\\Effect\\Discount",
                "amount": 2787.5,
                "percentage": 50
              },
              "subject": {
                "id": "55afe93aa0f31",
                "class": "Ecom\\Order\\Model\\CouponCode"
              }
            }
          ]
        },
        "dynamics": {
          "requestedArrivalAt": "2015-08-24T18:31:25+0000"
        },
        "klarna_invoice": {
          "pno": "410321-9202",
          "comment": "The order 34 created from subscription 1 at Wed, 22 Jul 2015 19:00:59 +0000, requested delivery at Wed, 26 Aug 2015 18:31:25 +0000"
        },
        "self": {
          "items": [
            {
              "self": {
                "instance": "base",
                "quantity": 2,
                "id": "55afe86b1eb64",
                "unitPrice": 1295.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 1619,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 1619,
                "totalTaxRate": 25,
                "totalTax": 647.6,
                "totalPrice": 2590.4,
                "totalPriceWithTax": 3238,
                "totalPriceWithDiscountTax": 3238,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "2",
                "sku": "104804001",
                "title": "Meadow Feast Lamb 2,5 Kg"
              }
            },
            {
              "self": {
                "instance": "base",
                "quantity": 3,
                "id": "55afe86b1ec60",
                "unitPrice": 623.2,
                "taxes": [
                  {
                    "self": {
                      "id": "rate-25",
                      "rate": 25,
                      "originId": 1,
                      "name": "Default"
                    }
                  }
                ],
                "unitPriceWithTax": 779,
                "unitDiscount": 0,
                "unitDiscountWithTax": 0,
                "unitPriceWithDiscountTax": 779,
                "totalTaxRate": 25,
                "totalTax": 467.4,
                "totalPrice": 1869.6,
                "totalPriceWithTax": 2337,
                "totalPriceWithDiscountTax": 2337,
                "totalDiscount": 0,
                "totalDiscountWithTax": 0,
                "discounts": [],
                "originId": "3",
                "sku": "104804002",
                "title": "Meadow Feast Lamb 12 Kg"
              }
            }
          ],
          "discounts": [],
          "paymentHistory": [
            {
              "self": {
                "id": "55afe94aee18c",
                "name": "sv_klarna_invoice_risk",
                "context": [
                  {
                    "file": "/vagrant/src/Ecommerce/CommonBundle/Command/PurchaseCartsSubscriptionCommand.php",
                    "line": 156,
                    "function": "create",
                    "class": "Ecom\\Order\\Model\\Payment",
                    "type": "::"
                  },
                  {
                    "file": "/vagrant/src/Ecom/Order/Storage/OrderNewStorage.php",
                    "line": 151,
                    "function": "Ecommerce\\CommonBundle\\Command\\{closure}",
                    "class": "Ecommerce\\CommonBundle\\Command\\PurchaseCartsSubscriptionCommand",
                    "type": "->"
                  },
                  {
                    "file": "/vagrant/src/Ecommerce/CommonBundle/Command/PurchaseCartsSubscriptionCommand.php",
                    "line": 223,
                    "function": "saveOrder",
                    "class": "Ecom\\Order\\Storage\\OrderNewStorage",
                    "type": "->"
                  },
                  {
                    "file": "/vagrant/src/Ecommerce/CommonBundle/Command/PurchaseCartsSubscriptionCommand.php",
                    "line": 108,
                    "function": "processSingle",
                    "class": "Ecommerce\\CommonBundle\\Command\\PurchaseCartsSubscriptionCommand",
                    "type": "->"
                  },
                  {
                    "file": "/vagrant/vendor/symfony/symfony/src/Symfony/Component/Console/Command/Command.php",
                    "line": 257,
                    "function": "execute",
                    "class": "Ecommerce\\CommonBundle\\Command\\PurchaseCartsSubscriptionCommand",
                    "type": "->"
                  }
                ],
                "date": "2015-07-22T19:04:42+0000",
                "status": "new",
                "details": []
              }
            }
          ],
          "transactions": [],
          "shippingStatusHistory": [],
          "state": "order",
          "id": "55afe86b08ebf07455728755afe86b08ec6120923817",
          "store": {
            "self": {
              "id": "55afe86b05ea0",
              "slug": "sv",
              "originId": 1,
              "name": "Sweden Store",
              "country": "SE",
              "locale": "sv_SE",
              "currency": "SEK"
            }
          },
          "orderNumber": "34",
          "currency": "SEK",
          "user": {
            "self": {
              "id": "55afe86b07e2a",
              "originId": 1,
              "firstName": "Sandra",
              "lastName": "Johansson",
              "username": "admin1",
              "email": "admin1@example.com",
              "ssn": "410321-9202"
            }
          },
          "shippingAddress": {
            "self": {
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700",
              "id": "55afe93ad47d5"
            }
          },
          "billingAddress": {
            "self": {
              "id": "55afe86b1e447",
              "originId": 1,
              "country": "SE",
              "phone": "0733-134929",
              "city": "Boras",
              "street": "Borasvagen 1",
              "zip": "51700"
            }
          },
          "shipping": {
            "self": {
              "id": "55afe86b1e374",
              "price": 47.2,
              "taxes": [
                {
                  "self": {
                    "id": "rate-25",
                    "rate": 25
                  }
                }
              ],
              "totalTaxRate": 25,
              "totalTax": 0,
              "totalDiscount": -47.2,
              "totalDiscountWithTax": -59,
              "totalPriceWithTax": 59,
              "totalPriceWithDiscountTax": 0,
              "discounts": [
                {
                  "self": {
                    "id": "campaign-4",
                    "originId": 4,
                    "amount": -47.2,
                    "taxes": [
                      {
                        "self": {
                          "id": "rate-25",
                          "rate": 25,
                          "originId": 1,
                          "name": "Default"
                        }
                      }
                    ],
                    "totalTaxRate": 25,
                    "totalTax": -11.8,
                    "amountWithTax": -59,
                    "name": "Sweden free shipping",
                    "description": "Sweden free shipping",
                    "sku": "DISCOUNTSV4"
                  }
                }
              ],
              "originId": 1,
              "name": "Postpaket 1-2 dagar",
              "code": "Posten-P19",
              "sku": "SHIPPINGSVPosten-P19"
            }
          },
          "totalItemsPrice": 4460,
          "totalItemsPriceWithTax": 5575,
          "totalItemsDiscount": 0,
          "totalItemsDiscountWithTax": 0,
          "totalItemsTax": 1115,
          "totalItemsPriceWithDiscountTax": 5575,
          "totalShippingTax": 0,
          "totalShippingDiscount": -47.2,
          "totalShippingDiscountWithTax": -59,
          "totalShippingPriceWithDiscountTax": 0,
          "totalOrderDiscountTax": 0,
          "totalOrderDiscount": 0,
          "totalOrderDiscountWithTax": 0,
          "totalDiscount": -2834.7,
          "totalDiscountWithTax": -3543.38,
          "totalTax": 418.12,
          "totalPriceWithTax": 5634,
          "totalPriceWithDiscountTax": 2090.62,
          "createdAt": "2015-07-22T19:00:59+0000",
          "updatedAt": "2015-07-22T19:04:45+0000",
          "couponCode": {
            "self": {
              "id": "55afe93aa0f31",
              "discounts": [
                {
                  "self": {
                    "id": "campaign-6",
                    "originId": 6,
                    "amount": -2787.5,
                    "taxes": [
                      {
                        "self": {
                          "id": "rate-25",
                          "rate": 25,
                          "originId": 1,
                          "name": "Default"
                        }
                      }
                    ],
                    "totalTaxRate": 25,
                    "totalTax": -696.88,
                    "amountWithTax": -3484.38,
                    "name": "Coupon Code",
                    "description": "Coupon Code",
                    "sku": "DISCOUNTSV6"
                  }
                }
              ],
              "totalTaxRate": 25,
              "totalTax": -696.88,
              "totalDiscount": -2787.5,
              "totalDiscountWithTax": -3484.38,
              "taxes": [
                {
                  "self": {
                    "id": "rate-25",
                    "rate": 25
                  }
                }
              ],
              "originId": 2,
              "code": "subscription",
              "name": "COUPONCODESV1"
            }
          },
          "payment": {
            "self": {
              "id": "55afe94b31c50",
              "name": "sv_klarna_invoice_risk",
              "context": [
                {
                  "file": "/vagrant/src/Ecom/Order/Model/Payment.php",
                  "line": 199,
                  "function": "create",
                  "class": "Ecom\\Order\\Model\\Payment",
                  "type": "::"
                },
                {
                  "file": "/vagrant/src/Ecommerce/PaymentBundle/Payum/Klarna/Invoice/Action/AuthorizeOrderWithRiskAction.php",
                  "line": 29,
                  "function": "copy",
                  "class": "Ecom\\Order\\Model\\Payment",
                  "type": "::"
                },
                {
                  "file": "/vagrant/vendor/payum/payum/src/Payum/Core/Gateway.php",
                  "line": 107,
                  "function": "execute",
                  "class": "Ecommerce\\PaymentBundle\\Payum\\Klarna\\Invoice\\Action\\AuthorizeOrderWithRiskAction",
                  "type": "->"
                },
                {
                  "file": "/vagrant/src/Ecommerce/CommonBundle/Subscription/Command/PurchaseSubscriptionOrderCommand.php",
                  "line": 75,
                  "function": "execute",
                  "class": "Payum\\Core\\Gateway",
                  "type": "->"
                },
                {
                  "file": "/vagrant/src/Ecommerce/CommonBundle/Subscription/Command/PurchaseSubscriptionOrderCommand.php",
                  "line": 61,
                  "function": "doPurchase",
                  "class": "Ecommerce\\CommonBundle\\Subscription\\Command\\PurchaseSubscriptionOrderCommand",
                  "type": "->"
                }
              ],
              "date": "2015-07-22T19:04:43+0000",
              "status": "authorized",
              "details": {
                "eid": 1778,
                "mode": "beta",
                "method": "sv_klarna_invoice_risk",
                "pno": "410321-9202",
                "amount": 2090.62,
                "comment": "The order 34 created from subscription 1 at Wed, 22 Jul 2015 19:00:59 +0000, requested delivery at Wed, 26 Aug 2015 18:31:25 +0000",
                "billing_address": {
                  "email": "admin1@likipe.se",
                  "telno": "0733-134929",
                  "cellno": "0733-134929",
                  "fname": "Sandra",
                  "lname": "Johansson",
                  "careof": null,
                  "street": "Borasvagen 1",
                  "zip": "51700",
                  "city": "Boras",
                  "country": "SE"
                },
                "shipping_address": {
                  "email": "admin1@likipe.se",
                  "telno": "0733-134929",
                  "cellno": "0733-134929",
                  "fname": "Sandra",
                  "lname": "Johansson",
                  "careof": null,
                  "street": "Borasvagen 1",
                  "zip": "51700",
                  "city": "Boras",
                  "country": "SE"
                },
                "estore_info": {
                  "order_id1": "34",
                  "order_id2": null,
                  "username": "admin1@likipe.se"
                },
                "articles": [
                  {
                    "qty": 2,
                    "artNo": "104804001",
                    "title": "Meadow Feast Lamb 2,5 Kg",
                    "price": 1619,
                    "vat": 25,
                    "discount": 0,
                    "flags": 32
                  },
                  {
                    "qty": 3,
                    "artNo": "104804002",
                    "title": "Meadow Feast Lamb 12 Kg",
                    "price": 779,
                    "vat": 25,
                    "discount": 0,
                    "flags": 32
                  },
                  {
                    "qty": 1,
                    "artNo": "SHIPPING_1",
                    "title": "Postpaket 1-2 dagar",
                    "price": 0,
                    "vat": 25,
                    "discount": 0,
                    "flags": 40
                  },
                  {
                    "qty": 1,
                    "artNo": "COUPONCODESV1",
                    "title": "subscription",
                    "price": -3484.38,
                    "vat": 25,
                    "discount": 0,
                    "flags": 32
                  }
                ],
                "rno": "2356736540",
                "status": 1
              }
            }
          }
        },
        "subscription": {
          "id": 1,
          "status_before_purchase": "active",
          "process_errors_before_purchase": "",
          "delivery_date": "2015-08-26T18:31:25+0000",
          "delivery_interval": "P0Y0M7DT00H00M00S",
          "delivery_interval_in_weeks": 1,
          "purchase_date": "2015-08-24T18:31:25+0000",
          "creditworthy_status": 1,
          "creditworthy_status_title": "unknown",
          "creditworthy_details": [],
          "creditworthy_checked_at": "",
          "delivery_date_next": "2015-09-02T18:31:25+0000",
          "process_errors_after_purchase": "",
          "status_after_purchase": "active"
        }
      },
      "diff": [
        {
          "op": "copy",
          "path": "/subscription/process_errors_after_purchase",
          "from": "/subscription/process_errors_before_purchase"
        },
        {
          "op": "copy",
          "path": "/subscription/status_after_purchase",
          "from": "/subscription/status_before_purchase"
        }
      ],
      "meta": {
        "date": "2015-07-22T19:04:45+0000",
        "message": null,
        "cli": {
          "argv": "./app/console ecommerce:subscription:purchase-carts --order=55afe86b08ebf07455728755afe86b08ec6120923817",
          "whoami": "vagrant",
          "ssh": "10.0.2.2 63119 10.0.2.15 22"
        }
      }
    }
  ]);
};
