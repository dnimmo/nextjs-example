import Link from 'next/link';
import PageHead from '../components/common/PageHead';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const page =
  () => (
    <div>
      <PageHead pageTitle="About Page" />
      <Header pageTitle="NextJS Example - About" />
      <main className="content">
        <p>Some stuff about how easy this was here</p>
      </main>
      <Footer />
    </div>
  );

export default page;
