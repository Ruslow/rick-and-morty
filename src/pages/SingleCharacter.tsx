import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BoxWrapper from "../components/Box/BoxWrapper";
import ButtonComp from "../components/Button/ButtonComp";
import { ICharacter } from "../redux/storeTypes";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const SingleCharacter = () => {
  const { id } = useParams();
  const [single, setSingle] = useState<{} | ICharacter>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        setSingle(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const { image, name, species, status, gender } = single as ICharacter;
  return (
    <BoxWrapper>
      <Container>
        <Link to="/character">
          <ButtonComp
            variant="contained"
            size="large"
            style={{ marginTop: "2rem" }}
          >
            <ArrowBackIcon /> Back to Characters
          </ButtonComp>
        </Link>
        {loading ? (
          <Loading />
        ) : (
          <article style={{ textAlign: "center" }}>
            <h2>{name}</h2>
            <img style={{ borderRadius: "10px" }} src={image} alt="" />
            <h2>{`Species: ${species}`}</h2>
            <h2>{`Gender: ${gender}`}</h2>
            <h2>{`Status ${status}`}</h2>
            <h2>Location</h2>
            <h2>Origin</h2>
          </article>
        )}
      </Container>
    </BoxWrapper>
  );
};

export default SingleCharacter;
