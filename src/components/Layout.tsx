import Link from "next/link";
import Head from "next/head";

import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";

const Layout = ({ children, title = '4Yu4Me4Us - Your AI Art Haven' }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="py-6 md:py-12 bg-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 flex items-center justify-center">
              <Link href="/">
                <a className="flex items-center text-gray-900">
                  {/* Logo and Store Name Here */}
                  <span className="text-lg font-medium">
                    4Yu4Me4Us
                  </span>
                </a>
              </Link>
            </div>
            <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
              {/* User Login, Wishlist, and Cart Icons Here */}
            </div>
          </div>
        </div>
      </header>
      <main className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">{children}</div>
      </main>
      <footer className="max-w-6xl mx-auto px-6">
        <div className="py-6 border-t border-gray-100 text-center flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            Discover the world of AI art at
            <a
              href="https://4yu4me4us.com"
              title="Explore 4Yu4Me4Us"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-gray-800 hover:text-blue-600"
            >
              4Yu4Me4Us
            </a>
            . Created with {"<3"}
          </p>
          <nav className="flex items-center justify-end space-x-3 md:space-x-6">
            <Link href="/faqs">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                About Me
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                Contact Us
              </a>
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Layout;
