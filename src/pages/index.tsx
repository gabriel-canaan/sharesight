import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import {
  NavbarDropdown,
  SharesightIcon
} from '../components';
import Theme from '../components/theme';

const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const Header = styled.div`
  ${tw`flex items-center justify-between`}
  svg,
  img {
    width: 100px;
    display: inline-block;
  }
`;

const Footer = styled.footer`
  ${tw`flex justify-center`}
  svg {
    width: 30px;
    path {
      &:hover {
        fill: palevioletred;
      }
    }
  }
`;

const Index = () => (
  <Theme>
    <div
      css={[
        tw`flex flex-col items-center `,
        // Combine regular css and Tailwind styles within backticks
        css`
          background: #fff;
        `
      ]}
    >
      <Wrapper>
        <Header>
          <div css={[
            tw`flex flex-col items-center `,
            css`
          margin-bottom:18px;
          margin-right: 160px
        `
          ]} >
            <SharesightIcon />
          </div>
          <NavbarDropdown />
        </Header>

        <Footer>
          <a
            href="https://bbc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            FOOTER!
          </a>
        </Footer>

      </Wrapper>
    </div>
  </Theme>
);

export default Index;
