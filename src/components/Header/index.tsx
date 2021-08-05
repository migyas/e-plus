import React, { useState, useEffect, useRef } from 'react';
import searchImg from '../../assets/icons/search_black_24dp.svg';
import profileImg from '../../assets/icons/person_black_24dp.svg';
import cartImg from '../../assets/icons/shopping_cart_black_24dp.svg';
import menuMobile from '../../assets/icons/menu.svg';
import mainLogo from '../../assets/images/logo.png';
import product1 from '../../assets/images/products/note01-samsung-160-160.jpg';
import product2 from '../../assets/images/products/note02-samsung-160-160.jpg';
import product3 from '../../assets/images/products/impressora-canon-160-160.jpg';
import product4 from '../../assets/images/products/note-gamer-acer-160-160.jpg';
import {
  Container,
  Menu,
  Profile,
  Logo,
  ModalCart,
  ModalCartList,
  ModalCartItem,
  ModalCartDescription,
  ModalCartFooter,
  MenuMobile,
  Content,
} from './styled';
import api from '../../service/api';
import formatPrice from '../../util/format';
import useOutsideClick from '../../hooks/useOutsideClick';

interface PropsCart {
  name: string;
  productId: number;
  quantity: number;
  bestPrice: number;
  bestPriceFormated: number;
}

const Header: React.FC = () => {
  const [cart, setCart] = useState<PropsCart[]>([]);
  const [modalCart, setModalCart] = useState(false);
  const refModal = useRef<any>();
  const refNav = useRef<any>();

  useOutsideClick(refModal, (): void => {
    if (modalCart) {
      setModalCart(false);
    }
  });

  useOutsideClick(refNav, (): void => {
    if (modalCart === false) {
      const menu = document.getElementById('menu');
      menu?.classList.remove('active');
    }
  });

  function handleChangeModalCart() {
    setModalCart(true);
  }

  function handleChangeMenu() {
    const menu = document.getElementById('menu');
    menu?.classList.toggle('active');
  }

  const dataCart = async () => {
    const response = await api.get('/cart');

    const { data } = response;

    const modifiedData = data.item.map((product: any) => ({
      ...product,
      image: `../../assets${product.image}`,
    }));

    setCart(modifiedData);
  };

  const total = formatPrice(
    cart.reduce(
      (accumulator: number, product: any) =>
        accumulator + product.bestPrice * product.quantity,
      0,
    ),
  );

  useEffect(() => {
    dataCart();
  }, []);

  return (
    <>
      <Container>
        <Content>
          <Logo>
            <h1>Agência e-Plus</h1>
            <img src={mainLogo} alt="main logo" />
          </Logo>

          <Menu id="menu">
            <ul>
              <li>
                <a href="/">lorem ipsum</a>
              </li>
              <li>
                <a href="/">lorem ipsum</a>
              </li>
              <li>
                <a href="/">lorem ipsum</a>
              </li>
              <li>
                <a href="/">lorem ipsum</a>
              </li>
              <li>
                <a href="/">lorem ipsum</a>
              </li>
            </ul>
          </Menu>
          <Profile>
            <img src={searchImg} alt="search icon" />
            <img src={profileImg} alt="search icon" />
            <div aria-hidden onClick={() => handleChangeModalCart()}>
              <img src={cartImg} alt="search icon" />
            </div>

            {modalCart && (
              <>
                {cart.length > 0 ? (
                  <>
                    <ModalCart ref={refModal}>
                      <div className="arrow_box" />
                      <h1>Carrinho</h1>
                      <ModalCartList>
                        <ModalCartItem>
                          <img src={product1} alt="product 1" />
                          <ModalCartDescription>
                            <h3>{cart[0]?.name}</h3>
                            <div>
                              <strong>Qtd: {cart[0]?.quantity}</strong>
                              <span>{cart[0]?.bestPriceFormated}</span>
                            </div>
                          </ModalCartDescription>
                        </ModalCartItem>
                        <ModalCartItem>
                          <img src={product4} alt="product 1" />
                          <ModalCartDescription>
                            <h3>{cart[1]?.name}</h3>
                            <div>
                              <strong>Qtd: {cart[1]?.quantity}</strong>
                              <span>{cart[1]?.bestPriceFormated}</span>
                            </div>
                          </ModalCartDescription>
                        </ModalCartItem>
                        <ModalCartItem>
                          <img src={product3} alt="product 1" />
                          <ModalCartDescription>
                            <h3>{cart[2]?.name}</h3>
                            <div>
                              <strong>Qtd: {cart[2]?.quantity}</strong>
                              <span>{cart[2]?.bestPriceFormated}</span>
                            </div>
                          </ModalCartDescription>
                        </ModalCartItem>
                        <ModalCartItem>
                          <img src={product2} alt="product 1" />
                          <ModalCartDescription>
                            <h3>{cart[3]?.name}</h3>
                            <div>
                              <strong>Qtd: {cart[3]?.quantity}</strong>
                              <span>{cart[3]?.bestPriceFormated}</span>
                            </div>
                          </ModalCartDescription>
                        </ModalCartItem>
                      </ModalCartList>
                      <ModalCartFooter>
                        <span>
                          Total do pedido: {'  '}
                          <strong>{total}</strong>
                        </span>
                        <button type="button">finalizar compra</button>
                      </ModalCartFooter>
                    </ModalCart>
                  </>
                ) : (
                  <ModalCart ref={refModal}>
                    <span>Não há itens no carrinho</span>
                  </ModalCart>
                )}
              </>
            )}
          </Profile>
          <MenuMobile onClick={() => handleChangeMenu()} ref={refNav}>
            <img src={menuMobile} alt="menu mobile" />
          </MenuMobile>
        </Content>
      </Container>
    </>
  );
};

export default Header;
