import React, { useEffect, useState } from "react";
import CardComp from "../components/Card/Card";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/reduxSlice";
import { ICharacter, IInitState, Info } from "../redux/storeTypes";
import BoxWrapper from "../components/Box/BoxWrapper";
import PaginationButtons from "../help/PaginationButtons";
import Title from "../components/Title/Title";
import Loading from "../components/Loading/Loading";

function Home() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const char = useSelector(
    (state: IInitState) => state.characters
  ) as ICharacter[];
  const info = useSelector((state: IInitState) => state.info) as Info;
  const loading = useSelector((state: IInitState) => state.loading);
  useEffect(() => {
    dispatch(getData({ query: "character", page }));
  }, [dispatch, page]);

  return (
    <BoxWrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Container>
            <Title>Characters</Title>
            <Box sx={{ flexGrow: 1, padding: "2em 0 8em" }}>
              <Grid sx={{ marginBottom: "4rem" }} container spacing={8}>
                {loading ? (
                  <Loading />
                ) : char.length === 0 ? null : (
                  char.map((ch) => {
                    const { image, name, species, id } = ch;

                    return (
                      <Grid key={id} item xs={4}>
                        <CardComp
                          id={id}
                          image={image}
                          name={name}
                          species={species}
                        />
                      </Grid>
                    );
                  })
                )}
              </Grid>
              <PaginationButtons setPage={setPage} info={info} />
            </Box>
          </Container>
        </>
      )}
    </BoxWrapper>
  );
}

export default Home;
