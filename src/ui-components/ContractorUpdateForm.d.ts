/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Contractor } from "../models";
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
export declare type ContractorUpdateFormInputValues = {
    firstname?: string;
    lastname?: string;
    phone?: string;
    email?: string;
    startdate?: string;
    rating?: number;
};
export declare type ContractorUpdateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    startdate?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContractorUpdateFormOverridesProps = {
    ContractorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    startdate?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContractorUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContractorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contractor?: Contractor;
    onSubmit?: (fields: ContractorUpdateFormInputValues) => ContractorUpdateFormInputValues;
    onSuccess?: (fields: ContractorUpdateFormInputValues) => void;
    onError?: (fields: ContractorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContractorUpdateFormInputValues) => ContractorUpdateFormInputValues;
    onValidate?: ContractorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContractorUpdateForm(props: ContractorUpdateFormProps): React.ReactElement;
