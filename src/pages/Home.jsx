import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const images = [
        {
            title: "first game",
            image: "https://placehold.co/350"
        },
        {
            title: "second game",
            image: "https://placehold.co/350"
        },
        {
            title: "third game",
            image: "https://placehold.co/350"
        }
    ];
  return (
    <section id='home-page'>
        <article>
            <header className='article-header'>
                <h3>Latest Story</h3>
                <h1>
                    <Link>Elder Scrolls Online Trash?!</Link>
                </h1>
                <p className='article-timestamp'>
                    <em>Author: Tex Avery</em>
                    <time datetime="">{Date("en-US").toLocaleString()}</time>
                </p>
            </header>
            <section className='article-para'>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
            </section>
        </article>
        <article>
            <header className='article-header'>
                <h3>Latest Games</h3>
            </header>
            <section className='article-para'>
                {images.map((image, index) => (
                    <figure key={index}>
                        <img src={image.image} alt={image.title} />
                        <figcaption>{image.title}</figcaption>
                    </figure>
                ))}
            </section>
        </article>
    </section>
  )
}

export default Home;