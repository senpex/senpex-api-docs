export default {
    request: [
        {
            key: 'order_id',
            type: 'string ',
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
            key: 'snpx_instant_not',
            type: 'integer ',
            desc: 'Enables notifications if value="1" Disables notifications if value="0" By default notifications are enabled',
            required: false
        },
        {
            key: 'snpx_emails',
            type: 'integer ',
            desc: 'Emails for orders will be sent if value="1" Emails won\'t be sent if value="0" By default email notifications are enabled',
            required: false
        },
        {
            key: 'snpx_nots',
            type: 'integer ',
            desc: 'Enables push notifications if value="1" and "device_id" is provided  Disables push notifications="0" By default push notifications are enabled',
            required: false
        },
        {
            key: 'snpx_sms',
            type: 'integer ',
            desc: 'Enables sms notifications if value="1" Disables sms notifications if value="0" By default response sms notifications are disabled',
            required: false
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
            type: 'string',
            desc: 'Inserted Id'
        },
        {
            key: 'details',
            type: 'object',
            desc: 'Notification object'
        },
        {
            key: 'snpx_emails',
            type: 'integer',
            desc: '1 =enabled , 0 = disabled'
        },
        {
            key: 'snpx_nots',
            type: 'integer',
            desc: '1 =enabled , 0 = disabled'
        },
        {
            key: 'snpx_sms',
            type: 'integer',
            desc: '1 =enabled , 0 = disabled'
        },
        {
            key: 'snpx_instant_not',
            type: 'integer',
            desc: '1 =enabled , 0 = disabled'
        }
    ]
}