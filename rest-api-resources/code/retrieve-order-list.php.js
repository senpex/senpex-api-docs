export default `
<?php

require_once '../snpx/snpx_api.php';

error_reporting(E_ALL);

$client_id="YOUR_CLIENT_ID";
$secret_id="YOUR_SECRET_ID";
$snpx_api =new snpx_api($client_id, $secret_id);
$results  = $snpx_api->get_order_list();

if($results->{'code'}=="0")
{
    for($i=0;$i<count($results->{'data'});$i++)
    {
        echo "Order id : ".$results->{'data'}[$i]->{'id'};
        echo "\\n";
        echo "Pick up location: ".$results->{'data'}[$i]->{'pack_from_text'};
        echo "\\n";
        echo "Drop off locations count : ".$results->{'data'}[$i]->{'route_count'};
        echo "\\n";
        echo "Order status : ".$results->{'data'}[$i]->{'order_status_text'};
    }
}
else
{
    echo $results->{'msgtext'};
}

exit();

?>
`