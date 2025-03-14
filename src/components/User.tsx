// for better props
type UserProps = {
  name: string;
  age: number;
  isVerified: boolean;
};

export default function User(props: UserProps) {
  return (
    <div>
      <h2>User</h2>
      <h3>{props.name}</h3>
      <p>{props.age} years old</p>
      {props.isVerified ? <p>Verified User </p> : <p> unVerified user </p>}
    </div>
  );
}
