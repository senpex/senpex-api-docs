export default `
<p>This service used to create a new single order. To create a quick order, first send a /get_price request. This will return ​"api_token" ​in the response​.​Then, make a POST to the create_quick_order endpoint with ​api_token ​and the following parameters.</p>
<p>Note: api_token expires in 30 minutes after creating and it can be used for creating one order only.</p>
`