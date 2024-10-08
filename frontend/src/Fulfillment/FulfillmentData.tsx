export default {
    orders: [
      {
        _id: 1,
        TrackingID: '9400 1000 0000 0000 0000 00',
        isShipped: true,
        ShippedDate: '02/21/2021',
        isDelivered: false,
        deliveredDate: null
      },
      {
        _id: 2,
        TrackingID: '9205 5000 0000 0000 0000 00',
        isShipped: false,
        ShippedDate: null,
        isDelivered: false,
        deliveredDate: null,
      },
      {
        _id: 3,
        TrackingID: '9303 3000 0000 0000 0000 00',
        isShipped: true,
        ShippedDate: '02/21/2021',
        isDelivered: true,
        deliveredDate: '02/23/2021',
      },
    ]
  }