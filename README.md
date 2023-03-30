# The Phone Cave

It is a first mobile page that lists the available phone models in the store and when you click on them it gives us the details of that phone.

# Client

[Client repository Link](https://github.com/Apleon89/the-phone-cave-client)

# Server

## Models

User model

```
id: Number,
name: String,
manufacturer: String,
description: String,
color: String,
price: Number,
imageFileName: String,
screen: String
processor: String,
ram: Number,

```

## API Endpoints/Backend Routes

| Route         | HTTP Verb | Description          | Params |
| ------------- | --------- | -------------------- | ------ |
| `/phones`     | GET       | List All Phones      | --     |
| `/phones/:id` | GET       | Show a phone details | ID     |
