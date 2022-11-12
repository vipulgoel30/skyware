import { InView } from "react-intersection-observer";
function Solution(props) {
  const options = {
    threshold: 1,
  };
  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        console.log(inView ? "Solution" : "Home");
        props.onChangeLinkSet(inView ? "Solution" : "");
      }}
      threshold=".2"
      id="Solution"
    >
      <div className="bg-red-300">
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
        <h1>This is solution</h1>
      </div>
    </InView>
  );
}

export default Solution;
