export default function TabButton(props) {
  return (
    <button
      className={
        props.activeContentIndex === props.activeCondition ? "active" : ""
      }
      onClick={() => props.setActiveContentIndex(props.activeCondition)}
    >
      {props.children}
    </button>
  );
}
