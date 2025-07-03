/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Decoration } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import DecorationCard from "./DecorationCard";
import { Collection } from "@aws-amplify/ui-react";
export default function DecorationCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Decoration,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "DecorationCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <DecorationCard
          decoration={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></DecorationCard>
      )}
    </Collection>
  );
}
