/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { BetaOrder } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function BetaOrderCreateForm(props) {
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
    cartItems: [],
    totalPrice: "",
    chosenInstallation: "",
    homeStreet: "",
    homeCity: "",
    homeState: "",
    homeZip: "",
    homeownerFirstName: "",
    homeownerLastName: "",
    homeownerPhone: "",
    homeownerEmail: "",
  };
  const [cartItems, setCartItems] = React.useState(initialValues.cartItems);
  const [totalPrice, setTotalPrice] = React.useState(initialValues.totalPrice);
  const [chosenInstallation, setChosenInstallation] = React.useState(
    initialValues.chosenInstallation
  );
  const [homeStreet, setHomeStreet] = React.useState(initialValues.homeStreet);
  const [homeCity, setHomeCity] = React.useState(initialValues.homeCity);
  const [homeState, setHomeState] = React.useState(initialValues.homeState);
  const [homeZip, setHomeZip] = React.useState(initialValues.homeZip);
  const [homeownerFirstName, setHomeownerFirstName] = React.useState(
    initialValues.homeownerFirstName
  );
  const [homeownerLastName, setHomeownerLastName] = React.useState(
    initialValues.homeownerLastName
  );
  const [homeownerPhone, setHomeownerPhone] = React.useState(
    initialValues.homeownerPhone
  );
  const [homeownerEmail, setHomeownerEmail] = React.useState(
    initialValues.homeownerEmail
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCartItems(initialValues.cartItems);
    setCurrentCartItemsValue("");
    setTotalPrice(initialValues.totalPrice);
    setChosenInstallation(initialValues.chosenInstallation);
    setHomeStreet(initialValues.homeStreet);
    setHomeCity(initialValues.homeCity);
    setHomeState(initialValues.homeState);
    setHomeZip(initialValues.homeZip);
    setHomeownerFirstName(initialValues.homeownerFirstName);
    setHomeownerLastName(initialValues.homeownerLastName);
    setHomeownerPhone(initialValues.homeownerPhone);
    setHomeownerEmail(initialValues.homeownerEmail);
    setErrors({});
  };
  const [currentCartItemsValue, setCurrentCartItemsValue] = React.useState("");
  const cartItemsRef = React.createRef();
  const validations = {
    cartItems: [],
    totalPrice: [],
    chosenInstallation: [],
    homeStreet: [],
    homeCity: [],
    homeState: [],
    homeZip: [],
    homeownerFirstName: [],
    homeownerLastName: [],
    homeownerPhone: [],
    homeownerEmail: [],
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
          cartItems,
          totalPrice,
          chosenInstallation,
          homeStreet,
          homeCity,
          homeState,
          homeZip,
          homeownerFirstName,
          homeownerLastName,
          homeownerPhone,
          homeownerEmail,
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
          await DataStore.save(new BetaOrder(modelFields));
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
      {...getOverrideProps(overrides, "BetaOrderCreateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cartItems: values,
              totalPrice,
              chosenInstallation,
              homeStreet,
              homeCity,
              homeState,
              homeZip,
              homeownerFirstName,
              homeownerLastName,
              homeownerPhone,
              homeownerEmail,
            };
            const result = onChange(modelFields);
            values = result?.cartItems ?? values;
          }
          setCartItems(values);
          setCurrentCartItemsValue("");
        }}
        currentFieldValue={currentCartItemsValue}
        label={"Cart items"}
        items={cartItems}
        hasError={errors?.cartItems?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("cartItems", currentCartItemsValue)
        }
        errorMessage={errors?.cartItems?.errorMessage}
        setFieldValue={setCurrentCartItemsValue}
        inputFieldRef={cartItemsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Cart items"
          isRequired={false}
          isReadOnly={false}
          value={currentCartItemsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.cartItems?.hasError) {
              runValidationTasks("cartItems", value);
            }
            setCurrentCartItemsValue(value);
          }}
          onBlur={() => runValidationTasks("cartItems", currentCartItemsValue)}
          errorMessage={errors.cartItems?.errorMessage}
          hasError={errors.cartItems?.hasError}
          ref={cartItemsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "cartItems")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Total price"
        isRequired={false}
        isReadOnly={false}
        value={totalPrice}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cartItems,
              totalPrice: value,
              chosenInstallation,
              homeStreet,
              homeCity,
              homeState,
              homeZip,
              homeownerFirstName,
              homeownerLastName,
              homeownerPhone,
              homeownerEmail,
            };
            const result = onChange(modelFields);
            value = result?.totalPrice ?? value;
          }
          if (errors.totalPrice?.hasError) {
            runValidationTasks("totalPrice", value);
          }
          setTotalPrice(value);
        }}
        onBlur={() => runValidationTasks("totalPrice", totalPrice)}
        errorMessage={errors.totalPrice?.errorMessage}
        hasError={errors.totalPrice?.hasError}
        {...getOverrideProps(overrides, "totalPrice")}
      ></TextField>
      <TextField
        label="Chosen installation"
        isRequired={false}
        isReadOnly={false}
        value={chosenInstallation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cartItems,
              totalPrice,
              chosenInstallation: value,
              homeStreet,
              homeCity,
              homeState,
              homeZip,
              homeownerFirstName,
              homeownerLastName,
              homeownerPhone,
              homeownerEmail,
            };
            const result = onChange(modelFields);
            value = result?.chosenInstallation ?? value;
          }
          if (errors.chosenInstallation?.hasError) {
            runValidationTasks("chosenInstallation", value);
          }
          setChosenInstallation(value);
        }}
        onBlur={() =>
          runValidationTasks("chosenInstallation", chosenInstallation)
        }
        errorMessage={errors.chosenInstallation?.errorMessage}
        hasError={errors.chosenInstallation?.hasError}
        {...getOverrideProps(overrides, "chosenInstallation")}
      ></TextField>
      <TextField
        label="Home street"
        isRequired={false}
        isReadOnly={false}
        value={homeStreet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cartItems,
              totalPrice,
              chosenInstallation,
              homeStreet: value,
              homeCity,
              homeState,
              homeZip,
              homeownerFirstName,
              homeownerLastName,
              homeownerPhone,
              homeownerEmail,
            };
            const result = onChange(modelFields);
            value = result?.homeStreet ?? value;
          }
          if (errors.homeStreet?.hasError) {
            runValidationTasks("homeStreet", value);
          }
          setHomeStreet(value);
        }}
        onBlur={() => runValidationTasks("homeStreet", homeStreet)}
        errorMessage={errors.homeStreet?.errorMessage}
        hasError={errors.homeStreet?.hasError}
        {...getOverrideProps(overrides, "homeStreet")}
      ></TextField>
      <TextField
        label="Home city"
        isRequired={false}
        isReadOnly={false}
        value={homeCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cartItems,
              totalPrice,
              chosenInstallation,
              homeStreet,
              homeCity: value,
              homeState,
              homeZip,
              homeownerFirstName,
              homeownerLastName,
              homeownerPhone,
              homeownerEmail,
            };
            const result = onChange(modelFields);
            value = result?.homeCity ?? value;
          }
          if (errors.homeCity?.hasError) {
            runValidationTasks("homeCity", value);
          }
          setHomeCity(value);
        }}
        onBlur={() => runValidationTasks("homeCity", homeCity)}
        errorMessage={errors.homeCity?.errorMessage}
        hasError={errors.homeCity?.hasError}
        {...getOverrideProps(overrides, "homeCity")}
      ></TextField>
      <TextField
        label="Home state"
        isRequired={false}
        isReadOnly={false}
        value={homeState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cartItems,
              totalPrice,
              chosenInstallation,
              homeStreet,
              homeCity,
              homeState: value,
              homeZip,
              homeownerFirstName,
              homeownerLastName,
              homeownerPhone,
              homeownerEmail,
            };
            const result = onChange(modelFields);
            value = result?.homeState ?? value;
          }
          if (errors.homeState?.hasError) {
            runValidationTasks("homeState", value);
          }
          setHomeState(value);
        }}
        onBlur={() => runValidationTasks("homeState", homeState)}
        errorMessage={errors.homeState?.errorMessage}
        hasError={errors.homeState?.hasError}
        {...getOverrideProps(overrides, "homeState")}
      ></TextField>
      <TextField
        label="Home zip"
        isRequired={false}
        isReadOnly={false}
        value={homeZip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cartItems,
              totalPrice,
              chosenInstallation,
              homeStreet,
              homeCity,
              homeState,
              homeZip: value,
              homeownerFirstName,
              homeownerLastName,
              homeownerPhone,
              homeownerEmail,
            };
            const result = onChange(modelFields);
            value = result?.homeZip ?? value;
          }
          if (errors.homeZip?.hasError) {
            runValidationTasks("homeZip", value);
          }
          setHomeZip(value);
        }}
        onBlur={() => runValidationTasks("homeZip", homeZip)}
        errorMessage={errors.homeZip?.errorMessage}
        hasError={errors.homeZip?.hasError}
        {...getOverrideProps(overrides, "homeZip")}
      ></TextField>
      <TextField
        label="Homeowner first name"
        isRequired={false}
        isReadOnly={false}
        value={homeownerFirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cartItems,
              totalPrice,
              chosenInstallation,
              homeStreet,
              homeCity,
              homeState,
              homeZip,
              homeownerFirstName: value,
              homeownerLastName,
              homeownerPhone,
              homeownerEmail,
            };
            const result = onChange(modelFields);
            value = result?.homeownerFirstName ?? value;
          }
          if (errors.homeownerFirstName?.hasError) {
            runValidationTasks("homeownerFirstName", value);
          }
          setHomeownerFirstName(value);
        }}
        onBlur={() =>
          runValidationTasks("homeownerFirstName", homeownerFirstName)
        }
        errorMessage={errors.homeownerFirstName?.errorMessage}
        hasError={errors.homeownerFirstName?.hasError}
        {...getOverrideProps(overrides, "homeownerFirstName")}
      ></TextField>
      <TextField
        label="Homeowner last name"
        isRequired={false}
        isReadOnly={false}
        value={homeownerLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cartItems,
              totalPrice,
              chosenInstallation,
              homeStreet,
              homeCity,
              homeState,
              homeZip,
              homeownerFirstName,
              homeownerLastName: value,
              homeownerPhone,
              homeownerEmail,
            };
            const result = onChange(modelFields);
            value = result?.homeownerLastName ?? value;
          }
          if (errors.homeownerLastName?.hasError) {
            runValidationTasks("homeownerLastName", value);
          }
          setHomeownerLastName(value);
        }}
        onBlur={() =>
          runValidationTasks("homeownerLastName", homeownerLastName)
        }
        errorMessage={errors.homeownerLastName?.errorMessage}
        hasError={errors.homeownerLastName?.hasError}
        {...getOverrideProps(overrides, "homeownerLastName")}
      ></TextField>
      <TextField
        label="Homeowner phone"
        isRequired={false}
        isReadOnly={false}
        value={homeownerPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cartItems,
              totalPrice,
              chosenInstallation,
              homeStreet,
              homeCity,
              homeState,
              homeZip,
              homeownerFirstName,
              homeownerLastName,
              homeownerPhone: value,
              homeownerEmail,
            };
            const result = onChange(modelFields);
            value = result?.homeownerPhone ?? value;
          }
          if (errors.homeownerPhone?.hasError) {
            runValidationTasks("homeownerPhone", value);
          }
          setHomeownerPhone(value);
        }}
        onBlur={() => runValidationTasks("homeownerPhone", homeownerPhone)}
        errorMessage={errors.homeownerPhone?.errorMessage}
        hasError={errors.homeownerPhone?.hasError}
        {...getOverrideProps(overrides, "homeownerPhone")}
      ></TextField>
      <TextField
        label="Homeowner email"
        isRequired={false}
        isReadOnly={false}
        value={homeownerEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cartItems,
              totalPrice,
              chosenInstallation,
              homeStreet,
              homeCity,
              homeState,
              homeZip,
              homeownerFirstName,
              homeownerLastName,
              homeownerPhone,
              homeownerEmail: value,
            };
            const result = onChange(modelFields);
            value = result?.homeownerEmail ?? value;
          }
          if (errors.homeownerEmail?.hasError) {
            runValidationTasks("homeownerEmail", value);
          }
          setHomeownerEmail(value);
        }}
        onBlur={() => runValidationTasks("homeownerEmail", homeownerEmail)}
        errorMessage={errors.homeownerEmail?.errorMessage}
        hasError={errors.homeownerEmail?.hasError}
        {...getOverrideProps(overrides, "homeownerEmail")}
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
