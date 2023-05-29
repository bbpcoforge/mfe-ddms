import * as Acl from "acljs";
var permissions = {
  roles: [
    { name: "user" },
    { name: "guest", parent: "user" },
    { name: "member", parent: "guest" },
    { name: "admin", parent: "member" },
    { name: "superAdmin" },
  ],
  resources: [
    { name: "organizations" },
    { name: "roles" },
    { name: "users" },
    { name: "actions" },
    { name: "businessFunctions" },
    { name: "admin" },
    { name: "account" },
    { name: "payment" },
    { name: "loans" },
    { name: "cashmanagement" },
    { name: "tradefinance" },
    { name: "preferences" },
  ],
  rules: [
    {
      access: "allow",
      role: "user",
      privileges: ["view"],
      resources: [
        "account",
        "payment",
        "loans",
        "cashmanagement",
        "tradefinance",
        "preferences",
      ],
    },
    {
      access: "allow",
      role: "guest",
      privileges: ["view"],
      resources: ["roles", "users", "admin"],
    },
    {
      access: "allow",
      role: "member",
      privileges: ["create"],
      resources: ["roles", "users"],
    },
    {
      access: "allow",
      role: "admin",
      privileges: ["create", "edit", "delete"],
      resources: ["roles", "users", "actions", "businessFunctions"],
    },
    {
      access: "allow",
      role: "superAdmin",
      privileges: null,
      resources: null,
    },
  ],
};
const acl = new Acl(permissions);
export { acl };