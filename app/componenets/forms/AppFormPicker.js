import React from "react";
import { useFormikContext } from "formik";

import Picker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (<React.Fragment>
    
    <Picker
      items={items}
      numberOfColumns={numberOfColumns}
      onSelectItem={(item) => setFieldValue(name, item)}
      PickerItemComponent={PickerItemComponent}
      placeholder={placeholder}
      selectedItem={values[name]}
      width={width}
    />
    <ErrorMessage error={errors[name]} visible={touched[name]} />
  
    </React.Fragment>)
}

export default AppFormPicker;
