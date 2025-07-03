/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Homeowner } from "../models";
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
export declare type HomeownerUpdateFormInputValues = {
    firstname?: string;
    lastname?: string;
    phone?: string;
    email?: string;
    rating?: number;
};
export declare type HomeownerUpdateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeownerUpdateFormOverridesProps = {
    HomeownerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HomeownerUpdateFormProps = React.PropsWithChildren<{
    overrides?: HomeownerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    homeowner?: Homeowner;
    onSubmit?: (fields: HomeownerUpdateFormInputValues) => HomeownerUpdateFormInputValues;
    onSuccess?: (fields: HomeownerUpdateFormInputValues) => void;
    onError?: (fields: HomeownerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HomeownerUpdateFormInputValues) => HomeownerUpdateFormInputValues;
    onValidate?: HomeownerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HomeownerUpdateForm(props: HomeownerUpdateFormProps): React.ReactElement;
