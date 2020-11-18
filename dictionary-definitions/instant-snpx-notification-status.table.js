export default [
    {
        id: 0,
        status: 'Scheduled',
        definition: 'Order is scheduled.'
    },
    {
        id: 2,
        status: 'Order not found',
        definition: 'Order details not found'
    },
    {
        id: 3,
        status: 'URL not in valid format',
        definition: 'API url is not in valid format'
    },
    {
        id: 4,
        status: 'Failed to request (awaiting next)',
        definition: 'Instant Notification failed to send the request'
    },
    {
        id: 5,
        status: 'Failed and stopped',
        definition: 'Instant Notification failed and stopped'
    },
    {
        id: 10,
        status: 'Successfully finished',
        definition: 'Request successfully finished'
    },
    {
        id: '-1',
        status: 'Event thrown',
        definition: 'Request throws an error'
    }
]