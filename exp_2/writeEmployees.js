const fs = require('fs');


const employees = [
    { id: 1, name: "John Doe", position: "Software Engineer", salary: 75000 },
    { id: 2, name: "Jane Smith", position: "Project Manager", salary: 85000 },
    { id: 3, name: "Emily Jones", position: "UX Designer", salary: 65000 },
    { id: 4, name: "Michael Brown", position: "Data Analyst", salary: 70000 }
];

const jsonData = JSON.stringify(employees, null, 2);


fs.writeFile('employees.json', jsonData, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('Data successfully written to employees.json');
    }
});