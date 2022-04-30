import Link from "next/link";


const HeaderGlobal = () => {
  return <div className="fixed top-0 left-0 w-full z-50 bg-white">
    <div className="container flex py-[16px]">
      <Link href="/">
        <a>
          <img src="/img/logo.webp"
            srcSet="/img/logo@2x.webp 2x,
              /img/logo@3x.webp 3x" alt="logo" />
        </a>
      </Link>
      <button className="ml-auto">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 8H1V6H23V8ZM23 15.5H1V17.5H23V15.5Z" fill="black" />
        </svg>
      </button>
    </div>
  </div>;
};

export default HeaderGlobal;
