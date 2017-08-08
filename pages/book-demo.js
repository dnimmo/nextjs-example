import Link from 'next/link';
import PageHead from '../components/common/PageHead';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const page =
  () => (
    <div>
      <PageHead pageTitle="Book A Demo Page" />
      <Header pageTitle="NextJS Example - Book a demo" />
      <main className="content">
        <p>Book a demo and fall in love etc.</p>
      </main>
      <Footer />
    </div>
  );

export default page;
