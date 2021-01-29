export default {
    request: [
        {
            key: 'client_id',
            type: 'string',
            desc: 'Your client ID',
            required: true
        },
        {
            key: 'secret_id',
            type: 'string',
            desc: 'Your secret ID',
            required: true
        },
        {
            key: 'order_name',
            type: 'string',
            desc: 'Order name',
            required: true
        },
        {
            key: 'pack_from_text',
            type: 'string',
            desc: 'Address of pick-up location',
            required: true
        },
        {
            key: 'transport_id',
            type: 'integer',
            desc: 'See all available Transport types',
            required: true
        },
        {
            key: 'item_value',
            type: 'integer',
            desc: 'Estimated cost of your package',
            required: true
        },
        {
            key: 'pack_size_id',
            type: 'integer',
            desc: 'See all available Package size types',
            required: true
        },
        {
            key: 'taken_asap',
            type: 'integer',
            desc: 'If package has to be delivered urgently, value should be 1 else it is considered as a scheduled delivery and "schedule_date" parameter should also be provided',
            required: false
        },
        {
            key: 'schedule_date',
            type: 'string',
            desc: 'Should be provided in UTC format, if "taken_asap" = 0',
            required: false
        },
        {
            key: 'email',
            type: 'string',
            desc: 'Email of user. Will give information about user if its a registered user or not',
            required: false
        },
        {
            key: 'show_one_price',
            type: 'integer',
            desc: '1 or 0 (1 = only one price , 0 = both prices), Will show only Scheduled delivery price if schedule_date is provided , otherwise it will show Urgent Delivery price',
            required: false
        },
        {
            key: 'promo_code',
            type: 'string  ',
            desc: 'Promo code if available',
            required: false
        },
        {
            key: 'route_desc',
            type: 'string',
            desc: 'Usually this field used to pass "apartment number", but also additional notes from customer'
        },
        {
            key: 'rec_name',
            type: 'string',
            desc: 'Jonh Conor'
        },
        {
            key: 'rec_phone',
            type: 'integer',
            desc: '6501231234'
        },
        {
            key: 'routes',
            type: 'array',
            desc: '',
            required: true
        },
        {
            key: 'routes.route_to_text',
            type: 'string',
            desc: 'Address of drop-off location',
            required: true
        },
        {
            key: 'routes.route_desc',
            type: 'string',
            desc: 'Description of drop-off location',
            required: false
        },
        {
            key: 'routes.rec_name',
            type: 'string',
            desc: 'The name of Receiver at the drop-off address (can be empty, but in Order Creation process it is required.)',
            required: false
        },
        {
            key: 'routes.rec_phone',
            type: 'string',
            desc: 'Receiver phone number(can be empty but in Order Creation process it is required.)',
            required: false
        }
    ],
    response: [
        {
            key: 'code',
            type: 'string',
            desc: 'It is 0 for successful request execution'
        },
        {
            key: 'is_user_registered',
            type: 'boolean',
            desc: 'Returns true for a registered user'
        },
        {
            key: 'diff_in_minutes',
            type: 'integer',
            desc: 'Difference in minutes'
        },
        {
            key: 'api_token',
            type: 'string',
            desc: 'This token will be used for making payment in create_quick_order service'
        },
        {
            key: 'order_price',
            type: 'float',
            desc: 'Calculated order amount for given parameters'
        },
        {
            key: 'original_order_price',
            type: 'string',
            desc: 'Calculated order amount without discount'
        },
        {
            key: 'tariff_name',
            type: 'string',
            desc: 'The name of Tariff plan'
        },
        {
            key: 'order_discount',
            type: 'float',
            desc: 'Discount amount that has been used for promo code'
        },
        {
            key: 'tariff_id',
            type: 'string',
            desc: 'Id of the tariff plan'
        },
        {
            key: 'promo_code_info',
            type: 'string',
            desc: 'Promotion code if applied'
        },
        {
            key: 'company_id',
            type: 'string',
            desc: 'Id of company'
        },
        {
            key: 'tariff_duration_mins',
            type: 'string',
            desc: 'The maximum time (in minutes) for using this tariff plan .'
        },
        {
            key: 'distance_miles',
            type: 'float',
            desc: 'The distance in mile from the pick-up to drop-off'
        },
        {
            key: 'distance_time_seconds',
            type: 'float',
            desc: 'Time in seconds for covering the distance'
        },
        {
            key: 'schedule_date',
            type: 'string',
            desc: 'Date of the scheduled delivery'
        },
        {
            key: 'item_value',
            type: 'string',
            desc: 'Estimated cost of your package'
        },
        {
            key: 'pack_size_id',
            type: 'string',
            desc: 'See all available Package size types'
        },
        {
            key: 'transport_id',
            type: 'string',
            desc: 'See all available Transport types'
        },
        {
            key: 'pack_from_lat',
            type: 'float',
            desc: 'The latitude of the pick-up location'
        },
        {
            key: 'pack_from_lng',
            type: 'float',
            desc: 'The longitude of the pick-up location'
        },
        {
            key: 'routes',
            type: 'string',
            desc: 'Route details in string format'
        },
        {
            key: 'routes_json',
            type: 'string',
            desc: 'Route details in json format'
        },
        {
            key: 'routes.route_to_text',
            type: 'string',
            desc: 'The address of drop-off address'
        },
        {
            key: 'routes.route_desc',
            type: 'string',
            desc: 'The route description, if it was passed in the request'
        },
        {
            key: 'routes.route_rec_name',
            type: 'string',
            desc: 'The receiver name, if it was passed in the request'
        },
        {
            key: 'routes.route_rec_phone',
            type: 'string',
            desc: 'The receiver phone, if it was passed in the request'
        },
        {
            key: 'routes.route_to_lat',
            type: 'float',
            desc: 'The Latitude of drop-off address'
        },
        {
            key: 'routes.route_to_lng',
            type: 'float',
            desc: 'The Longitude of drop-off address'
        },
        {
            key: 'route_distance',
            type: 'float',
            desc: 'The distance of that route from pick-up to drop-off location'
        },
        {
            key: 'route_distance_time',
            type: 'float',
            desc: 'The time to cover the distance of the route from pick-up to drop-off location'
        },
        {
            key: 'tariff_duration_hours',
            type: 'float',
            desc: 'Total hours for the delivery'
        },
        {
            key: 'tariff_duration_days',
            type: 'integer',
            desc: 'Total days for the delivery'
        },
        {
            key: 'expire_mins',
            type: 'integer',
            desc: 'The expiry time of the api token (in minutes) .'
        }
    ]
}
