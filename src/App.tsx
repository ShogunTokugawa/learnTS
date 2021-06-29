import React from 'react';

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import Button from "./components/Button";
import State from "./components/State";
import Collapse from "./components/Collapse";
import Card from "./components/Card";
import Breadcrumb from "./components/Breadcrumb";
import Minislider from "./components/MiniSlider";
import Squares from "./components/Squares";
import Input from  "./components/Input";
import Longtext from "./components/Longtext";
import Title from "./components/Title";
//import Rating from "./components/Rating";
import Tags from "./components/Tags";
import Pagination from "./components/Pagination";

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

            <Alert
                type={'primary'}
            >
                осторожно, модерн!
            </Alert>

            <Alert
                type={'secondary'}
            >
                осторожно, модерн!
            </Alert>

            <Button
                variant={'primary'}
                type='button'
                onClick={()=> {
                    alert("pavel mentor")
                }}
            >
                КЛИК
            </Button>

            <Button
                variant={'success'}
                type='button'

            >
                КЛИК
            </Button>

            <Button
                variant={'secondary'}
                type='button'
            >
                КЛИК
            </Button>

            <Button
                variant={'secondary'}
                type='button'
                isLink={true}
                href={'https://vk.com/shogun_tokugawa'}
            >
                КЛИК
            </Button>

            <State/>

            <Collapse>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
            </Collapse>

            <Card
                url={'https://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg'}
                title={'Карточка'}
            >
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
            </Card>

            <Breadcrumb
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

            <Minislider
                links={[
                    'https://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg',
                    'https://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-02.jpg',
                    'https://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-03.jpg',
                ]}
            />

            <Squares/>

            <Input
                min={2}
                max={5}
                //type={'password'}
                //placeholder={'введите текст'}
                //valueText={''}
            />
            <br/>
            <Longtext
                text={'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ' +
                'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. ' +
                'В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя ' +
                'Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, ' +
                'но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с ' +
                'образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus ' +
                'PageMaker, в шаблонах которых используется Lorem Ipsum.'}
            />

            <Title
                titles={'Заголовок'}
                color={'red'}
                size={'20px'}
            />

            <Tags
                links={
                    [
                        {
                            title: 'Тег №1',
                            href: 'http://link1.ru',
                        },
                        {
                            title: 'Тег №2',
                            href: 'http://link2.ru',
                        },
                        {
                            title: 'Тег №3',
                            href: 'http://link3.ru',
                        },
                    ]}
            />

            <Pagination
                countArticles={3}
                limit={2}
                links={
                    [
                        {
                            title: 'Prev',
                            href: 'http://linkprev.ru',
                        },
                        {
                            title: '1',
                            href: 'http://link2.ru',
                        },
                        {
                            title: '2',
                            href: 'http://link3.ru',
                        },
                        {
                            title: '3',
                            href: 'http://link4.ru',
                        },
                        {
                            title: '4',
                            href: 'http://link5.ru',
                        },
                        {
                            title: '5',
                            href: 'http://link6.ru',
                        },
                        {
                            title: 'Next',
                            href: 'http://linknrxt.ru',
                        },
                    ]}
            />

            <Footer/>
        </div>
    );
}

export default App;
