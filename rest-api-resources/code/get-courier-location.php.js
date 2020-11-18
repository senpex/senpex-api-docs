export default `
<?php

require_once '../snpx/snpx_api.php';

error_reporting(E_ALL);

$order_id="ORDER_ID";
$client_id="YOUR_SECRET_ID";
$secret_id="YOUR_CLIENT_ID";
$snpx_api =new snpx_api($client_id, $secret_id);
$results  = $snpx_api->get_courier_place($order_id);

if($results->{'code'}=="0")
{
    echo "Courier name : ".$results->{'data'}->{'courier_name'};
    echo "<br />";
    echo "Courier phone number: ".$results->{'data'}->{'courier_phone_number'};
    echo "<br />";    
    echo "Courier place (lat): ".$results->{'data'}->{'last_lat'};
    echo "<br />";
    echo "Courier place (lng): ".$results->{'data'}->{'last_lng'};
    echo "<br />";
}
else
{
    echo $results->{'msgtext'};
}
`