import React, {FC} from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle<{ rootSelector: string; }>`
  html, body, ${p => p.rootSelector} {
    flex: 0 0 auto;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;

    width: 100vw;
    height: 100vh;

    overflow: hidden;
  }

  ${p => p.rootSelector} {
    justify-content: flex-start;
    overflow: auto;

    & > * {
      overflow: revert;
    }
  }
`;

export type AppBasisProps = {
    rootSelector: string;
};

export const AppBasis: FC<AppBasisProps> = ({
                                                children,
                                                rootSelector
                                            }) => {


    return <>
        <GlobalStyle rootSelector={rootSelector}/>
        {children}
    </>;
};
