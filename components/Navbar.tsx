// components/Navbar.tsx
import React, { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/flip">
            Flip
          </Link>
        </li>
        <li>
          <Link href="/match">
            Match
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
