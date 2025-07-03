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
import { AvailableInstallations } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AvailableInstallationsUpdateForm(props) {
  const {
    id: idProp,
    availableInstallations: availableInstallationsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    assignedContractor1: "",
    assignedContractor2: "",
    startDateTime: "",
    isAvailable: false,
    contractor1Phone: "",
    contractor2Phone: "",
    day: "",
    time: "",
    monthAsWord: "",
    dayOfWeek: "",
    dayAsNumber: "",
    yearAsNumber: "",
    timeAsString: "",
  };
  const [assignedContractor1, setAssignedContractor1] = React.useState(
    initialValues.assignedContractor1
  );
  const [assignedContractor2, setAssignedContractor2] = React.useState(
    initialValues.assignedContractor2
  );
  const [startDateTime, setStartDateTime] = React.useState(
    initialValues.startDateTime
  );
  const [isAvailable, setIsAvailable] = React.useState(
    initialValues.isAvailable
  );
  const [contractor1Phone, setContractor1Phone] = React.useState(
    initialValues.contractor1Phone
  );
  const [contractor2Phone, setContractor2Phone] = React.useState(
    initialValues.contractor2Phone
  );
  const [day, setDay] = React.useState(initialValues.day);
  const [time, setTime] = React.useState(initialValues.time);
  const [monthAsWord, setMonthAsWord] = React.useState(
    initialValues.monthAsWord
  );
  const [dayOfWeek, setDayOfWeek] = React.useState(initialValues.dayOfWeek);
  const [dayAsNumber, setDayAsNumber] = React.useState(
    initialValues.dayAsNumber
  );
  const [yearAsNumber, setYearAsNumber] = React.useState(
    initialValues.yearAsNumber
  );
  const [timeAsString, setTimeAsString] = React.useState(
    initialValues.timeAsString
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = availableInstallationsRecord
      ? { ...initialValues, ...availableInstallationsRecord }
      : initialValues;
    setAssignedContractor1(cleanValues.assignedContractor1);
    setAssignedContractor2(cleanValues.assignedContractor2);
    setStartDateTime(cleanValues.startDateTime);
    setIsAvailable(cleanValues.isAvailable);
    setContractor1Phone(cleanValues.contractor1Phone);
    setContractor2Phone(cleanValues.contractor2Phone);
    setDay(cleanValues.day);
    setTime(cleanValues.time);
    setMonthAsWord(cleanValues.monthAsWord);
    setDayOfWeek(cleanValues.dayOfWeek);
    setDayAsNumber(cleanValues.dayAsNumber);
    setYearAsNumber(cleanValues.yearAsNumber);
    setTimeAsString(cleanValues.timeAsString);
    setErrors({});
  };
  const [availableInstallationsRecord, setAvailableInstallationsRecord] =
    React.useState(availableInstallationsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(AvailableInstallations, idProp)
        : availableInstallationsModelProp;
      setAvailableInstallationsRecord(record);
    };
    queryData();
  }, [idProp, availableInstallationsModelProp]);
  React.useEffect(resetStateValues, [availableInstallationsRecord]);
  const validations = {
    assignedContractor1: [],
    assignedContractor2: [],
    startDateTime: [{ type: "Required" }],
    isAvailable: [],
    contractor1Phone: [{ type: "Phone" }],
    contractor2Phone: [{ type: "Phone" }],
    day: [],
    time: [],
    monthAsWord: [],
    dayOfWeek: [],
    dayAsNumber: [],
    yearAsNumber: [],
    timeAsString: [],
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
          assignedContractor1,
          assignedContractor2,
          startDateTime,
          isAvailable,
          contractor1Phone,
          contractor2Phone,
          day,
          time,
          monthAsWord,
          dayOfWeek,
          dayAsNumber,
          yearAsNumber,
          timeAsString,
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
            AvailableInstallations.copyOf(
              availableInstallationsRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
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
      {...getOverrideProps(overrides, "AvailableInstallationsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Assigned contractor1"
        isRequired={false}
        isReadOnly={false}
        value={assignedContractor1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedContractor1: value,
              assignedContractor2,
              startDateTime,
              isAvailable,
              contractor1Phone,
              contractor2Phone,
              day,
              time,
              monthAsWord,
              dayOfWeek,
              dayAsNumber,
              yearAsNumber,
              timeAsString,
            };
            const result = onChange(modelFields);
            value = result?.assignedContractor1 ?? value;
          }
          if (errors.assignedContractor1?.hasError) {
            runValidationTasks("assignedContractor1", value);
          }
          setAssignedContractor1(value);
        }}
        onBlur={() =>
          runValidationTasks("assignedContractor1", assignedContractor1)
        }
        errorMessage={errors.assignedContractor1?.errorMessage}
        hasError={errors.assignedContractor1?.hasError}
        {...getOverrideProps(overrides, "assignedContractor1")}
      ></TextField>
      <TextField
        label="Assigned contractor2"
        isRequired={false}
        isReadOnly={false}
        value={assignedContractor2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedContractor1,
              assignedContractor2: value,
              startDateTime,
              isAvailable,
              contractor1Phone,
              contractor2Phone,
              day,
              time,
              monthAsWord,
              dayOfWeek,
              dayAsNumber,
              yearAsNumber,
              timeAsString,
            };
            const result = onChange(modelFields);
            value = result?.assignedContractor2 ?? value;
          }
          if (errors.assignedContractor2?.hasError) {
            runValidationTasks("assignedContractor2", value);
          }
          setAssignedContractor2(value);
        }}
        onBlur={() =>
          runValidationTasks("assignedContractor2", assignedContractor2)
        }
        errorMessage={errors.assignedContractor2?.errorMessage}
        hasError={errors.assignedContractor2?.hasError}
        {...getOverrideProps(overrides, "assignedContractor2")}
      ></TextField>
      <TextField
        label="Start date time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={startDateTime && convertToLocal(new Date(startDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              assignedContractor1,
              assignedContractor2,
              startDateTime: value,
              isAvailable,
              contractor1Phone,
              contractor2Phone,
              day,
              time,
              monthAsWord,
              dayOfWeek,
              dayAsNumber,
              yearAsNumber,
              timeAsString,
            };
            const result = onChange(modelFields);
            value = result?.startDateTime ?? value;
          }
          if (errors.startDateTime?.hasError) {
            runValidationTasks("startDateTime", value);
          }
          setStartDateTime(value);
        }}
        onBlur={() => runValidationTasks("startDateTime", startDateTime)}
        errorMessage={errors.startDateTime?.errorMessage}
        hasError={errors.startDateTime?.hasError}
        {...getOverrideProps(overrides, "startDateTime")}
      ></TextField>
      <SwitchField
        label="Is available"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isAvailable}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              assignedContractor1,
              assignedContractor2,
              startDateTime,
              isAvailable: value,
              contractor1Phone,
              contractor2Phone,
              day,
              time,
              monthAsWord,
              dayOfWeek,
              dayAsNumber,
              yearAsNumber,
              timeAsString,
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
        label="Contractor1 phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={contractor1Phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedContractor1,
              assignedContractor2,
              startDateTime,
              isAvailable,
              contractor1Phone: value,
              contractor2Phone,
              day,
              time,
              monthAsWord,
              dayOfWeek,
              dayAsNumber,
              yearAsNumber,
              timeAsString,
            };
            const result = onChange(modelFields);
            value = result?.contractor1Phone ?? value;
          }
          if (errors.contractor1Phone?.hasError) {
            runValidationTasks("contractor1Phone", value);
          }
          setContractor1Phone(value);
        }}
        onBlur={() => runValidationTasks("contractor1Phone", contractor1Phone)}
        errorMessage={errors.contractor1Phone?.errorMessage}
        hasError={errors.contractor1Phone?.hasError}
        {...getOverrideProps(overrides, "contractor1Phone")}
      ></TextField>
      <TextField
        label="Contractor2 phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={contractor2Phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedContractor1,
              assignedContractor2,
              startDateTime,
              isAvailable,
              contractor1Phone,
              contractor2Phone: value,
              day,
              time,
              monthAsWord,
              dayOfWeek,
              dayAsNumber,
              yearAsNumber,
              timeAsString,
            };
            const result = onChange(modelFields);
            value = result?.contractor2Phone ?? value;
          }
          if (errors.contractor2Phone?.hasError) {
            runValidationTasks("contractor2Phone", value);
          }
          setContractor2Phone(value);
        }}
        onBlur={() => runValidationTasks("contractor2Phone", contractor2Phone)}
        errorMessage={errors.contractor2Phone?.errorMessage}
        hasError={errors.contractor2Phone?.hasError}
        {...getOverrideProps(overrides, "contractor2Phone")}
      ></TextField>
      <TextField
        label="Day"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={day}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedContractor1,
              assignedContractor2,
              startDateTime,
              isAvailable,
              contractor1Phone,
              contractor2Phone,
              day: value,
              time,
              monthAsWord,
              dayOfWeek,
              dayAsNumber,
              yearAsNumber,
              timeAsString,
            };
            const result = onChange(modelFields);
            value = result?.day ?? value;
          }
          if (errors.day?.hasError) {
            runValidationTasks("day", value);
          }
          setDay(value);
        }}
        onBlur={() => runValidationTasks("day", day)}
        errorMessage={errors.day?.errorMessage}
        hasError={errors.day?.hasError}
        {...getOverrideProps(overrides, "day")}
      ></TextField>
      <TextField
        label="Time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedContractor1,
              assignedContractor2,
              startDateTime,
              isAvailable,
              contractor1Phone,
              contractor2Phone,
              day,
              time: value,
              monthAsWord,
              dayOfWeek,
              dayAsNumber,
              yearAsNumber,
              timeAsString,
            };
            const result = onChange(modelFields);
            value = result?.time ?? value;
          }
          if (errors.time?.hasError) {
            runValidationTasks("time", value);
          }
          setTime(value);
        }}
        onBlur={() => runValidationTasks("time", time)}
        errorMessage={errors.time?.errorMessage}
        hasError={errors.time?.hasError}
        {...getOverrideProps(overrides, "time")}
      ></TextField>
      <TextField
        label="Month as word"
        isRequired={false}
        isReadOnly={false}
        value={monthAsWord}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedContractor1,
              assignedContractor2,
              startDateTime,
              isAvailable,
              contractor1Phone,
              contractor2Phone,
              day,
              time,
              monthAsWord: value,
              dayOfWeek,
              dayAsNumber,
              yearAsNumber,
              timeAsString,
            };
            const result = onChange(modelFields);
            value = result?.monthAsWord ?? value;
          }
          if (errors.monthAsWord?.hasError) {
            runValidationTasks("monthAsWord", value);
          }
          setMonthAsWord(value);
        }}
        onBlur={() => runValidationTasks("monthAsWord", monthAsWord)}
        errorMessage={errors.monthAsWord?.errorMessage}
        hasError={errors.monthAsWord?.hasError}
        {...getOverrideProps(overrides, "monthAsWord")}
      ></TextField>
      <TextField
        label="Day of week"
        isRequired={false}
        isReadOnly={false}
        value={dayOfWeek}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedContractor1,
              assignedContractor2,
              startDateTime,
              isAvailable,
              contractor1Phone,
              contractor2Phone,
              day,
              time,
              monthAsWord,
              dayOfWeek: value,
              dayAsNumber,
              yearAsNumber,
              timeAsString,
            };
            const result = onChange(modelFields);
            value = result?.dayOfWeek ?? value;
          }
          if (errors.dayOfWeek?.hasError) {
            runValidationTasks("dayOfWeek", value);
          }
          setDayOfWeek(value);
        }}
        onBlur={() => runValidationTasks("dayOfWeek", dayOfWeek)}
        errorMessage={errors.dayOfWeek?.errorMessage}
        hasError={errors.dayOfWeek?.hasError}
        {...getOverrideProps(overrides, "dayOfWeek")}
      ></TextField>
      <TextField
        label="Day as number"
        isRequired={false}
        isReadOnly={false}
        value={dayAsNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedContractor1,
              assignedContractor2,
              startDateTime,
              isAvailable,
              contractor1Phone,
              contractor2Phone,
              day,
              time,
              monthAsWord,
              dayOfWeek,
              dayAsNumber: value,
              yearAsNumber,
              timeAsString,
            };
            const result = onChange(modelFields);
            value = result?.dayAsNumber ?? value;
          }
          if (errors.dayAsNumber?.hasError) {
            runValidationTasks("dayAsNumber", value);
          }
          setDayAsNumber(value);
        }}
        onBlur={() => runValidationTasks("dayAsNumber", dayAsNumber)}
        errorMessage={errors.dayAsNumber?.errorMessage}
        hasError={errors.dayAsNumber?.hasError}
        {...getOverrideProps(overrides, "dayAsNumber")}
      ></TextField>
      <TextField
        label="Year as number"
        isRequired={false}
        isReadOnly={false}
        value={yearAsNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedContractor1,
              assignedContractor2,
              startDateTime,
              isAvailable,
              contractor1Phone,
              contractor2Phone,
              day,
              time,
              monthAsWord,
              dayOfWeek,
              dayAsNumber,
              yearAsNumber: value,
              timeAsString,
            };
            const result = onChange(modelFields);
            value = result?.yearAsNumber ?? value;
          }
          if (errors.yearAsNumber?.hasError) {
            runValidationTasks("yearAsNumber", value);
          }
          setYearAsNumber(value);
        }}
        onBlur={() => runValidationTasks("yearAsNumber", yearAsNumber)}
        errorMessage={errors.yearAsNumber?.errorMessage}
        hasError={errors.yearAsNumber?.hasError}
        {...getOverrideProps(overrides, "yearAsNumber")}
      ></TextField>
      <TextField
        label="Time as string"
        isRequired={false}
        isReadOnly={false}
        value={timeAsString}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedContractor1,
              assignedContractor2,
              startDateTime,
              isAvailable,
              contractor1Phone,
              contractor2Phone,
              day,
              time,
              monthAsWord,
              dayOfWeek,
              dayAsNumber,
              yearAsNumber,
              timeAsString: value,
            };
            const result = onChange(modelFields);
            value = result?.timeAsString ?? value;
          }
          if (errors.timeAsString?.hasError) {
            runValidationTasks("timeAsString", value);
          }
          setTimeAsString(value);
        }}
        onBlur={() => runValidationTasks("timeAsString", timeAsString)}
        errorMessage={errors.timeAsString?.errorMessage}
        hasError={errors.timeAsString?.hasError}
        {...getOverrideProps(overrides, "timeAsString")}
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
          isDisabled={!(idProp || availableInstallationsModelProp)}
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
              !(idProp || availableInstallationsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
