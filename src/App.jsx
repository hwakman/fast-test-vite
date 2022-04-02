import { useState } from 'react';
import {
    CheckedBox,
    CheckedContainer,
  ContentBox,
  ContentContainer,
  FooterContainer,
  LayoutContainer,
  NavBarContainer,
} from './styled-components/container';

import { Input, TextBox } from './styled-components/components';

const App = (props) => {
  const screenSize = document.getElementById('root').clientWidth;
  const [searchValue, setSearch] = useState('');

  const submitSearch = (e) => {
    if (e.key !== 'Enter') return;

    alert('hello ' + searchValue);
  };

  return (
    <LayoutContainer>
      <NavBarContainer>
        <ContentBox>
          <TextBox color={'#fff'}>Fast Work</TextBox>
          <Input
            type="search"
            placeholder="Search"
            onKeyDown={(e) => submitSearch(e)}
            onChange={(e) => setSearch(e.target.value)}
          />
        </ContentBox>

        <ContentBox justifyContent={'flex-end'}>
          <TextBox color={'#fff'}>Fast Work ใช้งานยังไง?</TextBox>
          <TextBox color={'#fff'}>ส่วนลด</TextBox>
        </ContentBox>
      </NavBarContainer>

      <ContentContainer margin={`2em 0`}>
        <ContentBox flexDirection={'column'}>
          <TextBox fontWeight={'bold'} widht={'100%'}>
            Personal Assistance Service
          </TextBox>

          <TextBox
            widht={'100%'}
            color={'#2256aa'}
            fontSize={'1.5em'}
            fontWeight={'bold'}
          >
            เราหาฟรีแลนซ์ให้... แค่อีดใจเดียว
          </TextBox>

          <CheckedContainer>
            <CheckedBox>คุมงบได้เอง</CheckedBox>
            <CheckedBox>คุมงบได้เอง</CheckedBox>
            <CheckedBox>คุมงบได้เอง</CheckedBox>
            <CheckedBox>คุมงบได้เอง</CheckedBox>
          </CheckedContainer>
        </ContentBox>

        <ContentBox>Content - 2</ContentBox>
      </ContentContainer>

      <FooterContainer>
        <ContentBox>Footer - 1</ContentBox>
        <ContentBox>Footer - 2</ContentBox>
        <ContentBox>Footer - 3</ContentBox>
        <ContentBox>Footer - 4</ContentBox>
        <ContentBox>Footer - 5</ContentBox>
      </FooterContainer>
    </LayoutContainer>
  );
};

export default App;
