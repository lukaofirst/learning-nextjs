import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src='/images/site/lucas.jpg'
                    alt='An image showing Lucas'
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Lucas</h1>
            <p>
                I blog about web development - You'll find everything about
                React, TypeScript, JavaScript and so much more!
            </p>
        </section>
    );
}

export default Hero;
