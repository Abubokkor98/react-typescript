// build in types: string, number, boolean, void, null
// user defined types: object, array, enum, union, any, custom type

// for better props
type UserProps = {
  user: {
    name: string;
    age: number;
    isVerified: boolean;
    lang: string[];
  };
};

export default function User(props: UserProps) {
  return (
    <div>
      <h2>User</h2>
      <h3>{props.user.name}</h3>
      <p>{props.user.age} years old</p>
      {props.user.isVerified ? <p>Verified User </p> : <p> unVerified user </p>}
      {/* <p>{props.lang}</p> */}
      <p>
        Speaks:{" "}
        {props.user.lang.map((language, index) => (
          <span key={index}>{language}</span>
        ))}
      </p>
    </div>
  );
}
