export default {
    request: [
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
            key: 'search_array',
            type: 'array ',
            desc: 'Filter order list based on order_id(p.id),order_name(send_name) or pickup address (pack_from_text)',
            required: false
        },
        {
            key: 'start',
            type: 'integer ',
            desc: 'Returns the next 12 list of Orders from the number mentioned here',
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
            type: 'array',
            desc: 'List of all orders'
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
            key: 'sender_name',
            type: 'string',
            desc: 'The name of order owner'
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
        }
    ]
}