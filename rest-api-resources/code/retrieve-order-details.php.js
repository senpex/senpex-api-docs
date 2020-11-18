export default `
<?php
require_once '../snpx/snpx_api.php';
error_reporting(E_ALL);
$order_id="ORDER_ID";
$client_id="YOUR_CLIENT_ID";
$secret_id="YOUR_SECRET_ID";
$snpx_api =new snpx_api($client_id, $secret_id);
$results  = $snpx_api->get_order_details($order_id);

if($results->{'code'}=="0")
{
    echo "Order id : ".$results->{'data'}[0]->{'id'};
    echo "<br />";
    echo "Pick up location: ".$results->{'data'}[0]->{'pack_from_text'};
    echo "<br />";
    echo "Drop off locations count : ".$results->{'data'}[0]->{'route_count'};
    echo "<br />";
    echo "Order status : ".$results->{'data'}[0]->{'order_status_text'};
    echo "<br />";
    
    for($i=0;$i<count($results->{'data'}[0]->{'routes'});$i++)
    {           
          echo "Drop of location ".($i+1)." : ".$results->{'data'}[0]->{'routes'}[$i]->{'route_to_text'};
          echo "<br />";
          echo "Drop of lat/lng ".($i+1)." : ".$results->{'data'}[0]->{'routes'}[$i]->{'route_to_lat'}."/".$results->{'data'}[0]->{'routes'}[$i]->{'route_to_lng'};
          echo "<br />";
    }
}
else
{
    echo $results->{'msgtext'};
}
`