/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { Decoration } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DecorationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    season: "",
    holiday: "",
    isRentable: false,
    isAvailable: false,
    price: "",
    imglink: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [season, setSeason] = React.useState(initialValues.season);
  const [holiday, setHoliday] = React.useState(initialValues.holiday);
  const [isRentable, setIsRentable] = React.useState(initialValues.isRentable);
  const [isAvailable, setIsAvailable] = React.useState(
    initialValues.isAvailable
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [imglink, setImglink] = React.useState(initialValues.imglink);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setSeason(initialValues.season);
    setHoliday(initialValues.holiday);
    setIsRentable(initialValues.isRentable);
    setIsAvailable(initialValues.isAvailable);
    setPrice(initialValues.price);
    setImglink(initialValues.imglink);
    setErrors({});
  };
  const validations = {
    name: [],
    description: [],
    season: [],
    holiday: [],
    isRentable: [],
    isAvailable: [],
    price: [],
    imglink: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description,
          season,
          holiday,
          isRentable,
          isAvailable,
          price,
          imglink,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Decoration(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DecorationCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              season,
              holiday,
              isRentable,
              isAvailable,
              price,
              imglink,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              season,
              holiday,
              isRentable,
              isAvailable,
              price,
              imglink,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Season"
        isRequired={false}
        isReadOnly={false}
        value={season}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              season: value,
              holiday,
              isRentable,
              isAvailable,
              price,
              imglink,
            };
            const result = onChange(modelFields);
            value = result?.season ?? value;
          }
          if (errors.season?.hasError) {
            runValidationTasks("season", value);
          }
          setSeason(value);
        }}
        onBlur={() => runValidationTasks("season", season)}
        errorMessage={errors.season?.errorMessage}
        hasError={errors.season?.hasError}
        {...getOverrideProps(overrides, "season")}
      ></TextField>
      <TextField
        label="Holiday"
        isRequired={false}
        isReadOnly={false}
        value={holiday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              season,
              holiday: value,
              isRentable,
              isAvailable,
              price,
              imglink,
            };
            const result = onChange(modelFields);
            value = result?.holiday ?? value;
          }
          if (errors.holiday?.hasError) {
            runValidationTasks("holiday", value);
          }
          setHoliday(value);
        }}
        onBlur={() => runValidationTasks("holiday", holiday)}
        errorMessage={errors.holiday?.errorMessage}
        hasError={errors.holiday?.hasError}
        {...getOverrideProps(overrides, "holiday")}
      ></TextField>
      <SwitchField
        label="Is rentable"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isRentable}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              season,
              holiday,
              isRentable: value,
              isAvailable,
              price,
              imglink,
            };
            const result = onChange(modelFields);
            value = result?.isRentable ?? value;
          }
          if (errors.isRentable?.hasError) {
            runValidationTasks("isRentable", value);
          }
          setIsRentable(value);
        }}
        onBlur={() => runValidationTasks("isRentable", isRentable)}
        errorMessage={errors.isRentable?.errorMessage}
        hasError={errors.isRentable?.hasError}
        {...getOverrideProps(overrides, "isRentable")}
      ></SwitchField>
      <SwitchField
        label="Is available"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isAvailable}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              season,
              holiday,
              isRentable,
              isAvailable: value,
              price,
              imglink,
            };
            const result = onChange(modelFields);
            value = result?.isAvailable ?? value;
          }
          if (errors.isAvailable?.hasError) {
            runValidationTasks("isAvailable", value);
          }
          setIsAvailable(value);
        }}
        onBlur={() => runValidationTasks("isAvailable", isAvailable)}
        errorMessage={errors.isAvailable?.errorMessage}
        hasError={errors.isAvailable?.hasError}
        {...getOverrideProps(overrides, "isAvailable")}
      ></SwitchField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        value={price}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              season,
              holiday,
              isRentable,
              isAvailable,
              price: value,
              imglink,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Imglink"
        isRequired={false}
        isReadOnly={false}
        value={imglink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              season,
              holiday,
              isRentable,
              isAvailable,
              price,
              imglink: value,
            };
            const result = onChange(modelFields);
            value = result?.imglink ?? value;
          }
          if (errors.imglink?.hasError) {
            runValidationTasks("imglink", value);
          }
          setImglink(value);
        }}
        onBlur={() => runValidationTasks("imglink", imglink)}
        errorMessage={errors.imglink?.errorMessage}
        hasError={errors.imglink?.hasError}
        {...getOverrideProps(overrides, "imglink")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
