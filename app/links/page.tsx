'use client';

import { useRouter } from "next/navigation";
import React from "react";
import Header from "../../components/header";
import Layout from "../../components/layout";

export default function Links() {
  const router = useRouter()
  const links = [
    {name: "GitHub", url: "https://github.com/kenta7777"},
    {name: "Zenn", url: "https://zenn.dev/hasken3765"}
  ];
  return (
    <Layout>
      <Header children={<h2>Links</h2>} />
      {
        <>
          <ul>
              {links.map((link, index) => 
                <li key={index}> 
                  <div>
                    <a className="hover:underline" rel="noreferrer" target="_blank" href={link.url}>{link.name}</a>
                  </div>
                </li>
              )}
          </ul>
        </>
      }
    </Layout>
  );
}
