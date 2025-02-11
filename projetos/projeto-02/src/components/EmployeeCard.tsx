import React from 'react';
import { Employee } from '../types/Employee';
import { Pencil, Trash2, Phone, Mail, MessageSquare } from 'lucide-react';

interface EmployeeCardProps {
  employee: Employee;
  onEdit: (employee: Employee) => void;
  onDelete: (id: string) => void;
}

export function EmployeeCard({ employee, onEdit, onDelete }: EmployeeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex gap-6">
      <img
        src={employee.photo || 'https://via.placeholder.com/100'}
        alt={`${employee.firstName} ${employee.lastName}`}
        className="w-[100px] h-[100px] rounded-full object-cover"
      />
      
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">
            {employee.firstName} {employee.lastName}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(employee)}
              className="p-1 text-gray-600 hover:text-blue-600"
            >
              <Pencil size={20} />
            </button>
            <button
              onClick={() => onDelete(employee.id)}
              className="p-1 text-gray-600 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <MessageSquare size={18} />
            <a
              href={`https://wa.me/${employee.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              {employee.whatsapp}
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Mail size={18} />
            <a
              href={`mailto:${employee.email}`}
              className="hover:text-blue-600"
            >
              {employee.email}
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Phone size={18} />
            <a
              href={`tel:${employee.phone}`}
              className="hover:text-blue-600"
            >
              {employee.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}