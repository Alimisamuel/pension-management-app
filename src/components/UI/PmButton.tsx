



import {
  Button,
  SxProps,
  Theme,
  ButtonProps as MuiButtonProps,
  CircularProgress,
} from "@mui/material";
import React, { ReactNode } from "react";

interface PmButtonProps extends Omit<MuiButtonProps, "variant"> {
  title?: string;
  children?: React.ReactNode;
  variant:
    | "primary"
    | "secondary"
    | "link"
    | "fade"
    | "outlined"
    | "danger"
    | "cart";
  sx?: SxProps<Theme>;
  loading?: boolean;
}

const ps: SxProps<Theme> = {
  //Primary
  bgcolor: "#155a27",
  color: "#F7F9F9",
  fontWeight: 700,
  fontSize: "14px",
  borderRadius: "4px",
  height: "50px",
  minWidth: "180px",
  textTransform: "initial",
  boxShadow: "0px 4px 12px 0px #00000026",

  "&:disabled": {
    bgcolor: "#ECF0E9",
    color: "#33412D",
    cursor: "not-allowed",
  },
};
const ss: SxProps<Theme> = {
  //Secondary
  bgcolor: "#115D31",
  border: "1px solid #1F271B",
  fontWeight: 500,
  fontSize: "16px",
  borderRadius: "4px",
  height: "50px",
  minWidth: "164px",
  textTransform: "initial",
  fontFamily: "outfit",
};
const vs: SxProps<Theme> = {
  // link
  bgcolor: "transparent",
  fontWeight: 500,
  fontSize: "16px",
  textDecoration: "underline",
  color: "#1F271B",
  ml: -1,
  width: "fit-content",
  textTransform: "initial",
  fontFamily: "outfit",
};
const fs: SxProps<Theme> = {
  //fade
  bgcolor: "#ECF0E9",
  color: "#33412D",
  fontWeight: 500,
  fontSize: "16px",
  borderRadius: "4px",
  minHeight: "50px",
  minWidth: "164px",
  textTransform: "initial",
  fontFamily: "outfit",
};
const os: SxProps<Theme> = {
  //outlined
  bgcolor: "transparent",
  border: "1px solid #051F10",
  fontWeight: 500,
  color: "#1F271B",
  fontSize: "16px",
  borderRadius: "8px",
  height: "50px",
  minWidth: "164px",
  textTransform: "initial",
  fontFamily: "outfit",
};
const cs: SxProps<Theme> = {
  //cart
  bgcolor: "transparent",
  border: "1px solid #051F10",
  fontWeight: 600,
  color: "#1F271B",
  fontSize: "13px",
  borderRadius: "50px",
  height: "32px",
  minWidth: "110px",
  textTransform: "initial",
  fontFamily: "outfit",
};

const ds: SxProps<Theme> = {
  //danger
  bgcolor: "#9D153F",
  fontWeight: 600,
  color: "#fff",
  fontSize: "12px",
  borderRadius: "8px",
  height: "44px",
  minWidth: "120px",
  textTransform: "initial",
  fontFamily: "outfit",
};
const PmButton: React.FC<PmButtonProps> = ({
  title,
  children,
  variant,
  sx,
  loading ,
  ...rest
}) => {
  const load_sx: SxProps<Theme> = {
    transition: "0.1s all linear",
    ...(loading && {
      width: "50px",
      p: 1,
      height:"50px",
      minWidth: 0,
      borderRadius: "50%",
    }),
  };
  const variant_style =
    variant === "primary"
      ? ps
      : variant === "secondary"
      ? ss
      : variant === "link"
      ? vs
      : variant === "fade"
      ? fs
      : variant === "cart"
      ? cs
      : variant === "danger"
      ? ds
      : os;
  return (
    <>
      <div className=" flex items-center justify-center">
        <Button
          className="button"
          sx={{ ...variant_style, ...load_sx, ...sx }}
          {...rest}
        >
          {loading ? (
            <CircularProgress size={30} sx={{ color: "inherit" }} />
          ) : (
            <>{children || title}</>
          )}
        </Button>
      </div>
    </>
  );
};

export default PmButton;

