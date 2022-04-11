import { React, useMemo, useState } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Content from "../Content";
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
    // const pagesData = data.books.pages

    // const currentTokensData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //     return pagesData.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage]);

    if (loading) return <p>Loading Masterpieces ...</p>

    if (error) return <pre>{error.message}</pre>

    // if (data) {
    //     const pagesData = data.books.pages
    // }

    if (data) {
        return(
            <Content data={data.book} pageSize={PageSize}/>
        )
    }
    // return (
    //
    // )

};
export default Books;
