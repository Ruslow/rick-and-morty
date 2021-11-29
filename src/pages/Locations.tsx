import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxWrapper from "../components/Box/BoxWrapper";
import Loading from "../components/Loading/Loading";
import Location from "../components/Location/Location";
import Title from "../components/Title/Title";
import PaginationButtons from "../help/PaginationButtons";
import { getData } from "../redux/reduxSlice";
import { IInitState, Info } from "../redux/storeTypes";
const Locations = () => {
  const [page, setPage] = useState(1);
  const info = useSelector((state: IInitState) => state.info) as Info;
  const dispatch = useDispatch();
  const locations = useSelector((state: IInitState) => state.locations);
  useEffect(() => {
    dispatch(getData({ query: "location", page }));
  }, [dispatch, page]);
  const loading = useSelector((state: IInitState) => state.loading);

  return (
    <BoxWrapper>
      <Container>
        <Title>Locations</Title>
        {loading ? (
          <Loading />
        ) : (
          <Box sx={{ flexGrow: 1, padding: "2em 0 8em" }}>
            <Grid sx={{ marginBottom: "4rem" }} container spacing={8}>
              {locations.map((loc) => {
                const { id, ...rest } = loc;
                return <Location key={id} {...rest} />;
              })}
            </Grid>
            <PaginationButtons setPage={setPage} info={info} />
          </Box>
        )}
      </Container>
    </BoxWrapper>
  );
};

export default Locations;
