export default `
<?php

require_once '../snpx/snpx_api.php';

error_reporting(E_ALL);
$api_token = 'ORDER_HASH_ID';
$client_id="YOUR_CLIENT_ID";
$secret_id="YOUR_SECRET_ID";
$snpx_api =new snpx_api($client_id, $secret_id);

$results  = $snpx_api->create_quick_order($api_token, 'elshanb11@gmail.com');

if($results->{'code'}=="0")
{
    
    echo "order_id : ".$results->{'inserted_id'};
    echo "\\n";
    echo "total distance (miles) : ".$results->{'details'}->{'distance'};
    echo "\\n";
    echo "total delivery time (seconds) : ".$results->{'details'}->{'distance_time'};
   
}
else
{
    echo $results->{'msgtext'};
}

exit();

?>
`