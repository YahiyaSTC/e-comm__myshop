import React from "react";
import './Footer.css'

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p><span> &copy; {year} </span> All Rights Reservd</p>
    </footer>
  );
}

export default Footer;
