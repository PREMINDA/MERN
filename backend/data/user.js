import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@exampl.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Doe",
    email: "john@exampl.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "jane mac",
    email: "jane@exampl.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
