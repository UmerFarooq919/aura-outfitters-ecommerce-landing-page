import React, { useState } from 'react';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';

export default function StoreLayout() {
  const [selectedCategory, setSelectedCategory] = useState('All Collections');
