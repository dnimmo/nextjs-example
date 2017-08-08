import React from 'react';
import Link from 'next/link';
import Navigation from './Navigation';

const header =
  () => (
    <div>
      <header>
        <Link href="/index">
          <a className="logo" >
            Logo goes here
          </a>
        </Link>
      </header>
      <Navigation />
    </div>
  );

export default header;
