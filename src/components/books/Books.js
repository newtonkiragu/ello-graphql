import { React } from 'react';
import gql from "graphql-tag";
import Content from "../content/Content";
import { useQuery } from '@apollo/client';

let PageSize = 2;
const query = gql`
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
`;
const Books = () => {
    const {loading, data, error} = useQuery(query)

    if (loading) return <p>Loading Book ...</p>

    if (error) return <pre>{error.message}</pre>

    if (data) {
        return(
            <Content data={data.book} pageSize={PageSize}/>
        )
    }


};
export default Books;