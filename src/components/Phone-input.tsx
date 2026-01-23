import React, { useState } from "react"

import { Input } from '@/components/ui/input';


interface PhoneInputProps {
  formData: {
    countryCodeAndName: string;
    phone: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement > ) => void;
}

const countryCodes = [
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+212', country: 'Morocco', flag: '🇲🇦' },
  { code: '+216', country: 'Tunisia', flag: '🇹🇳' },
  { code: '+962', country: 'Jordan', flag: '🇯🇴' },
  { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
  { code: '+213', country: 'Algeria', flag: '🇩🇿' },
  { code: '+218', country: 'Libya', flag: '🇱🇾' },
  { code: '+252', country: 'Somalia', flag: '🇸🇴' },
];

export function PhoneInput({ formData, handleChange }: PhoneInputProps) {

  
  return (
    <div className="grid sm:grid-cols-2 gap-2">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground"
        >
          رقم الهاتف <span className="text-red-500">*</span>
        </label>

        <div className="flex gap-2 col-span-2">
            <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="01xxxxxxxxx"
            required
            className="text-right " 
            dir="ltr"
          />
          <select
            name="countryCodeAndName"
            id="countryCodeAndName"
            value={formData.countryCodeAndName}
            onChange={handleChange}
            className="px-3 py-1 border border-input rounded-md bg-background text-foreground text-sm min-w-[100px]"
            required
          >
            
            {countryCodes.map((item) => (
              <option key={item.code} value={[item.code, item.country]} >
                {item.flag} {item.code}
              </option>
            ))}
          </select>


        </div>
    
    </div>
  );
}
