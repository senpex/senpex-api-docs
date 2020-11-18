export default {
    request: [
        {
            key: 'order_id',
            type: 'integer ',
            desc: 'Unique ID of the specific order',
            required: true
        },
        {
            key: 'client_id',
            type: 'string ',
            desc: 'Your client ID',
            required: true
        },
        {
            key: 'secret_id',
            type: 'string ',
            desc: 'Your secret ID',
            required: true
        },
        {
            key: 'include_images',
            type: 'integer ',
            desc: 'Return images if value="1" Do not return images if value="0" By default response doesn\'t contain images',
            required: false
        },
        {
            key: 'include_history',
            type: 'integer ',
            desc: 'Return history if value="1" Do not return history if value="0" By default response doesn\'t contain history',
            required: false
        },
        {
            key: 'include_routes',
            type: 'integer ',
            desc: 'Include routes if value="1" Do not return routes if value="0" By default response doesn\'t',
            required: false
        }
    ],
    response: [
        {
            key: 'code',
            type: 'string',
            desc: 'It is always 0 for successful retrieve response'
        },
        {
            key: 'data',
            type: 'object',
            desc: 'Order data'
        },
        {
            key: 'id',
            type: 'string',
            desc: 'The order id'
        },
        {
            key: 'order_name',
            type: 'string',
            desc: 'The name of order'
        },
        {
            key: 'pack_size_id',
            type: 'string',
            desc: 'Size of package'
        },
        {
            key: 'pack_transport_id',
            type: 'string',
            desc: 'Selected transport id'
        },
        {
            key: 'pack_from_lat',
            type: 'string',
            desc: 'Latitude of pick-up address'
        },
        {
            key: 'pack_from_lng',
            type: 'string',
            desc: 'Longitude of pick-up address'
        },
        {
            key: 'pack_from_text',
            type: 'string',
            desc: 'The pick-up address'
        },
        {
            key: 'taken_asap',
            type: 'string',
            desc: '1 is for Urgent deliver, 0 for Scheduled delivery'
        },
        {
            key: 'schedule_date',
            type: 'string',
            desc: 'Scheduled date of Order'
        },
        {
            key: 'distance_miles',
            type: 'string',
            desc: 'Distance between pick-up and drop_off address'
        },
        {
            key: 'distance_time_seconds',
            type: 'string',
            desc: 'Time in seconds between pick-up and drop_off address'
        },
        {
            key: 'pack_map_img',
            type: 'string',
            desc: 'The link to google map image'
        },
        {
            key: 'pack_price',
            type: 'string',
            desc: 'The price of the order'
        },
        {
            key: 'rest_api_vers',
            type: 'string',
            desc: 'Version of API that created order'
        },
        {
            key: 'route_count',
            type: 'string',
            desc: 'The count of drop-off addresses'
        },
        {
            key: 'last_pack_to_lat',
            type: 'string',
            desc: 'Latitude of last drop-off address'
        },
        {
            key: 'last_pack_to_lng',
            type: 'string',
            desc: 'Longitude of last drop-off address'
        },
        {
            key: 'last_pack_to_text',
            type: 'string',
            desc: 'The address of last drop_off location'
        },
        {
            key: 'last_receiver_name',
            type: 'string',
            desc: 'The name of receiver on last last drop-off address'
        },
        {
            key: 'last_receiver_phone_number',
            type: 'string',
            desc: 'The phone number of receiver on last drop-off address'
        },
        {
            key: 'conn_client_name',
            type: 'string',
            desc: 'Order Creation Source'
        },
        {
            key: 'pack_status',
            type: 'string',
            desc: 'Order Status'
        },
        {
            key: 'order_status_text',
            type: 'string',
            desc: 'The Order Status text'
        },
        {
            key: 'courier_name',
            type: 'string',
            desc: 'The name of courier if already assigned'
        },
        {
            key: 'courier_surname',
            type: 'string',
            desc: 'The surname of courier if already assigned'
        },
        {
            key: 'courier_cell',
            type: 'string',
            desc: 'The phone number of courier if already assigned'
        },
        {
            key: 'sender_surname',
            type: 'string',
            desc: 'The surname of order owner'
        },
        {
            key: 'sender_cell',
            type: 'string',
            desc: 'The phone number of order owner'
        },
        {
            key: 'sender_email',
            type: 'string',
            desc: 'The email of order owner'
        },
        {
            key: 'sender_user_id',
            type: 'string',
            desc: 'The ID of order owner'
        },
        {
            key: 'status_sender',
            type: 'string',
            desc: 'The Order Status text'
        },
        {
            key: 'order_images',
            type: 'array',
            desc: 'List of order images'
        },
        {
            key: 'order_images.pack_img',
            type: 'string',
            desc: 'The link to original image uploaded by sender / courier'
        },
        {
            key: 'order_images.inserted_date',
            type: 'string',
            desc: 'The datetime when image was uploaded'
        },
        {
            key: 'order_images.img_type',
            type: 'string',
            desc: '1 = uploaded by sender , 2 uploaded by courier'
        },
        {
            key: 'order_images.pack_img_status',
            type: 'string',
            desc: 'The status of order on which image has been uploaded'
        },
        {
            key: 'history',
            type: 'array',
            desc: 'List of operations on that order'
        },
        {
            key: 'history.operation_name',
            type: 'string',
            desc: 'The name of operation'
        },
        {
            key: 'history.operation_date',
            type: 'string',
            desc: 'The datetime of operation'
        },
        {
            key: 'history.pack_status',
            type: 'string',
            desc: 'Order Status'
        },
        {
            key: 'routes',
            type: 'array',
            desc: 'List of routes'
        },
        {
            key: 'routes.route_to_text',
            type: 'string',
            desc: 'The address of drop-off address'
        },
        {
            key: 'routes.route_to_lat',
            type: 'string',
            desc: 'The Latitude of drop-off address'
        },
        {
            key: 'routes.route_to_lng',
            type: 'string',
            desc: 'The Longitude of drop-off address'
        },
        {
            key: 'routes.route_status',
            type: 'string',
            desc: 'Route Status'
        },
        {
            key: 'routes.route_delivery_date',
            type: 'string',
            desc: 'Datetime when the order was delivered'
        },
        {
            key: 'rec_phone',
            type: 'string',
            desc: 'Receivers phone number'
        },
        {
            key: 'rec_name',
            type: 'string',
            desc: 'Receivers name'
        },
        {
            key: 'route_delivery_date',
            type: 'string',
            desc: 'Receivers order receipt date'
        },
        {
            key: 'route_distance',
            type: 'string',
            desc: 'Route distance'
        },
        {
            key: 'route_distance_time',
            type: 'string',
            desc: 'Route time to reach from pick-up to this drop-off'
        }
    ]
}