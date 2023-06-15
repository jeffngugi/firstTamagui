import React from 'react';
import {XStack, Input, Text, Checkbox, Check, YStack} from 'tamagui';

const Main = () => {
  return (
    <XStack
      flex={1}
      flexWrap="wrap"
      backgroundColor="#fff"
      // media query
      $gtSm={{
        flexDirection: 'column',
        flexWrap: 'nowrap',
      }}>
      <YStack space="$3">
        <Text>Hello</Text>
        <Text>World</Text>
      </YStack>
    </XStack>
  );
};

export default Main;
