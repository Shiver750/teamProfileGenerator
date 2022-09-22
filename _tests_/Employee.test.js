const Employee = require('../lib/Employee');

// Make employee object
test('create employee object', () => {
    const employee = new Employee('John', 45, 'johnwiley@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

//gets name via getName

test('gets employee name', () => {
    
    const employee = new Employee('John', 45, 'johnwiley@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//gets id via getId
test('gets employee ID', () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//gets email via getEmail()
test('gets employee email', () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


//gets role via getRole()
test('gets role of employee', () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 