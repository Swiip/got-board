import React from "react";
import gql from "graphql-tag";

import useQuery from "../logic/apollo/use-query";

const HomePage = () => {
  const result = useQuery(gql`
    query HelloQuery {
      hello
    }
  `);

  const result2 = useQuery(gql`
    query UserQuery {
      user {
        mail
        nick
      }
    }
  `);

  const resultString = JSON.stringify(result);
  const result2String = JSON.stringify(result2);

  return (
    <div>
      Hello
      <p>{resultString}</p>
      <p>{result2String}</p>
    </div>
  );
};

export default HomePage;
