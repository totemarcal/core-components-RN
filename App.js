import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ViewExample from './components/ViewExample'
import ButtonExample from './components/ButtonExample'
import ImageExample from './components/ImageExample'
import ImageBackgroundExample from './components/ImageBackgroundExample'
import {UselessTextInput, UselessTextInputMultiline} from './components/TextInputExample'
import ScrollViewExample from './components/ScrollViewExample'
import SwitchExample from './components/SwitchExample'
import TouchableOpacityExample from './components/TouchableOpacityExample'
import TouchableHighlightExample from './components/TouchableHighlightExample';
import TouchableWithoutFeedbackExample from './components/TouchableWithoutFeedbackExample';
import ActivityIndicatorExample from './components/ActivityIndicatorExample';
import KeyboardAvoidingViewExample from './components/KeyboardAvoidingViewExample';
import ModalExample from './components/ModalExample';
import PressableExample from './components/PressableExample';
import RefreshControlExample from './components/RefreshControlExample';
import SectionListExample from './components/SectionListExample';
import StatusBarExample from './components/StatusBarExample';
import VirtualizedListExample from './components/VirtualizedListExample';
import FlatListExample from './components/FlatListExample';
import Tela1Example from './components/Tela1Example';
function HomeScreen({ navigation }) {
  return (
    <StatusBar
        animated={true}
        backgroundColor="#61dafb">

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Core Components</Text>
        </View>
    </StatusBar>
  );
}

const options = {
    headerLeft: () => (
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Text style={{margin: 8}}>Esquerdo</Text>
      </TouchableOpacity>
    )
  };

const Drawer = createDrawerNavigator();

export default function App() {
  return (  
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen options={options} name="Home" component={HomeScreen} />
        <Drawer.Screen name="View"  component={ViewExample} />
        <Drawer.Screen name="Button" component={ButtonExample} />
        <Drawer.Screen name="Image" component={ImageExample} />
        <Drawer.Screen name="Image Background" component={ImageBackgroundExample} />
        <Drawer.Screen name="Text Input" component={UselessTextInput} />
        <Drawer.Screen name="Text Input Multiline" component={UselessTextInputMultiline} />
        <Drawer.Screen name="Scroll View" component={ScrollViewExample} />
        <Drawer.Screen name="Switch" component={SwitchExample} />
        <Drawer.Screen name="Touchable Opacity" component={TouchableOpacityExample} />
        <Drawer.Screen name="Touchable Highlight" component={TouchableHighlightExample} />
        <Drawer.Screen name="Touchable Without Feedback" component={TouchableWithoutFeedbackExample} />
        <Drawer.Screen name="Activity Indicator" component={ActivityIndicatorExample} />
        <Drawer.Screen name="Keyboard Avoiding View" component={KeyboardAvoidingViewExample} />
        <Drawer.Screen name="Modal Example" component={ModalExample} />
        <Drawer.Screen name="Pressable" component={PressableExample} />
        <Drawer.Screen name="Refresh Control" component={RefreshControlExample} />
        <Drawer.Screen name="Section List" component={SectionListExample} />
        <Drawer.Screen name="Virtualized List" component={VirtualizedListExample} />
        <Drawer.Screen name="Flat List" component={FlatListExample} />
        <Drawer.Screen name="Status Bar" component={StatusBarExample} />
        <Drawer.Screen name="Tela 1" component={Tela1Example} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}