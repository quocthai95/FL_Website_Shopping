export interface OrderModel {
    guestInfor: {
        other: string,
        name: string,
        email: string,
        phoneNumber: string
      };
      status: string;
      listProduct: Array<any>;
      _id: string;
      orderId: string;
      totalPrice: number;
}
