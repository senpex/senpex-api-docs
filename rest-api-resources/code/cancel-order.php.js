export default `
<?php
require_once '../snpx/senpex/api/v1/snpx/snpx_api.php';
error_reporting(E_ALL);
$order_id="ORDER_ID";
$client_id="YOUR_SECRET_ID";
$secret_id="YOUR_CLIENT_ID";
$snpx_api =new snpx_api($client_id, $secret_id);
$results  = $snpx_api->cancel_order($order_id);

if($results->{'code'}=="0")
{
    echo "Order has been cancelled";
}
else
{
    echo $results->{'msgtext'};
}

exit();

?>
`