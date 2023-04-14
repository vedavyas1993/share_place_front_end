import React from "react";
import UsersList from "../components/UsersList";
function Users() {
  const USERS = [
    {
      id: "u1",
      name: "vyas",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      places: 5,
    },
  ];
  return <UsersList items={USERS} />;
}

export default Users;
