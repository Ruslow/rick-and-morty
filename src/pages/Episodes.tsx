import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxWrapper from "../components/Box/BoxWrapper";
import { getData } from "../redux/reduxSlice";
import { IInitState, Info } from "../redux/storeTypes";
import Grid from "@mui/material/Grid";
import Episode from "../components/Episode/Episode";
import PaginationButtons from "../help/PaginationButtons";
import Title from "../components/Title/Title";
import Loading from "../components/Loading/Loading";

const Episodes = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const info = useSelector((state: IInitState) => state.info) as Info;
  const episodes = useSelector((state: IInitState) => state.episodes);
  const loading = useSelector((state: IInitState) => state.loading);

  useEffect(() => {
    dispatch(getData({ query: "episode", page }));
  }, [dispatch, page]);
  return (
    <BoxWrapper>
      <Container>
        <Title>Episodes</Title>
        {loading ? (
          <Loading />
        ) : (
          <Box sx={{ flexGrow: 1, padding: "2em 0 8em" }}>
            <Grid sx={{ marginBottom: "4rem" }} container spacing={8}>
              {episodes.map((ep) => {
                const { id, ...rest } = ep;
                return <Episode key={id} {...rest} />;
              })}
            </Grid>
            <PaginationButtons setPage={setPage} info={info} />
          </Box>
        )}
      </Container>
    </BoxWrapper>
  );
};

export default Episodes;
