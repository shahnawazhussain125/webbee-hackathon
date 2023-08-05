/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import App from './App';

const RNReduxApp = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <PaperProvider>
                    <App />
                </PaperProvider>
            </PersistGate>
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => RNReduxApp);
