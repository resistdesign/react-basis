import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppBasis} from '../src';

const App = () => {
    return (
        <AppBasis
            rootSelector="body > div#root"
        >
            Yo!
        </AppBasis>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
