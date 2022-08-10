import {ArwesThemeProvider, StylesBaseline} from '@arwes/core';
import {BleepsProvider} from '@arwes/sounds';

import {LoginForm} from './components/login-form';
import {SignupForm} from './components/signup-form';


const IMAGE_URL = 'https://playground.arwes.dev/assets/images/wallpaper.jpg';
const SOUND_OBJECT_URL = 'https://playground.arwes.dev/assets/sounds/object.mp3';
const SOUND_TYPE_URL = 'https://playground.arwes.dev/assets/sounds/type.mp3';
const audioSettings = {common: {volume: 0.25}};
const playersSettings = {
    object: {src: [SOUND_OBJECT_URL]},
    type: {src: [SOUND_TYPE_URL], loop: true}
};
const bleepsSettings = {
    object: {player: 'object'},
    type: {player: 'type'}
};


const ROOT_FONT_FAMILY = '"Titillium Web", sans-serif';


const App = () => {
    return (
        <ArwesThemeProvider>
            <StylesBaseline styles={{body: {fontFamily: ROOT_FONT_FAMILY}}} >
                <BleepsProvider
                    audioSettings={audioSettings}
                    playersSettings={playersSettings}
                    bleepsSettings={bleepsSettings}
                >
                    <LoginForm />
                    <SignupForm />
                </BleepsProvider>
            </StylesBaseline>
        </ArwesThemeProvider>
    );
};
export default App;
