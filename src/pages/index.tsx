import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import {
  GatsbyIcon,
  TailwindIcon,
  SharesightIcon,
  NavbarDropdown,
  StyledComponentsIcon,
  TypescriptIcon,
  GithubIcon,
  TwinIcon
} from '../components';
import Theme from '../components/theme';
import Button from '../components/Button';

const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`;

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase mt-5
`;

const Text = tw.p`
  text-xl text-gray-700 my-4
`;

const Logos = styled.div`
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
      {/* <Wrapper> */}
        {/* <Main> */}
      
       
       
          <Logos>
          <SharesightIcon />
          <div className="flex justify-between">
          <NavbarDropdown />
        
        
          {/* <Button isSmall>Login</Button>
            <Button isSecondary>Sign up for free</Button> */}
            {/* <GatsbyIcon />
            <TypescriptIcon />
            <StyledComponentsIcon />
            <TailwindIcon />
            <TwinIcon /> */}
            </div> 
          </Logos>
       
          {/* <Footer>
            <a
              href="https://github.com/DevHausStudio/Gatsby-Typescript-Tailwind-Twin-Styled-Component-Starter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </Footer> */}
        {/* </Main> */}
      {/* </Wrapper> */}
    </div>
  </Theme>
);

export default Index;
