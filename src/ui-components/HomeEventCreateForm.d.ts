/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type HomeEventCreateFormInputValues = {
    isInstall?: boolean;
    isTakedown?: boolean;
    isMaintenance?: boolean;
    eventDateTime?: string;
};
export declare type HomeEventCreateFormValidationValues = {
    isInstall?: ValidationFunction<boolean>;
    isTakedown?: ValidationFunction<boolean>;
    isMaintenance?: ValidationFunction<boolean>;
    eventDateTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeEventCreateFormOverridesProps = {
    HomeEventCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isInstall?: PrimitiveOverrideProps<SwitchFieldProps>;
    isTakedown?: PrimitiveOverrideProps<SwitchFieldProps>;
    isMaintenance?: PrimitiveOverrideProps<SwitchFieldProps>;
    eventDateTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HomeEventCreateFormProps = React.PropsWithChildren<{
    overrides?: HomeEventCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HomeEventCreateFormInputValues) => HomeEventCreateFormInputValues;
    onSuccess?: (fields: HomeEventCreateFormInputValues) => void;
    onError?: (fields: HomeEventCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HomeEventCreateFormInputValues) => HomeEventCreateFormInputValues;
    onValidate?: HomeEventCreateFormValidationValues;
} & React.CSSProperties>;
export default function HomeEventCreateForm(props: HomeEventCreateFormProps): React.ReactElement;
