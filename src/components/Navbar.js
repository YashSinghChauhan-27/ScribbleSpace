import { Disclosure } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const navigation = [
  { name: "Home", href: "/", key: "home" },
  { name: "About", href: "/about", key: "about" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ isAuthenticated, handleLogout }) => {
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

return (
    <Disclosure
        as="nav"
        className="py-3 bg-gradient-to-r from-[#534AA1] to-transparent text-white"
    >
        {({ open }) => (
            <>
                <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between px-4">
                        <div className="flex items-center space-x-4">
                            <div className="font-bold text-lg text-white">
                                ScribbleSpace
                            </div>
                            {isAuthenticated &&
                                navigation.map((item) => (
                                    <Link
                                        key={item.key}
                                        to={item.href}
                                        className={classNames(
                                            location.pathname === item.href
                                                ? "bg-gray-900 text-white"
                                                : "text-white hover:text-[#534AA1] no-underline relative group",
                                            "rounded-md text-base font-medium"
                                        )}
                                        aria-current={
                                            location.pathname === item.href ? "page" : undefined
                                        }
                                    >
                                        {item.name}
                                        <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                    </Link>
                                ))}
                        </div>
                        <div className="flex items-center space-x-4">
                            {!isAuthenticated ? (
                                <>
                                    <Link
                                        to="/login"
                                        className="text-[#534AA1] font-bold hover:text-[#534AA1] text-[1.075rem] no-underline relative group"
                                    >
                                        Login
                                        <div className="absolute left-0 bottom-0 w-full h-0.5 bg-[#534AA1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="text-[#534AA1] font-bold hover:text-[#534AA1] text-[1.075rem] no-underline relative group"
                                    >
                                        Signup
                                        <div className="absolute left-0 bottom-0 w-full h-0.5 bg-[#534AA1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                    </Link>
                                </>
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className="bg-transparent text-[#534AA1] font-bold rounded-md text-[1.075rem] border-0 relative group"
                                >
                                    Logout
                                    <div className="absolute left-0 bottom-0 w-full h-0.5 bg-[#534AA1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </>
        )}
    </Disclosure>
);
};

export default Navbar;
