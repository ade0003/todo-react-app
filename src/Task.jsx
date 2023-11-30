export const Task = (props) => {
  return (
    <div style={{ backgroundColor: props.complete ? "green" : "white" }}>
      <h1>{props.taskName}</h1>
      <button onClick={() => props.handleComplete(props.id)}>
        {" "}
        Complete?{" "}
      </button>
      <button onClick={() => props.handleCancel(props.id)}> X </button>
    </div>
  );
};
