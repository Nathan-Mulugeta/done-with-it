import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";

function AppFormPicker({
  items,
  name,
  placeholder,
  numberOfColumns,
  PickerItemComponent,
  width,
}) {
  const { setFieldValue, values, touched, errors } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
