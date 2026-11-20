import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose }) {
  // Sample initial cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Minimalist Oxford Shirt',
      size: 'L',
      price: 85,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Urban Streetwear Runner',
      size: '42',
      price: 145,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300&auto=format&fit=crop'
    }
  ]);

}