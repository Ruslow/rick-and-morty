import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { hideMenu } from "../../redux/reduxSlice";
import HomeIcon from "@mui/icons-material/Home";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { IInitState } from "../../redux/storeTypes";
import { ThumbUpAlt } from "@mui/icons-material";

export default function IconMenu() {
  const show = useSelector((state: IInitState) => state.menuShow);
  const dispatch = useDispatch();
  return (
    <Paper
      sx={{
        width: "15vw",
        height: "100%",
        position: "fixed",
        backgroundColor: "primary.main",
        color: "black",
        top: "64px",
        transform: `${!show ? "translateX(-100%)" : "translateX(0)"}`,
        transition: "0.4s",
        zIndex: 100,
      }}
    >
      <MenuList>
        <Link onClick={() => dispatch(hideMenu())} to="/">
          <MenuItem>
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </MenuItem>
        </Link>
        <Link onClick={() => dispatch(hideMenu())} to="/character">
          <MenuItem>
            <ListItemIcon>
              <TagFacesIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Characters</ListItemText>
          </MenuItem>
        </Link>
        <Link onClick={() => dispatch(hideMenu())} to="/episodes">
          <MenuItem>
            <ListItemIcon>
              <SlowMotionVideoIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Episodes</ListItemText>
          </MenuItem>
        </Link>
        <Link onClick={() => dispatch(hideMenu())} to="locations">
          <MenuItem>
            <ListItemIcon>
              <LocationOnIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Locations</ListItemText>
          </MenuItem>
        </Link>
        <Link onClick={() => dispatch(hideMenu())} to="reviews">
          <MenuItem>
            <ListItemIcon>
              <ThumbUpAlt fontSize="small" />
            </ListItemIcon>
            <ListItemText>Reviews</ListItemText>
          </MenuItem>
        </Link>
        <Divider />
        <Link onClick={() => dispatch(hideMenu())} to="review">
          <MenuItem>
            <ListItemIcon>
              <RateReviewIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Leave a review</ListItemText>
          </MenuItem>
        </Link>{" "}
      </MenuList>
    </Paper>
  );
}
