import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(10).keys()];
  const history = useHistory();
  const onClockDetailA = () => history.push("/page1/detailA");
  return (
    <div>
      <h1>Page1ページです</h1>
      <div>
        <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
        <br />
        <Link to="/page1/detailB">DetailB</Link>
        <br />
        <button onClick={onClockDetailA}>DetailA</button>
      </div>
    </div>
  );
};
