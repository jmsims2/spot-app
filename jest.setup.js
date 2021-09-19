import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import 'react-native-url-polyfill';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

// @ts-ignore
global.__reanimatedWorkletInit = jest.fn();

jest.mock('react-native-gesture-handler', () => {
  // eslint-disable-next-line global-require
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  };
});

jest.mock('react-native-reanimated', () => {
  return {
    // @ts-ignore
    ...jest.requireActual('react-native-reanimated/mock'),
    useSharedValue: jest.fn,
    useAnimatedStyle: jest.fn,
    withTiming: jest.fn,
    withSpring: jest.fn,
    withRepeat: jest.fn,
    withSequence: jest.fn,
    useAnimatedProps: jest.fn,
    Easing: {
      linear: jest.fn,
      elastic: jest.fn,
    },
  };
});
