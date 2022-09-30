/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function DecorationCard(props) {
  const { decoration, overrides, ...rest } = props;
  return (
    <Flex
      gap="13px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="43px 119px 43px 119px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DecorationCard")}
    >
      <Flex
        gap="10px"
        width="464px"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "ImageFrame")}
      >
        <Image
          width="444px"
          height="602px"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="29px"
          padding="0px 0px 0px 0px"
          src={decoration?.imglink}
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
      <Flex
        gap="20px"
        direction="column"
        shrink="0"
        position="relative"
        padding="28px 32px 28px 32px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="26px"
          direction="column"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ItemInformation")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="269px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={decoration?.name}
            {...getOverrideProps(overrides, "ItemName")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            width="269px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={decoration?.description}
            {...getOverrideProps(overrides, "ItemDescription")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="269px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"$"}${decoration?.price}`}
            {...getOverrideProps(overrides, "ItemPrice")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="220px"
          height="46px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "ItemButtonBar")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            height="15px"
            position="absolute"
            bottom="16px"
            left="64px"
            right="64px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="(0)"
            {...getOverrideProps(overrides, "ItemQuantity")}
          ></Text>
          <Flex
            gap="120px"
            position="absolute"
            top="0px"
            left="0px"
            alignItems="flex-start"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "ItemButtons")}
          >
            <Button
              display="flex"
              gap="0"
              width="50px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              height="46px"
              position="relative"
              size="large"
              isDisabled={false}
              variation="primary"
              children="-"
              {...getOverrideProps(overrides, "MinusButton")}
            ></Button>
            <Button
              display="flex"
              gap="0"
              width="50px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              height="46px"
              position="relative"
              size="large"
              isDisabled={false}
              variation="primary"
              children="+"
              {...getOverrideProps(overrides, "AddButton")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
