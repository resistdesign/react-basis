import styled, {css} from 'styled-components';
import {ElementBasis} from './ElementBasis';
import {FC} from 'react';

const StickyCSS = css`
  position: sticky;
  top: 0;
  left: 0;
`;

export type HeaderBasisProps = {
    sticky?: boolean;
};

export const HeaderBasis: FC<HeaderBasisProps> = styled(ElementBasis)<HeaderBasisProps>`
  flex: 0 0 auto;

  ${p => p.sticky ? StickyCSS : ''}
`;
