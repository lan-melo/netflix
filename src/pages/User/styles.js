import styled from 'styled-components';

export const Container = styled.div`
  header {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
  }

  img {
      width: 100px;
      margin-left: 60px;
      cursor: pointer;
  }

  .user-content {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
      font-size: 3.5vw;
      color: #FFF;
      margin-bottom: 20px;
      text-align: center;
  }

  ul {
      display: flex;
      margin-right: 0vw;
      flex-direction: row;
      text-align: center;
  }

  .userAvatar {
      width: 10vw;
      height: 10vw;
      margin: 0 .9em;
      max-height: 200px;
      max-width: 200px;
      min-height: 84px;
      min-width: 84px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      position: relative;
      transition: 0.5s;
      border: .3em solid black;
  }

  .AddUser {
      border: none;
      width: 10vw;
      height: 10vw;
      margin: 0 .9em;
      max-height: 200px;
      max-width: 200px;
      min-height: 84px;
      min-width: 84px;
      padding: 30px;
  }

  li:hover {
      
    img {
        border: .3em solid white;
    }

    .AddUser {
        border: none;
        background: #FFF;
    }
      
    span {
        color: white;
      }
  }

  span {
      display: block;
      line-height: 1.2em;
      min-height: 1.8em;
      color: grey;
      text-align: center;
      font-size: 1.3vw;
      margin: .6em 0;
  }

  button {
        width: 20vw;
        border: 1px solid grey;
        background: transparent;
        margin-top: 60px;
        padding: .5em 1.5em;
        color: grey;
        font-family: 'Roboto';
        text-transform: uppercase;
        cursor: pointer;
        letter-spacing: 2px;
        font-size: 1.3vw;
        font-weight: bold;
        transition: 0.5s;
  }

   button:hover {
        border: 1px solid white;
        color: white;
  }

`;
