import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Avatar, Divider, Stack, Typography, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageIcon from '@mui/icons-material/Language';


export default function AccountMenu() {
  return (
    <Stack>
      <Image />
      <NavMenu />
      <ButtonMenu />
    </Stack>
  )
}








// ButtonMenu
function ButtonMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" justifyContent={"space-between"} alignItems="center">
      <Button  sx={{
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)'
        },
        borderRadius: "50px",
        color: "black",
        fontWeight: "600",
        fontSize: "14px",
        textTransform: "none",
        padding: "8px 14px"
      }}>Airbnb your home</Button>
      <LanguageIcon fontSize='small' />
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{ background: "white", borderRadius: "50px", height: "50px", padding: "8px 8px 8px 14px", display: "flex", alignItems: "center" }}
      >
        <MenuIcon sx={{ fill: "black", pr: 2, fontSize: "20px" }} />
        <Avatar sx={{ width: "32px", height: "32px" }} />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
}

// NavMenu
function NavMenu() {
  return (
    <Stack direction="row" justifyContent={"space-between"} alignItems="center"
      sx={{
        '&:hover': {
          boxShadow: 1
        },
        width: "310px",
        padding: "5px 5px 5px 0px",
        borderRadius: "50px",
        border: "1px solid #9b9b9b",
      }}
    >
      <MenuItem sx={{ fontWeight: "600", fontSize: "14px" }}>Anywhere</MenuItem>
      <Divider orientation="vertical" flexItem />
      <MenuItem sx={{ fontWeight: "600", fontSize: "14px" }}>Any week</MenuItem>
      <Divider orientation="vertical" flexItem />
      <MenuItem sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "14px" }}>Add guests
        <SearchRoundedIcon sx={{ color: "white", backgroundColor: "#ff385c", borderRadius: "50px", padding: "5px", fontSize: "medium" }} /></MenuItem>

    </Stack>
  )
}

function Image() {
  return (
    <div>
      <img src="https://a0.awsstatic.com/libravatar/user.png" alt="" />
    </div>
  )
}
