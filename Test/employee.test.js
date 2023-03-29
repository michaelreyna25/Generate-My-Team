const Employee = require('../lib/employee');
afterEach(() => {
  jest.restoreAllMocks()
});
describe('Employee Class', () => {
  it('first parameter should be the value of name', () => {
    const employee = new Employee('Marry', 104, 'test@gmail.com');
    expect(employee.name).toEqual('Marry');
  });
  it('second parameter should be the value of id', () => {
    const employee = new Employee('Marry', 104, 'test@gmail.com');
    expect(employee.id).toEqual(104);
  });
  it('third parameter should be the value of email', () => {
    const employee = new Employee('Marry', 104, 'test@gmail.com');
    expect(employee.email).toEqual('test@gmail.com');
  });
  describe('methods should return correct values', () => {
    const employee = new Employee('Marry', 104, 'test@gmail.com');

    jest.spyOn(employee, 'getName')
    jest.spyOn(employee, 'getEmail')
    jest.spyOn(employee, 'getRole')
    jest.spyOn(employee, 'validateEmail')

    it('should return the name', () => {
      expect(employee.getName()).toEqual('Marry');
    });
    it('should return the email', () => {
      expect(employee.getEmail()).toEqual('test@gmail.com');
    });
    it('should return the role', () => {
      expect(employee.getRole()).toEqual('Employee');
    });
    it('should return true if email is valid', () => {
      expect(employee.validateEmail()).toBe(true);
    });
  })
})