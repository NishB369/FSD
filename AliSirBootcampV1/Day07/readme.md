# FSD Bootcamp Day 07 | 01 July 2025

## Authentication

- to ensure someone who is intented to use our services is the one using that
- user fields
  - needs to be protected
  - data ownership
  - in our to safeguard access of data
    - and keeping check of who is using our service

## 3 different mechanisms

- public services

  - might not need data protection
  - general information
  - control over public apis

    - mobile app is accessing public apis

      - need to prevent its access - limit the apis
      - mechanism to protect public apis

        1. `api key`

        - service that are paid or available for certain duration
        - keys expire after define time
        - Usecases
          1. have a limited access
          2. limited duration (optional)
          3. protect access to service
          4. paid service - very imp
        - Generation of API Key
          - nomencalture is defined
          - random strings
        - Transferring of API Key from Client to Server

          - HTTP

            - REST
              - It is an architecture : set of rules
              - better way for designing the services
              - recommendations for scalable and better system
              - its about mantaining a `State`
              - CRUD apis are independent i.e. stateless
                - one api doesn't have info about any other api
              - video for rest by sir

          - Consistents

            1. Header
               - Key : Value Pair
               - Std keys defined and identified by system
            2. Body
            3. Method
            4. URL
               - param
               - query

          - Methods

            - GET

              - fetch API

            - POST
            - PUT
            - DELETE

          - API structure
            - "statusCode"
            - "message"
            - data (optional)
            - can be an object, array or string

        2.  Account Creation

            1. via Email
               - attach a code to email in db
               - shoot email with that code
               - verify the code input by user
            2. via Phone
            3. via UserName and Password

        3.  OTP Structure
            - phoneNumber
            - code
            - createdAt
            - expireAt
            - retryCount
            - state

## Safeguarding User

1. Identify User
2. Authenticate
3. Secure

### Basic Auth

- username
- password
- sent as base64
- confirm in db
- not secure as password is being sent in apis calls

### ouath2

- user can define what all information can be stored in token
- used by google etc

### JWT Token

#### Token Genartion Mechanism

- password is converted to hash and then stored in data
- md5 hashing
- `salt` - new way of hashing to add more data and prevent reverse hashing - making more unique
- atob("base64 token) --> return string output
  1. Header
  2. Payload
     - issuer
     - audience
     - subject
     - iat
     - exp
     - prm
  3. Signature
     - encrypt data with private key
     - decrypt data with public key

#### Multiple Device Deadlock Scenario


