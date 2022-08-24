import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/violet-logo.png"
          alt="An image showing Gabriel"
          width={300}
          height={300}
        />
      </div>
      <h1>Violet Software Solutions &copy;</h1>
      <p>
        Software Engineering, TI Consultancy & Management.
      </p>
    </section>
  );
}

export default Hero;
