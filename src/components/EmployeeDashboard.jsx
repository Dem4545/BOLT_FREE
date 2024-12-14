import React from 'react';
    import { useQuery } from 'react-query';
    import { fetchEmployees } from '../services/api';

    const EmployeeDashboard = () => {
      const { data: employees } = useQuery('employees', fetchEmployees);

      return (
        <div>
          <h1>Employee Dashboard</h1>
          <ul>
            {employees?.map((employee) => (
              <li key={employee.id}>
                {employee.name} ({employee.role}) - {employee.department}
              </li>
            ))}
          </ul>
        </div>
      );
    };

    export default EmployeeDashboard;
