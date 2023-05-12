'use client';

import React from "react";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import './page.css';

export default function About() {
  const links = [
    {name: "GitHub", url: "https://github.com/kenta7777"},
    {name: "Zenn", url: "https://zenn.dev/hasken3765"}
  ];
  return (
    <Layout>
      <Header children={<h2>About</h2>} />
      <Container>
        <h2 className="text-4xl lg:text-5xl leading-tight">Me</h2>
          <div className="content-box">
            A software engineer.
          </div>
        <h2 className="text-4xl lg:text-5xl leading-tight">Main Interests</h2>
          <div className="content-box">
            <ul>
              <li>Rust</li>
              <li>Type System</li>
            </ul>
          </div>
          <h2 className="text-4xl lg:text-5xl leading-tight">Links</h2>
            <div className="content-box">
              <ul>
                {links.map((link, index) => 
                  <li key={index}> 
                    <div>
                      <a rel="noreferrer" target="_blank" href={link.url}>{link.name}</a>
                    </div>
                  </li>
                )}
              </ul>
            </div>
      </Container> 
    </Layout>
  );
}
