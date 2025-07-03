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
export declare type BetaOrderCreateFormInputValues = {
    cartItems?: string[];
    totalPrice?: string;
    chosenInstallation?: string;
    homeStreet?: string;
    homeCity?: string;
    homeState?: string;
    homeZip?: string;
    homeownerFirstName?: string;
    homeownerLastName?: string;
    homeownerPhone?: string;
    homeownerEmail?: string;
};
export declare type BetaOrderCreateFormValidationValues = {
    cartItems?: ValidationFunction<string>;
    totalPrice?: ValidationFunction<string>;
    chosenInstallation?: ValidationFunction<string>;
    homeStreet?: ValidationFunction<string>;
    homeCity?: ValidationFunction<string>;
    homeState?: ValidationFunction<string>;
    homeZip?: ValidationFunction<string>;
    homeownerFirstName?: ValidationFunction<string>;
    homeownerLastName?: ValidationFunction<string>;
    homeownerPhone?: ValidationFunction<string>;
    homeownerEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BetaOrderCreateFormOverridesProps = {
    BetaOrderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cartItems?: PrimitiveOverrideProps<TextFieldProps>;
    totalPrice?: PrimitiveOverrideProps<TextFieldProps>;
    chosenInstallation?: PrimitiveOverrideProps<TextFieldProps>;
    homeStreet?: PrimitiveOverrideProps<TextFieldProps>;
    homeCity?: PrimitiveOverrideProps<TextFieldProps>;
    homeState?: PrimitiveOverrideProps<TextFieldProps>;
    homeZip?: PrimitiveOverrideProps<TextFieldProps>;
    homeownerFirstName?: PrimitiveOverrideProps<TextFieldProps>;
    homeownerLastName?: PrimitiveOverrideProps<TextFieldProps>;
    homeownerPhone?: PrimitiveOverrideProps<TextFieldProps>;
    homeownerEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BetaOrderCreateFormProps = React.PropsWithChildren<{
    overrides?: BetaOrderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BetaOrderCreateFormInputValues) => BetaOrderCreateFormInputValues;
    onSuccess?: (fields: BetaOrderCreateFormInputValues) => void;
    onError?: (fields: BetaOrderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BetaOrderCreateFormInputValues) => BetaOrderCreateFormInputValues;
    onValidate?: BetaOrderCreateFormValidationValues;
} & React.CSSProperties>;
export default function BetaOrderCreateForm(props: BetaOrderCreateFormProps): React.ReactElement;
