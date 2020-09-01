import styled from 'styled-components';

export const Container = styled.div`
  .mainLogo {
      position: fixed;
      top: 0;
      left: -20;
      right: 0;
      width: 100vw;
      height: 50vw;
  }

  header {
      position: absolute;
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
  }

  ul {
      display: flex;
      flex-direction: row;
      align-items: center;
  }

  .navBar {
       margin-right: 2vw;
       color: white;
       cursor: pointer;
  }

  .navBar:hover {
      color: grey;
  }

  .mainContent {
      margin-top: 75vh;
      position: fixed;
      align-items: center;
      display: grid;
      grid-template-columns: repeat(5, 100%);
      overflow: hidden;
      scroll-behavior: smooth;
  }

  .mainContent ul {
      width: 100%;
      position: relative;
      display: grid;
      grid-template-columns: repeat(5, auto);
  }

  .mainImage img {
      width: 20vw;
      height: 12hw;
      margin-right: -11.7vw;
  }

  img {
      width: 100px;
      margin-left: 60px;
      cursor: pointer;
  }
`;
