import React, {useState} from 'react';
import {TextInput} from 'react-native';

export const Repro2: React.FC = () => {
  const [value, setValue] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  );
  return (
    <TextInput
      multiline
      style={{height: 200, borderWidth: 1, margin: 10}}
      value={value}
      onChangeText={text => {
        console.log('Repro2 onChangeText called', text);
        setValue(text);
      }}
    />
  );
};
