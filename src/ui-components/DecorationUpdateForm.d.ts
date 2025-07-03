/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Decoration } from "../models";
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
export declare type DecorationUpdateFormInputValues = {
    name?: string;
    description?: string;
    season?: string;
    holiday?: string;
    isRentable?: boolean;
    isAvailable?: boolean;
    price?: string;
    imglink?: string;
};
export declare type DecorationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    season?: ValidationFunction<string>;
    holiday?: ValidationFunction<string>;
    isRentable?: ValidationFunction<boolean>;
    isAvailable?: ValidationFunction<boolean>;
    price?: ValidationFunction<string>;
    imglink?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DecorationUpdateFormOverridesProps = {
    DecorationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    season?: PrimitiveOverrideProps<TextFieldProps>;
    holiday?: PrimitiveOverrideProps<TextFieldProps>;
    isRentable?: PrimitiveOverrideProps<SwitchFieldProps>;
    isAvailable?: PrimitiveOverrideProps<SwitchFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    imglink?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DecorationUpdateFormProps = React.PropsWithChildren<{
    overrides?: DecorationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    decoration?: Decoration;
    onSubmit?: (fields: DecorationUpdateFormInputValues) => DecorationUpdateFormInputValues;
    onSuccess?: (fields: DecorationUpdateFormInputValues) => void;
    onError?: (fields: DecorationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DecorationUpdateFormInputValues) => DecorationUpdateFormInputValues;
    onValidate?: DecorationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DecorationUpdateForm(props: DecorationUpdateFormProps): React.ReactElement;
