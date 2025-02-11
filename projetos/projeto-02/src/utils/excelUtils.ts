import * as XLSX from 'xlsx';
import { Employee } from '../types/Employee';

export const exportToExcel = (employees: Employee[]) => {
  const worksheet = XLSX.utils.json_to_sheet(
    employees.map(emp => ({
      'First Name': emp.firstName,
      'Last Name': emp.lastName,
      'WhatsApp': emp.whatsapp,
      'Email': emp.email,
      'Phone': emp.phone
    }))
  );
  
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');
  
  XLSX.writeFile(workbook, 'employees.xlsx');
};