'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function InputValue() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
      e.preventDefault();
      // Process your input value or perform any necessary actions here
      console.log('Submitted:', inputValue);

      // Route to the "shop" page after successful submission
      router.push('./shop');
  }
  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="City, State, & Country..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
    </form>
  )
}
