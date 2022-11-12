import { Link } from "react-router-dom";

function Test() {
  return (
    <h1 className="bg-blue-300">
      <Link to="/navbar">This is some text</Link>
      This is test
    </h1>
  );
}

export default Test;
