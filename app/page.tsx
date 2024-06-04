import LikeButton from "./LikeButton";

function Header({ title }) {
  return <h1>{title ? title : "Develop. Preview. Ship."}</h1>;
}

export default function Homepage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Header title="React" />
      <Header title={undefined} />
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
