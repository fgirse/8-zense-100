"use client";

import Image from "next/image";
import Social from "Components/Social";
import config from "../../config/config.json";
import menu from "../../config/menu.json";
import social from "../../config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";
import { Phudu } from "next/font/google";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="bg-red-800 dark:bg-darkmode-theme-light">
      <div className="container">

        <div className="row items-center py-10">
          <div className="bg-red-800 mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
            <Image src="/images/LogoEZ.png" alt="Logo 8-zense.com" height="120" width="120" />
          </div>
          <div className="mb-8 text-slate-600 text-center lg:col-6 lg:mb-0">
            <ul>
              {menu.footer.map((menu) => (
                <li className="m-3 inline-block" key={menu.name}>
                  <Link href={menu.url}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
            <Social source={social.main} className="social-icons" />
          </div>
        </div>
      </div>
      <div className="border-t border-border py-7 dark:border-darkmode-border">
      

        <div className="bg-red-800 my-10 text-[.7rem] font-medium text-center text-gray-300 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. All rights by{" "}
         {/*} <a
            href="https://web3templates.com/"
            target="_blank"
            rel="noopener">
            Web3Templates.
              </a>{" "}*/}
           <span className="text-white font-phudu">MEDICUS DESIGN{" "}</span>
          <a
            href="https://www.glazestock.com/"
            target="_blank" rel="noreferrer"
            >
           4058 Basel🇨🇭
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
