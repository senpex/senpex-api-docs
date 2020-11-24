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
            key: 'api_token',
            type: 'string ',
            desc: 'Token received from get_price request',
            required: true
        },
        {
            key: 'email',
            type: 'string ',
            desc: 'Email of user (For a registered user, the name,surname and phone number is set based on the email id)',
            required: true
        },
        {
            key: 'name',
            type: 'string ',
            desc: 'Name of user (A guest user has to provide the name)',
            required: false
        },
        {
            key: 'surname',
            type: 'string ',
            desc: 'Surname of user (A guest user has to provide the surname)',
            required: false
        },
        {
            key: 'phone_number',
            type: 'string ',
            desc: 'Phone number of user (A guest user has to provide the phone number)',
            required: false
        },
        {
            key: 'order_desc',
            type: 'string',
            desc: 'Any delivery notes(Usually it is a gate code, apartment number and so on)',
            required: true
        }, 
        {
            key: 'routes',
            type: 'array',
            desc: 'List of routes',
            required: false
        },
        {
            key: 'routes.rec_name',
            type: 'string ',
            desc: 'The name of receiver (Should be provided if not provided in "get_price" service)',
            required: false
        },
        {
            key: 'routes.rec_phone',
            type: 'string ',
            desc: 'The phone number of receiver (Should be provided if not provided on "get_price" service)',
            required: false
        },
        {
            key: 'snpx_user_email',
            type: 'integer ',
            desc: '1 = will send an email with password to user, if this email id does not exist in the system, 0 = will not send email',
            required: false
        },
        {
            key: 'snpx_order_email',
            type: 'integer ',
            desc: '1 = will send email about orders, 0 = will not send email',
            required: false
        },
        {
            key: 'snpx_order_not',
            type: 'integer ',
            desc: '1 = will send push notifications to a user if "device_id" will be provided, 0 = will not send notifications',
            required: false
        },
        {
            key: 'search_courier',
            type: 'integer ',
            desc: '1 = start searching for a courier just after creating a package, 0 = will not search for courier until "update_order_nots" will not be requested',
            required: false
        },
        {
            key: 'tip_amount',
            type: 'float ',
            desc: 'By default it is 0',
            required: false
        }
    ],
    response: [
        {
            key: 'inserted_id',
            type: 'integer',
            desc: 'The newly created order id'
        },
        {
            key: 'details',
            type: 'object',
            desc: 'The details of order'
        }
    ]
}
