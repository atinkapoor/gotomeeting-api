## Login Credentials

    https://goto-developer.logmeininc.com/user/login
    Username: kapooratin@yahoo.com
    Password: Atinkapoor05

## How to generate access_token

    https://goto-developer.logmeininc.com/how-get-access-token-and-organizer-key

## Login to https://goto-developer.logmeininc.com/
  In the My Apps page, open your application and copy the Consumer Key & ConsumerSecret value.

  Populate them inside index.html at lines 17,18
    var consumer_key = "{consumer_key}";
    var consumer_secret = "{consumer_secret}";

## Base64 (ConsumerKey:ConsumerSecret)
    Base64 Key is generated using {consumer_key}:{consumer_secret}

  Populate it inside index.html at line 21
    var base64Key = "{base64Key}";

## Step 1 - Request Authorization Code 
    https://api.getgo.com/oauth/v2/authorize?client_id={consumerKey}&response_type=code

  Copy the URL which we get in result
  Copy the code value from the url and use it in curl command in Step 2
    http://example.com/oauthreturn/?code={responseKey}

## Step 2 - Request Access Token

    curl -X POST "https://api.getgo.com/oauth/v2/token" \
      -H "Authorization: Basic {base64Key}" \
      -H "Accept:application/json" \
      -H "Content-Type: application/x-www-form-urlencoded" \
      -d "grant_type=authorization_code&code={responseKey}"
  
## Step 3
  Get the below values from the curl response
    organizer_key
    account_key
    access_token

  And paste them in to index.html at lines 23, 24, 25
    var organizer_key = "{organizer_key}";
    var account_key = "{account_key}";
    var access_token = "{access_token}";

## Installation

    npm install

## Usage

    npm run standard

    Open index.html in any browser.
    Click 'Get Acces Token' and then 'Load Webinars' 

