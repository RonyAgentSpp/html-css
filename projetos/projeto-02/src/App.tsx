import React, { useState } from 'react';
import { Employee } from './types/Employee';
import { EmployeeForm } from './components/EmployeeForm';
import { EmployeeCard } from './components/EmployeeCard';
import { exportToExcel } from './utils/excelUtils';
import { UserPlus, Download } from 'lucide-react';

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | undefined>();

  const handleAddEmployee = (employee: Employee) => {
    setEmployees(prev => [...prev, employee]);
    exportToExcel([...employees, employee]);
  };

  const handleEditEmployee = (employee: Employee) => {
    setEmployees(prev =>
      prev.map(emp => (emp.id === employee.id ? employee : emp))
    );
    setEditingEmployee(undefined);
    exportToExcel(employees.map(emp => (emp.id === employee.id ? employee : emp)));
  };

  const handleDeleteEmployee = (id: string) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
    exportToExcel(employees.filter(emp => emp.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Employee Management</h1>
          <div className="flex gap-4">
            <button
              onClick={() => exportToExcel(employees)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              <Download size={20} />
              Export to Excel
            </button>
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <UserPlus size={20} />
              Add Employee
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {employees.map(employee => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onEdit={(emp) => {
                setEditingEmployee(emp);
                setIsFormOpen(true);
              }}
              onDelete={handleDeleteEmployee}
            />
          ))}
        </div>

        {(isFormOpen || editingEmployee) && (
          <EmployeeForm
            onSubmit={editingEmployee ? handleEditEmployee : handleAddEmployee}
            onClose={() => {
              setIsFormOpen(false);
              setEditingEmployee(undefined);
            }}
            initialData={editingEmployee}
          />
        )}
      </div>
    </div>
  );
}

export default App;