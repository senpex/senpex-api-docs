export default [
    {
        id: 0, status: 'Draft order',
        definition: 'Order has not been placed yet, but is saved as a draft .'
    },
    {
        id: 5, status: 'Waiting for pay',
        definition: 'Order is placed and is awaiting payment.'
    },
    {
        id: 7, status: 'Scheduled order',
        definition: 'Order is scheduled for a future date and time.'
    },
    {
        id: 8, status: 'Repeated order',
        definition: 'Order is a Repetitive Order.'
    },
    {
        id: 10, status: 'Paid order',
        definition: 'Order payment is done'
    },
    {
        id: 20, status: 'Courier selected',
        definition: 'Courier service is selected for the order'
    },
    {
        id: 25, status: 'Arrived to pickup location',
        definition: 'Courier arrived to pickup location'
    },
    {
        id: 30, status: 'Item in transit',
        definition: 'Package is in transit for delivery'
    },
    {
        id: 40, status: 'Item is delivered',
        definition: 'Package is delivered'
    },
    {
        id: 50, status: 'Item not given',
        definition: 'Package is not delivered'
    },
    {
        id: 90, status: 'Reported order',
        definition: 'Order is reported for some incident'
    },
    {
        id: 100, status: 'Cancelled order',
        definition: 'Order is cancelled by customer'
    },
    {
        id: 200, status: 'Cancelled by admin',
        definition: 'Order is cancelled by admin'
    },
]