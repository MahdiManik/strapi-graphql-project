// import React from "react";
// import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Home from "./Pages/Home/Home.jsx";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql/",
  cache: new InMemoryCache(),
});

function Main() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
              {/* errorElement: <ErrorPage /> */}
            </Route>
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <ApolloProvider client={client} router={router}>
//     <App />
//   </ApolloProvider>
// );

export default Main;
