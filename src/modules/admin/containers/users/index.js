const otraConstant = 2;
function fn(props) {
    
  return <div>{props.name}{otraConstant}</div>;
}

export function AdminUsers() {
  const variableuno = 1;
  return (
    <div>
      Lista de usuarios {variableuno} {fn({ name: "sebastian" })} {otraConstant}
    </div>
  );
}
