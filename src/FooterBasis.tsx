import styled, {css} from 'styled-components';
import {ElementBasis} from './ElementBasis';
import {FC} from 'react';

const StickyCSS = css`
  position: sticky;
  bottom: 0;
  left: 0;
`;

export type FooterBasisProps = {
    sticky?: boolean;
};

export const FooterBasis: FC<FooterBasisProps> = styled(ElementBasis)<FooterBasisProps>`
  flex: 0 0 auto;

  ${p => p.sticky ? StickyCSS : ''}
`;
