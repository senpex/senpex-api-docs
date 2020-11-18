let data = `
<?php
require_once '../snpx/snpx_api.php';
$routes[0]['route_to_text']='San Jose, CA, USA';
$routes[0]['rec_name']='John Albert';
$routes[0]['rec_phone']='1650000000';
$client_id="YOUR_CLIENT_ID";
$secret_id="YOUR_SECRET_ID";
$snpx_api =new snpx_api($client_id, $secret_id);
$results  = $snpx_api->get_price('Samsung S7', 'San Francisco, CA, USA', $routes);
if($results->{'code'}=="0")
{ 
    for($i=0;$i<count($results->{'details'});$i++)
    {
        echo $results->{'details'}[$i]->{'tariff_name'};
        echo "\\n";
        echo $results->{'details'}[$i]->{'order_price'};
        echo "\\n";
        echo $results->{'details'}[$i]->{'api_token'};
    }
}
else
{
    echo $results->{'msgtext'};
}
exit();
`;


export default data;