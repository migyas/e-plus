import styled from 'styled-components';

const Container = styled.header`
  background-color: #fff;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
  padding-right: 3rem;
  padding-left: 3rem;

  @media screen and (max-width: 800px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const Logo = styled.div`
  padding-right: 1rem;
  h1 {
    display: none;
  }

  img {
    width: 30rem;
    height: 6rem;
  }

  @media screen and (max-width: 1100px) {
    img {
      width: 25rem;
      height: 6rem;
    }
  }

  @media screen and (max-width: 280px) {
    img {
      width: 20rem;
      height: 5rem;
    }
  }
`;

const Menu = styled.nav`
  width: 73rem;
  ul {
    display: flex;
    list-style: none;

    li {
      width: 25rem;
      a {
        text-transform: capitalize;
        font-size: 1.65rem;
        color: #434343;
        text-decoration: none;
        letter-spacing: -0.5px;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    ul {
      li {
        width: 10rem;
        padding: 0.5rem;

        a {
          font-size: 1.25rem;
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    display: none;

    &.active {
      position: absolute;
      display: block;
      top: 8rem;
      left: 0;
      width: 100%;
      background: #bdbdbd;
      ul {
        flex-direction: column;

        li {
          display: block;
          padding: 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        }
      }
    }
  } ;
`;

const MenuMobile = styled.button`
  border: none;
  background: none;
  visibility: hidden;
  padding: 0.5rem;

  @media screen and (max-width: 820px) {
    visibility: visible;
  } ;
`;

const Profile = styled.div`
  width: 23rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  img {
    width: 3.85rem;
    height: 3.85rem;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    width: 20rem;
    img {
      width: 3.5rem;
      height: 3.5rem;
      padding: 0.2rem;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 0;
  } ;
`;

const ModalCart = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 6.4rem;
  right: -2.6rem;
  width: 37rem;
  height: 51.8rem;
  padding: 0.5rem;

  background-color: #f3f3f3;

  h1 {
    display: none;
  }

  .arrow_box {
    position: relative;
  }
  .arrow_box:after,
  .arrow_box:before {
    top: -4rem;
    left: 90%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .arrow_box:after {
    border-color: rgba(136, 183, 213, 0);
    border-bottom-color: #f3f3f3;
    border-width: 16px;
    margin-left: -16px;
  }
`;

const ModalCartList = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 0.5rem;
  height: 38rem;
  background-color: #f3f3f3;

  overflow-y: auto;
`;

const ModalCartItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #bdbdbd;

  img {
    width: 9rem;
    height: 9rem;
    margin-right: 1.4rem;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 400;
    max-width: 26ch;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 1rem;
  }
`;

const ModalCartDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  padding-right: 5rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;

    span {
      font-weight: bold;
      color: #2fb12f;
    }

    strong {
      color: #434343;
    }
  }
`;

const ModalCartFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    height: 7rem;

    strong {
      margin-left: 1rem;
    }
  }

  button {
    width: 103%;
    height: 6.5rem;
    border: none;
    color: #fff;
    background-color: #2fb12f;
    text-transform: uppercase;
    font-size: 1.75rem;
    font-weight: bold;
  }
`;

export {
  Container,
  Content,
  Menu,
  Profile,
  Logo,
  ModalCart,
  ModalCartList,
  ModalCartItem,
  ModalCartDescription,
  ModalCartFooter,
  MenuMobile,
};
