export default {
    request: [
        {
            key: 'order_id',
            type: 'string',
            desc: 'Unique ID of the specific order',
            required: true
        },
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
        }
    ],
    response: [
        {
            key: 'code',
            type: 'string',
            desc: 'It is always 0 for successful cancellation requests.'
        },
        {
            key: 'inserted_id',
            type: 'integer',
            desc: 'It is always -1 for successful cancellation requests.'
        },
        {
            key: 'details',
            type: '',
            desc: 'successful cancellation requests'
        },
        {
            key: 'refund_amount',
            type: 'float',
            desc: 'Cancellation Refund amount'
        }
    ]
}