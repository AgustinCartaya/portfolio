import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <CustomFooter>
      <div className="footer__copyright">
        <p>Agustin Cartaya Copyright (c) 2023 All rights reserved</p>
      </div>
      <div className="footer__icons">
        <a href="https://www.linkedin.com/in/agustincartaya/" target="_blank" className="social__link">
          <img src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://github.com/AgustinCartaya" target="_blank" className="social__link">
          <img src="https://img.icons8.com/ios-filled/50/github.png" alt="github" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=+33758936689" target="_blank" className="social__link">
          <img src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="whatsapp--v1" />
        </a>
        <a href="" target="_blank" className="social__link">
          <img src="https://img.icons8.com/ios-filled/50/new-post.png" alt="new-post" />
        </a>
      </div>
    </CustomFooter>
  );
};

export default Footer;

const CustomFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #bababa;
  padding: 15px 30px;
  border-radius: 0 0 5px 5px;

  .footer__copyright, .footer__icons {
    display: flex;
    align-items: center;
  }

  .footer__copyright p {
    font-weight: 500;
    margin: 0;
  }

  .footer__icons {
    gap: 20px;
  }

  .social__link {
    display: flex;
  }

  .social__link img {
    width: 30px;
    height: 30px;
  }


  @media (max-width: 650px) {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
