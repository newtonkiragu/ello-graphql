import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Content from "../Content";
const Books = () => (
    <Query
        query={gql`
      {
        book {
          pages {
            pageIndex
            content,
            tokens {
              position,
              value
            }
          }
        }
      }

    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data.book.pages.map(({ pageIndex, content, tokens }) => (
                <div key={pageIndex} className="post">
                    <Content tokens={tokens} pageIndex={pageIndex} />
                </div>
            ));
        }}
    </Query>
);
export default Books;
