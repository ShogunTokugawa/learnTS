import React from 'react';

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header
        title={'Shop'}
        logo={'https://lh3.googleusercontent.com/proxy/SWa8hXrZPzNvGI1UtzlXci-wMeeI25rK6R5dvwR9r7FoKX5wWLSoVtV5_7DeHgvtxaT2dj32p0ZS9OC_XOmDqPRc2oV-oXzB9s_OJY2VRxG6tkWzeswGdqMCSmxGIn9ERPUFjIKcn6HB1-oQuylTzE3pPZDh5Th_PUbbOi-hHJ0_qVw0u58'}
        bgColor={'red'}
      />
      <Nav
        links={
            [
                {
                    title: 'Новости',
                    link: '/news'
                },
                {
                    title: 'Блог',
                    link: '/blog'
                },
                {
                    title: 'Каталог',
                    link: '/catalog'
                },
                {
                    title: 'Контакты',
                    link: '/contact'
                },
                {
                    title: 'Инфо',
                    link: '/news'
                },
            ]}
      />
      <Footer/>
    </div>
  );
}

export default App;
