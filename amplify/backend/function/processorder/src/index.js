/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 const aws = require('aws-sdk')
 const ses = new aws.SES()
 const apkEmail = 'apkritikos@houzey.homes'
 const nmEmail = 'nmackenzie@houzey.homes'

 exports.handler = async (event) => {
   for (const streamedItem of event.Records) {
     if (streamedItem.eventName === 'INSERT') {
       //pull off items from stream
       const cartItems = streamedItem.dynamodb.NewImage.cartItems.S
       const totalPrice = streamedItem.dynamodb.NewImage.totalPrice.S
       const homeownerFirstName = streamedItem.dynamodb.NewImage.homeownerFirstName.S
       const homeownerLastName = streamedItem.dynamodb.NewImage.homeownerLastName.S
       const homeownerPhone = streamedItem.dynamodb.NewImage.homeownerPhone.S
       const homeownerEmail = streamedItem.dynamodb.NewImage.homeownerEmail.S
       const chosenInstallation = streamedItem.dynamodb.NewImage.chosenInstallation.S
       const homeStreet = streamedItem.dynamodb.NewImage.homeStreet.S
       const homeCity = streamedItem.dynamodb.NewImage.homeCity.S
       const homeState = streamedItem.dynamodb.NewImage.homeState.S
       const homeZip = streamedItem.dynamodb.NewImage.homeZip.S

       await ses
           .sendEmail({
             Destination: {
               ToAddresses: [{homeownerEmail}, {apkEmail}, {nmEmail}], 
             },
             Source: 'contact@houzey.homes',
             Message: {
               Subject: { Data: 'Your Houzey Order' },
               Body: {
                 Text: { Data: `Dear ${homeownerFirstName}. Your order in the amount of ${totalPrice} has been confirmed for ${chosenInstallation}. The address to be decorated is ${homeStreet} in ${homeCity}.` },
               },
             },
           })
           .promise()
     }
   }
   return { status: 'done' }
 }
 