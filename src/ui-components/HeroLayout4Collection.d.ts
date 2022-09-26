/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { HeroLayout4Props } from "./HeroLayout4";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type HeroLayout4CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => HeroLayout4Props;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function HeroLayout4Collection(props: HeroLayout4CollectionProps): React.ReactElement;
