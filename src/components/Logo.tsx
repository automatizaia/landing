import React from 'react';
import { MessageSquare as MessageSquareCheck, ArrowUpRightFromCircle } from 'lucide-react';

export const Logo = () => {
  return (
    <a href="#" className="flex items-center">
      <div className="flex items-center">
        <MessageSquareCheck className="w-8 h-8 text-blue-600" />
        <ArrowUpRightFromCircle className="w-4 h-4 text-green-500 -ml-2 -mt-5" />
      </div>
      <div className="ml-2">
        <span className="font-bold text-xl tracking-tight">
          <span className="text-blue-600">Automa</span>
          <span className="text-green-500">tiza</span>
        </span>
      </div>
    </a>
  );
};