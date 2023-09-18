import Link from 'next/link';

const Topbar = () => {
  return (
    <div>
      <div>
        <span>Kunal.</span>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
