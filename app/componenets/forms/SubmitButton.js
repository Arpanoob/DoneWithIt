import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";
import color from "../../config/color";

function SubmitButton(props) {
  const { handleSubmit } = useFormikContext(); // Corrected prop name

  return <AppButton color={color.primary} onPress={handleSubmit}>{props.title}</AppButton>;
}

export default SubmitButton;
