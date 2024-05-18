import Link from "next/link";
import React from "react";

type User = {
  id: number;
  name: string;
};

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <div>UsersPage</div>
      <Link href={"/"}>To main</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
