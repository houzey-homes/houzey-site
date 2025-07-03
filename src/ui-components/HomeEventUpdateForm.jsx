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
import { HomeEvent } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function HomeEventUpdateForm(props) {
  const {
    id: idProp,
    homeEvent: homeEventModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    isInstall: false,
    isTakedown: false,
    isMaintenance: false,
    eventDateTime: "",
  };
  const [isInstall, setIsInstall] = React.useState(initialValues.isInstall);
  const [isTakedown, setIsTakedown] = React.useState(initialValues.isTakedown);
  const [isMaintenance, setIsMaintenance] = React.useState(
    initialValues.isMaintenance
  );
  const [eventDateTime, setEventDateTime] = React.useState(
    initialValues.eventDateTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = homeEventRecord
      ? { ...initialValues, ...homeEventRecord }
      : initialValues;
    setIsInstall(cleanValues.isInstall);
    setIsTakedown(cleanValues.isTakedown);
    setIsMaintenance(cleanValues.isMaintenance);
    setEventDateTime(cleanValues.eventDateTime);
    setErrors({});
  };
  const [homeEventRecord, setHomeEventRecord] =
    React.useState(homeEventModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(HomeEvent, idProp)
        : homeEventModelProp;
      setHomeEventRecord(record);
    };
    queryData();
  }, [idProp, homeEventModelProp]);
  React.useEffect(resetStateValues, [homeEventRecord]);
  const validations = {
    isInstall: [],
    isTakedown: [],
    isMaintenance: [],
    eventDateTime: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          isInstall,
          isTakedown,
          isMaintenance,
          eventDateTime,
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
          await DataStore.save(
            HomeEvent.copyOf(homeEventRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "HomeEventUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Is install"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isInstall}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isInstall: value,
              isTakedown,
              isMaintenance,
              eventDateTime,
            };
            const result = onChange(modelFields);
            value = result?.isInstall ?? value;
          }
          if (errors.isInstall?.hasError) {
            runValidationTasks("isInstall", value);
          }
          setIsInstall(value);
        }}
        onBlur={() => runValidationTasks("isInstall", isInstall)}
        errorMessage={errors.isInstall?.errorMessage}
        hasError={errors.isInstall?.hasError}
        {...getOverrideProps(overrides, "isInstall")}
      ></SwitchField>
      <SwitchField
        label="Is takedown"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isTakedown}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isInstall,
              isTakedown: value,
              isMaintenance,
              eventDateTime,
            };
            const result = onChange(modelFields);
            value = result?.isTakedown ?? value;
          }
          if (errors.isTakedown?.hasError) {
            runValidationTasks("isTakedown", value);
          }
          setIsTakedown(value);
        }}
        onBlur={() => runValidationTasks("isTakedown", isTakedown)}
        errorMessage={errors.isTakedown?.errorMessage}
        hasError={errors.isTakedown?.hasError}
        {...getOverrideProps(overrides, "isTakedown")}
      ></SwitchField>
      <SwitchField
        label="Is maintenance"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isMaintenance}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isInstall,
              isTakedown,
              isMaintenance: value,
              eventDateTime,
            };
            const result = onChange(modelFields);
            value = result?.isMaintenance ?? value;
          }
          if (errors.isMaintenance?.hasError) {
            runValidationTasks("isMaintenance", value);
          }
          setIsMaintenance(value);
        }}
        onBlur={() => runValidationTasks("isMaintenance", isMaintenance)}
        errorMessage={errors.isMaintenance?.errorMessage}
        hasError={errors.isMaintenance?.hasError}
        {...getOverrideProps(overrides, "isMaintenance")}
      ></SwitchField>
      <TextField
        label="Event date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={eventDateTime && convertToLocal(new Date(eventDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              isInstall,
              isTakedown,
              isMaintenance,
              eventDateTime: value,
            };
            const result = onChange(modelFields);
            value = result?.eventDateTime ?? value;
          }
          if (errors.eventDateTime?.hasError) {
            runValidationTasks("eventDateTime", value);
          }
          setEventDateTime(value);
        }}
        onBlur={() => runValidationTasks("eventDateTime", eventDateTime)}
        errorMessage={errors.eventDateTime?.errorMessage}
        hasError={errors.eventDateTime?.hasError}
        {...getOverrideProps(overrides, "eventDateTime")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || homeEventModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || homeEventModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
