type inter = {
  name: string;
  cls: string;
};

function Button({ name, cls }: inter) {
  return <button className={`btn ${cls}`}>{name}</button>;
}

export default Button;
