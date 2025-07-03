/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AvailableInstallations } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AvailableInstallationsUpdateFormInputValues = {
    assignedContractor1?: string;
    assignedContractor2?: string;
    startDateTime?: string;
    isAvailable?: boolean;
    contractor1Phone?: string;
    contractor2Phone?: string;
    day?: string;
    time?: string;
    monthAsWord?: string;
    dayOfWeek?: string;
    dayAsNumber?: string;
    yearAsNumber?: string;
    timeAsString?: string;
};
export declare type AvailableInstallationsUpdateFormValidationValues = {
    assignedContractor1?: ValidationFunction<string>;
    assignedContractor2?: ValidationFunction<string>;
    startDateTime?: ValidationFunction<string>;
    isAvailable?: ValidationFunction<boolean>;
    contractor1Phone?: ValidationFunction<string>;
    contractor2Phone?: ValidationFunction<string>;
    day?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    monthAsWord?: ValidationFunction<string>;
    dayOfWeek?: ValidationFunction<string>;
    dayAsNumber?: ValidationFunction<string>;
    yearAsNumber?: ValidationFunction<string>;
    timeAsString?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AvailableInstallationsUpdateFormOverridesProps = {
    AvailableInstallationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    assignedContractor1?: PrimitiveOverrideProps<TextFieldProps>;
    assignedContractor2?: PrimitiveOverrideProps<TextFieldProps>;
    startDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    isAvailable?: PrimitiveOverrideProps<SwitchFieldProps>;
    contractor1Phone?: PrimitiveOverrideProps<TextFieldProps>;
    contractor2Phone?: PrimitiveOverrideProps<TextFieldProps>;
    day?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    monthAsWord?: PrimitiveOverrideProps<TextFieldProps>;
    dayOfWeek?: PrimitiveOverrideProps<TextFieldProps>;
    dayAsNumber?: PrimitiveOverrideProps<TextFieldProps>;
    yearAsNumber?: PrimitiveOverrideProps<TextFieldProps>;
    timeAsString?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AvailableInstallationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AvailableInstallationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    availableInstallations?: AvailableInstallations;
    onSubmit?: (fields: AvailableInstallationsUpdateFormInputValues) => AvailableInstallationsUpdateFormInputValues;
    onSuccess?: (fields: AvailableInstallationsUpdateFormInputValues) => void;
    onError?: (fields: AvailableInstallationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AvailableInstallationsUpdateFormInputValues) => AvailableInstallationsUpdateFormInputValues;
    onValidate?: AvailableInstallationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AvailableInstallationsUpdateForm(props: AvailableInstallationsUpdateFormProps): React.ReactElement;
