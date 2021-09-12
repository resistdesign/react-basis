import React, {FC} from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle<{ rootSelector: string; }>`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  ${p => p.rootSelector} {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
