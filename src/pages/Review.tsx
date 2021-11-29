import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import * as yup from "yup";
import { Container, InputAdornment } from "@mui/material";
import BoxWrapper from "../components/Box/BoxWrapper";
import ButtonComp from "../components/Button/ButtonComp";
import {
  AccountCircle,
  AlternateEmail,
  Feedback,
  NumbersSharp,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { IReview } from "../redux/storeTypes";
import { addReview } from "../redux/reduxSlice";
import Title from "../components/Title/Title";
import { Link } from "react-router-dom";

const Review = () => {
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    age: "",
    feedback: "",
  };
  const onSubmit = (resp: IReview) => {
    dispatch(addReview(resp));
    setSuccess(true);
  };
  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    feedback: yup.string().required("Required"),
  });

  const FormControl = ({ children }: any) => {
    return <div style={{ margin: "2rem 0" }}>{children}</div>;
  };

  return (
    <BoxWrapper>
      <Container sx={{ display: "grid", placeItems: "center" }}>
        <Title>Leave a review</Title>
        {success ? (
          <>
            <h2>Thank you for the feedback</h2>
            <Link to="/reviews">
              <ButtonComp variant="contained" color="primary">
                Check the reviews
              </ButtonComp>
            </Link>
          </>
        ) : (
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <FormControl>
                <Field
                  id="name"
                  name="name"
                  component={TextField}
                  label="name"
                  focused
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                ></Field>
              </FormControl>
              <Field
                id="email"
                name="email"
                label="email"
                component={TextField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmail />
                    </InputAdornment>
                  ),
                }}
              ></Field>
              <FormControl>
                <Field
                  type="number"
                  id="age"
                  name="age"
                  component={TextField}
                  label="age"
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <NumbersSharp />
                      </InputAdornment>
                    ),
                  }}
                ></Field>
              </FormControl>
              <FormControl>
                <Field
                  variant="filled"
                  id="feedback"
                  name="feedback"
                  label="feedback"
                  component={TextField}
                  rows={4}
                  multiline
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <Feedback />
                      </InputAdornment>
                    ),
                  }}
                ></Field>
              </FormControl>
              <ButtonComp fullWidth type="submit" variant="contained">
                submit
              </ButtonComp>
            </Form>
          </Formik>
        )}
      </Container>
    </BoxWrapper>
  );
};

export default Review;
