import styled from 'styled-components';

export const LayoutContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #fff;

  display: flex;
  flex-direction: column;
`;

export const NavBarContainer = styled.div`
  width: 100%;
  color: #fff;
  padding: 0.5em 0;
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  background-color: #1a44a4;
  box-shadow: 3px 0 5px #222;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f9fbfe;
  margin: ${(props) => props.margin || '0'};

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  padding: 0.5em 0;
  flex-direction: column;
  background-color: #1a44a4;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  padding: 0.1em 1em;
  box-sizing: border-box;

  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
`;

export const CheckedContainer = styled.div`
  display: grid;
`;
export const CheckedBox = styled.div``;
