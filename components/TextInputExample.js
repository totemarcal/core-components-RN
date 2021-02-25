import React from 'react';
import { View, TextInput } from 'react-native';

export const UselessTextInput = () => {
    const [value, onChangeText] = React.useState('Useless Placeholder');
  
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
    );
  }

const UselessTextInputBase = (props) => {
return (
    <TextInput
    {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
    editable
    maxLength={40}
    />
);
}

export const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <UselessTextInputBase
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}
