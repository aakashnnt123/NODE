const fs = require('fs');


fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const employees = JSON.parse(data);

   
    const highSalaryEmployees = employees.filter(employee => employee.salary > 70000);

    console.log('Employees with a salary greater than $70,000:');
    console.log(highSalaryEmployees);

  
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    const averageSalary = totalSalary / employees.length;

    console.log(`Average salary of employees: $${averageSalary}`);
});