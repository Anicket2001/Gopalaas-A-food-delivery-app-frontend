// src/components/CouponInput.tsx
import React, { useState } from 'react';

interface CouponInputProps {
  applyCoupon: (code: string) => void;
}

const CouponInput: React.FC<CouponInputProps> = ({ applyCoupon }) => {
  const [coupon, setCoupon] = useState('');

  const handleApplyCoupon = () => {
    applyCoupon(coupon);
  };

  return (
    <div className="flex flex-col space-y-4 p-4 bg-gray-100 rounded-md">
      <input
        type="text"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        placeholder="Enter your coupon code"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        onClick={handleApplyCoupon}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Apply Coupon
      </button>
    </div>
  );
};

export default CouponInput;
