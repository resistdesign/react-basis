import styled from 'styled-components';
import {AppBasis, HeaderBasis} from '../src';
import {hot} from 'react-hot-loader';
import * as React from 'react';

const Header = styled(HeaderBasis)`
  margin: 0;
  padding: 0.25em;
  box-sizing: border-box;
  position: sticky;
  top: 0;

  background-color: white;
`;

const Box = styled.div`
  flex: 1 0 auto;

  background-color: blue;

  height: auto;

  color: white;
`;

const App = () => {
    return (
        <AppBasis
            rootSelector="body > div#root"
        >
            <Header
                sticky
            >
                What's happening in your attic, right now!?
            </Header>
            <Box>
                Yo!
                <br/>
                <br/>
                <br/>
                <br/>
                <details>
                    <summary>More...</summary>
                    Other stuff...
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    This...
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    Things...
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    Other stuff to scroll to!
                </details>
            </Box>
        </AppBasis>
    );
};

export default hot(module)(App);
