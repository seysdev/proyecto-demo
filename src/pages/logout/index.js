import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export function PageLogout() {
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch({
      type: "RESET_USER",
    });
    history.push("/login");
  }, [history, dispatch]);
  return <div></div>;
}
