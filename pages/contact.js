import Head from 'next/head';
import { Fragment } from 'react';

import ContactForm from '../components/contact/contact-form';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Violet</title>
        <meta
          name="description"
          content="Violet Software Solutions Home Page"
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
