import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
      h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

function NavBar() {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        <CustomLink href='/contact' title='Contact' className='ml-4' />
      </nav>

      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
          href='https://github.com/FThelin'
          target={"_blank"}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
          href='https://www.linkedin.com/in/fredrik-thelin-66bbb1171/'
          target={"_blank"}
        >
          <LinkedInIcon />
        </motion.a>
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
}

export default NavBar;
