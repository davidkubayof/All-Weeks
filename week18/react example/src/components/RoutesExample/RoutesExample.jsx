import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function RoutesExample() {
  // const myRoutes = ["0", "1", "2", "3"];
  // function nextRoute(currentPath) {
  //   if (Number(currentPath) === myRoutes.length - 1) return "0";
  //   return (Number(currentPath) + 1).toString();
  // }

  const { title } = useParams();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/myRoute1"
            element={<NavLink to={"/myRoute2"}>current: /myRoute1</NavLink>}
          />
          <Route
            path="/myRoute2"
            element={<NavLink to={"/myRoute3"}>current: /myRoute2</NavLink>}
          />
          <Route
            path="/myRoute3"
            element={<NavLink to={"/myRoute1"}>current: /myRoute3</NavLink>}
          />

          {/* <Route
            path="/myRoute1"
            element={<NavLink to={"/myRoute2/:id"}>current id: {id}</NavLink>}
          />
          <Route
            path="/myRoute2/:id"
            element={<NavLink to={"/myRoute3/:id"}>current id: {id}</NavLink>}
          />
          <Route
            path="/myRoute3"
            element={<NavLink to={"/myRoute1/:id"}>current id: {id}</NavLink>}
          /> */}

          {/* {myRoutes.map((myPath) => (
            <Route
              path={"/" + myPath}
              element={
                <NavLink to={"/" + nextRoute(myPath)}>
                  current route: /{myPath}
                </NavLink>
              }
            />
          ))} */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesExample;
