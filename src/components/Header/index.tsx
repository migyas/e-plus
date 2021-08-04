import React, { useState, useEffect } from 'react';
import searchImg from '../../assets/icons/search_black_24dp.svg';
import profileImg from '../../assets/icons/person_black_24dp.svg';
import cartImg from '../../assets/icons/shopping_cart_black_24dp.svg';
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
} from './styled';
import api from '../../service/api';
import formatPrice from '../../util/format';
// import formatPrice from '../../util/format';

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

  function handleChangeModalCart() {
    setModalCart(true);
  }

  const dataCart = async () => {
    const response = await api.get('/cart');

    const { data } = response;

    const modifiedData = data.item.map((product: any) => ({
      ...product,
      image: `../../assets${product.image}`,
    }));

    setCart(data.item);
    console.log(modifiedData);
  };

  const total = cart.reduce(
    (accumulator: any, product: any) => accumulator + product.bestPrice,
    0,
  );

  useEffect(() => {
    dataCart();
  }, []);

  return (
    <>
      <Container>
        <Logo>
          <h1>Agência e-Plus</h1>
          <img src={mainLogo} alt="main logo" />
        </Logo>
        <Menu>
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
              <ModalCart>
                <div className="arrow_box" />
                <h1>Carrinho</h1>
                <ModalCartList>
                  <ModalCartItem>
                    <img src={product1} alt="product 1" />
                    <ModalCartDescription>
                      <h3>{cart[0].name}</h3>
                      <div>
                        <strong>Qtd: {cart[0].quantity}</strong>
                        <span>{cart[0].bestPriceFormated}</span>
                      </div>
                    </ModalCartDescription>
                  </ModalCartItem>
                  <ModalCartItem>
                    <img src={product4} alt="product 1" />
                    <ModalCartDescription>
                      <h3>{cart[1].name}</h3>
                      <div>
                        <strong>Qtd: {cart[1].quantity}</strong>
                        <span>{cart[1].bestPriceFormated}</span>
                      </div>
                    </ModalCartDescription>
                  </ModalCartItem>
                  <ModalCartItem>
                    <img src={product3} alt="product 1" />
                    <ModalCartDescription>
                      <h3>{cart[2].name}</h3>
                      <div>
                        <strong>Qtd: {cart[2].quantity}</strong>
                        <span>{cart[2].bestPriceFormated}</span>
                      </div>
                    </ModalCartDescription>
                  </ModalCartItem>
                  <ModalCartItem>
                    <img src={product2} alt="product 1" />
                    <ModalCartDescription>
                      <h3>{cart[3].name}</h3>
                      <div>
                        <strong>Qtd: {cart[3].quantity}</strong>
                        <span>{cart[3].bestPriceFormated}</span>
                      </div>
                    </ModalCartDescription>
                  </ModalCartItem>
                </ModalCartList>
                <ModalCartFooter
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#dcdcdc',
                  }}
                >
                  <span>
                    Total do pedido:
                    {formatPrice(total)}
                  </span>
                  <button type="button">comprar</button>
                </ModalCartFooter>
              </ModalCart>
            </>
          )}
        </Profile>
      </Container>
    </>
  );
};

export default Header;
