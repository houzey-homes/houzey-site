/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type HomeownerCreateFormInputValues = {
    firstname?: string;
    lastname?: string;
    phone?: string;
    email?: string;
    rating?: number;
};
export declare type HomeownerCreateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeownerCreateFormOverridesProps = {
    HomeownerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HomeownerCreateFormProps = React.PropsWithChildren<{
    overrides?: HomeownerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HomeownerCreateFormInputValues) => HomeownerCreateFormInputValues;
    onSuccess?: (fields: HomeownerCreateFormInputValues) => void;
    onError?: (fields: HomeownerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HomeownerCreateFormInputValues) => HomeownerCreateFormInputValues;
    onValidate?: HomeownerCreateFormValidationValues;
} & React.CSSProperties>;
export default function HomeownerCreateForm(props: HomeownerCreateFormProps): React.ReactElement;
