import React, {useState} from 'react';
import {TextInput} from 'react-native';

export const Repro: React.FC = () => {
  const [value, setValue] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  );
  return (
    <TextInput
      multiline
      style={{height: 200, borderWidth: 1, margin: 10}}
      value={value}
      maxLength={90}
      onChangeText={text => {
        console.log('onChangeText called', text);
        setValue(text);
      }}
    />
  );
};
