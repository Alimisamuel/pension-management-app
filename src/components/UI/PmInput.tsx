import { InputLabel, TextField, TextFieldProps } from "@mui/material";
import React from "react";

type PmInputProps = TextFieldProps & {
  label?: string;
  borderColor?: string;
  textColor?: string;
  placeholderColor?: string;
  labelColor?: string;
  minHeight?: string;
};

const PmInput: React.FC<PmInputProps> = ({
  label,
  borderColor = "#B7B7B7",
  textColor = "#1F271B",
  placeholderColor = "#667085",
  labelColor = "#B7B7B7",
  minHeight = "56px",
  ...rest
}) => {
  return (
    <div>
      {label && (
        <InputLabel
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            mb: 1,
            color: labelColor, // ✅ custom label color
          }}
        >
          {label}
        </InputLabel>
      )}
      <TextField
        {...rest}
        sx={{
          "& .MuiOutlinedInput-root": {
            fontWeight: 500,
            color: textColor, // ✅ input text color
            fontSize: "14px",
            minHeight:minHeight ,
            height:minHeight,
            "& fieldset": {
              borderColor: borderColor, // ✅ border color
              borderRadius: "4px",
              borderWidth: "1px",
            },
            "&:hover fieldset": {
              borderColor: borderColor,
            },
            "&.Mui-focused fieldset": {
              borderColor: borderColor,
            },
          },
          "& .MuiInputBase-input::placeholder": {
            color: placeholderColor, // ✅ placeholder color
            opacity: 1, // so MUI doesn’t fade it
          },
        }}
      />
    </div>
  );
};

export default PmInput;
