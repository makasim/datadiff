Datadiff
--------

It is simple standalone service which tracks models changes, who changed it. It also provide nice html page to see history or embed it.
Stores data as JSON PATCHes into mongodb.

Run
===

```
java -jar datadiff-0.1.0.jar
```

View
====

```
curl -X GET http://localhost:8080/audit/yourModelId.html -i;
```

TODO image here

Api
===

You can send commit which contains data and some meta info to the endpoint:

```
curl -X POST -d '@commit.json' http://localhost:8080/audit/yourModelId/commit -i -H "Content-Type: application/json";
```

An example of the commit:

```
{
    "data": {
      "passowrd": "xyz12312312",
      "username": "xyz123123"
    },
    "meta": {
      "date": "2015-07-21T02:56:47+00:00",
      "message": "A message",
      "user": {
        "id": 123,
        "name": "John Doe",
        "email": "johnDoe@example.com",
        "url": "http://johhDoe.example.com"
      },
      "http_request": {
        "uri": "https://zoozoo.com/admin/order/123/refund",
        "method": "POST",
        "client_ip": "127.0.0.1",
        "server_ip": "127.0.0.2"
      },
      "cli": {
        "argv": "./app/console foo:bar:baz --env=prod --since=\"2015-10-10\" --until=\"2015-10-20\"",
        "whoami": "vagrant"
      },
      "stack": [
        "3# /vagrant/src/Ecommerce/CommonBundle/OrderController.php line 45",
        "6# /vagrant/src/Ecommerce/PaymentBundle/Payum/Klarna/Checkout/Action/RefundAction.php line 100"
      ]
    }
```

Get the last data and all its commits:

```
curl -X GET http://localhost:8080/audit/yourModelId -i;
```

It returns something like:
```
{
    "commits": [
     {
       "data": {
         "passowrd": "xyz12312312",
         "username": "xyz123123"
       },
       "diff": [
         {
           "op": "add",
           "path": "/password",
           "value": "xyz12312312"
         },
         {
           "op": "add",
           "path": "/username",
           "value": "xyz123123"
         }
       ],
       "meta": {
         "date": "2015-07-21T02:56:47+00:00",
         "message": "A message",
         "user": {
           "id": 123,
           "name": "John Doe",
           "email": "johnDoe@example.com",
           "url": "http://johhDoe.example.com"
         },
         "http_request": {
           "uri": "https://zoozoo.com/admin/order/123/refund",
           "method": "POST",
           "client_ip": "127.0.0.1",
           "server_ip": "127.0.0.2"
         },
         "stack": [
           "3# /vagrant/src/Ecommerce/CommonBundle/OrderController.php line 45",
           "6# /vagrant/src/Ecommerce/PaymentBundle/Payum/Klarna/Checkout/Action/RefundAction.php line 100"
         ]
       }
     },
     {
       "data": {
         "password": "xyz",
         "username": "xyz",
         "lastName": "xyz123123"
       },
       "diff": [
         {
           "op": "replace",
           "path": "/password",
           "value": "xyz"
         },
         {
           "op": "replace",
           "path": "/username",
           "value": "xyz"
         },
         {
           "op": "add",
           "path": "/lastName",
           "value": "xyz123123"
         }
       ],
       "meta": {
         "date": "2015-07-21T02:56:47+00:00",
         "cli": {
           "argv": "./app/console foo:bar:baz --env=prod --since=\"2015-10-10\" --until=\"2015-10-20\"",
           "whoami": "vagrant"
         },
         "stack": [
           "4# /vagrant/src/Ecommerce/CommonBundle/Command/FooBarBazCommand.php line 45"
         ]
       }
     }
   ]
}
```
