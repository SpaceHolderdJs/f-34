class UsersService {
  static users = new Array(5).fill({ id: 0, name: "", age: 0 }).map((_, i) => ({
    id: i,
    name: `Name-${i}`,
    age: Math.floor(Math.random() * 20),
  }));

  static getAll = () => UsersService.users;

  static getOne = (id) => {
    return UsersService.users.find((user) => user.id === id);
  };

  static create = (user) => {
    UsersService.users.push(user);
  };
}

module.exports = UsersService;
