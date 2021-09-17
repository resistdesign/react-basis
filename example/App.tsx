import styled from 'styled-components';
import {AppBasis, FooterBasis, HeaderBasis} from '../src';
import {hot} from 'react-hot-loader';
import * as React from 'react';

const Header = styled(HeaderBasis)`
  padding: 0.25em;

  background-color: white;
`;

const Footer = styled(FooterBasis)`
  padding: 0.25em;

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
            <Footer
                sticky
            >
                I just got a dumpster to clean out my basement 😮
            </Footer>
        </AppBasis>
    );
};

export default hot(module)(App);
