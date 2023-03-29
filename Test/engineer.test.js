const Engineer = require('../lib/engineer');
afterEach(() => {
    jest.restoreAllMocks()
  });
describe('Engineer Class', () => {
    const engineer = new Engineer('Maya', 123, 'maya@gmail.com', 'jorGitHub');
    jest.spyOn(engineer, 'getGithub')
    jest.spyOn(engineer, 'getRole')
    jest.spyOn(engineer, 'validateEmail')
    it('fourth parameter should be the value of github username', () => {
        expect(engineer.github).toEqual('jorGitHub');
    });
    it('should return github username', () => {
        expect(engineer.getGithub()).toEqual('jorGitHub');
      });
    it('should return Engineer', () => {
        expect(engineer.getRole()).toEqual('Engineer');
    })
    it('should return true if email is valid', () => {
        expect(engineer.validateEmail()).toBe(true);
      });
})