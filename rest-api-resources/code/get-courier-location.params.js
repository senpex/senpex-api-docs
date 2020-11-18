export default {
    request: [
        {
            key: 'order_id',
            type: 'integer  ',
            desc: 'Unique ID of the specific order',
            required: true
        },
        {
            key: 'client_id',
            type: 'string  ',
            desc: 'Your client ID',
            required: true
        },
        {
            key: 'secret_id',
            type: 'string  ',
            desc: 'Your secret ID',
            required: true
        }
    ],
    response: [
        {
            key: 'code',
            type: 'string',
            desc: 'It is always 0 when the request is successful'
        },
        {
            key: 'data',
            type: 'object',
            desc: 'Courier data'
        },
        {
            key: 'pack_status',
            type: 'string',
            desc: 'Order Status'
        },
        {
            key: 'courier_name',
            type: 'string',
            desc: 'Name of assigned courier'
        },
        {
            key: 'courier_surname',
            type: 'string',
            desc: 'Surname of assigned courier'
        },
        {
            key: 'courier_phone_number',
            type: 'string',
            desc: 'Phone number of assigned courier'
        },
        {
            key: 'last_lng',
            type: 'string',
            desc: 'The longitude of the courier location'
        },
        {
            key: 'last_lat',
            type: 'string',
            desc: 'The latitude of the courier location'
        },
        {
            key: 'last_timezone',
            type: 'string',
            desc: 'Timezone of courier'
        },
        {
            key: 'last_location_date',
            type: 'string',
            desc: 'The date that courier has been in this location (UTC TIME)'
        },
        {
            key: 'last_seen_date',
            type: 'string',
            desc: 'The date of last courier APP usage (UTC TIME)'
        }
    ]
}