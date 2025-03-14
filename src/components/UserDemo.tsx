// custom type props for users
type UserDemoProps = {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
};

export default function UserDemo({ users }: UserDemoProps) {
  console.log(users);
  return (
    <div>
      <h2>UserDemo</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h2>Name: {user.name}</h2>
          <p>email: {user.email}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}
