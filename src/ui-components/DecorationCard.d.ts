/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Decoration } from "../models";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DecorationCardOverridesProps = {
    DecorationCard?: PrimitiveOverrideProps<FlexProps>;
    ImageFrame?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    ItemInformation?: PrimitiveOverrideProps<FlexProps>;
    ItemName?: PrimitiveOverrideProps<TextProps>;
    ItemDescription?: PrimitiveOverrideProps<TextProps>;
    ItemPrice?: PrimitiveOverrideProps<TextProps>;
    ItemButtonBar?: PrimitiveOverrideProps<FlexProps>;
    ItemQuantity?: PrimitiveOverrideProps<TextProps>;
    ItemButtons?: PrimitiveOverrideProps<FlexProps>;
    MinusButton?: PrimitiveOverrideProps<ButtonProps>;
    AddButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DecorationCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    decoration?: Decoration;
} & {
    overrides?: DecorationCardOverridesProps | undefined | null;
}>;
export default function DecorationCard(props: DecorationCardProps): React.ReactElement;
