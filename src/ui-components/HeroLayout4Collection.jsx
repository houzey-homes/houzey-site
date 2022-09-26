/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import HeroLayout4 from "./HeroLayout4";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function HeroLayout4Collection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "HeroLayout4Collection")}
    >
      {(item, index) => (
        <HeroLayout4
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></HeroLayout4>
      )}
    </Collection>
  );
}
