/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Decoration } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type DecorationCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    decoration?: Decoration;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function DecorationCard(props: DecorationCardProps): React.ReactElement;
