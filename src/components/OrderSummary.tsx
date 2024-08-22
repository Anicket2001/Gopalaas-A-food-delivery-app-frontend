import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";
import { useState } from "react";
import CouponInput from "./CouponInput";
// import { Button } from "./ui/button";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const [discount, setDiscount] = useState<number>(0); // State to track discount

  const applyCoupon = (code: string) => {
    // Simple coupon logic, you can replace with API call or more complex logic
    if (code === "DISCOUNT10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );


    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;

    // return (totalWithDelivery).toFixed(2);
    const discountedTotal = totalWithDelivery - (totalWithDelivery * discount) / 100;

    return discountedTotal.toFixed(2);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span>Rs{getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div className="flex justify-between">
            <span>
              <Badge variant="outline" className="mr-2">
                {item.quantity}
              {/* <Button className="bg-red-600 px-1 py-1 h-5" onClick={reduceItem}>-</Button> */}
              </Badge>
              {item.name}
            </span>
            <span className="flex items-center gap-1">
              <Trash
                className="cursor-pointer"
                color="red"
                size={20}
                onClick={() => removeFromCart(item)}
              />
              Rs{((item.price * item.quantity)).toFixed(2)}
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>Rs{(restaurant.deliveryPrice).toFixed(2)}</span>
        </div>
        <Separator />
        <div className="mt-4">
          {/* Include the CouponInput component here */}
          <CouponInput applyCoupon={applyCoupon} />
        </div>
      </CardContent>
    </>
  );
};

export default OrderSummary;