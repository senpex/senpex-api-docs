export default `
<?php

require_once '../snpx/snpx_api.php';

error_reporting(E_ALL);

$order_id="ORDER_ID";
$client_id="YOUR_CLIENT_ID";
$secret_id="YOUR_SECRET_ID";
$snpx_api =new snpx_api($client_id, $secret_id);
$results =$snpx_api->update_order_nots($order_id, array("snpx_emails"=>"1"));

if($results->{'code'}=="0")
{
    echo "Notification status has been updated";
}
else
{
    echo $results->{'msgtext'};
}

exit();

?>
`