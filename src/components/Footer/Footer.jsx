import React from 'react';
import './Footer.css';
import { FooterResponsive } from '../index.js';
import {
  Logo,
  VisaLogo,
  MasterCardLogo,
  AmericanExpressLogo,
  SkrillLogo,
  BitcoinCashLogo,
  EthereumLogo,
  BitcoinLogo,
  LitelcoinLogo,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  DiscordLogo,
  StarIcon,
} from '../../assets/index.js';


/*--------------------------------------------------------------
#                           Footer
--------------------------------------------------------------*/

const Footer = () => {
  return (
    <footer className="footer">
      <div className="payment-methods">
        <div className="payment-methods-contain">
          <img
            className="payment-method"
            height={32}
            src={VisaLogo}
            alt="Visa.logo"
          />
          <img
            className="payment-method"
            height={42}
            src={MasterCardLogo}
            alt="MasterCard.logo"
          />
          <img
            className="payment-method"
            height={62}
            src={AmericanExpressLogo}
            alt="AmericaExpress.logo"
          />
          <img
            className="payment-method"
            height={32}
            src={SkrillLogo}
            alt="Skrill.logo"
          />
          <div className="cryptos">
            <img
              className="payment-method"
              height={24}
              src={BitcoinCashLogo}
              alt="BTCC.logo"
            />
            <img
              className="payment-method"
              height={24}
              src={EthereumLogo}
              alt="Ethereum.logo"
            />
            <img
              className="payment-method"
              height={24}
              src={BitcoinLogo}
              alt="BTC.logo"
            />
            <img
              className="payment-method"
              height={24}
              src={LitelcoinLogo}
              alt="LTC.logo"
            />
          </div>
          <span className="more-payment-methods">and 50+ more</span>
        </div>
      </div>
      <div className="content-footer">
        <div className="social-networks">
          <a href="https://www.facebook.com/Chicksgroup" className="social-network-link" target='blank'>
            <img
              className="social-network-img"
              height={38}
              src={FacebookLogo}
              alt="facebook.logo"
            />
          </a>
          <a href="https://www.instagram.com/chicksgold?igsh=MWw0d294MmZvMmN3NA==" className="social-network-link" target='blank'>
            <img
              className="social-network-img"
              height={38}
              src={InstagramLogo}
              alt="instagram.logo"
            />
          </a>
          <a href="https://x.com/chicksgold" className="social-network-link" target='blank'>
            <img
              className="social-network-img"
              height={38}
              src={TwitterLogo}
              alt="twitter.logo"
            />
          </a>
          <a href='https://discord.com/invite/chicksgroup' className="social-network-link" target='blank'>
            <img
              className="social-network-img"
              height={38}
              src={DiscordLogo}
              alt="discord.logo"
            />
          </a>
        </div>
        <div className="about">
          <div className="email">
            <img
              className="logo-chicksgold"
              height={38}
              src={Logo}
              alt="Logo-chicks"
            />
            <span className="email-chicksgold">support@chicksgold.com</span>
          </div>

          <div className="info-section">
            <span className="info-title">Chicks Gold</span>
            <div className="info-list">
              <a href="#games" className="link">
                Games
              </a>
              <a href="#about-us" className="link">
                About Us
              </a>
              <a href="blog" className="link">
                Blog
              </a>
              <a href="sitemap" className="link">
                Sitemap
              </a>
            </div>
          </div>
          <div className="info-section">
            <span className="info-title">Support</span>
            <div className="info-list">
              <a href="#games" className="link">
                Contact Us
              </a>
              <a href="#about-us" className="link">
                FAQ
              </a>
            </div>
          </div>
          <div className="info-section">
            <span className="info-title">Legal</span>
            <div className="info-list">
              <a href="#games" className="link">
                Privacy Policy
              </a>
              <a href="#about-us" className="link">
                Terms of Service
              </a>
              <a href="blog" className="link">
                Copyright Policy
              </a>
            </div>
          </div>
          <div className="info-mobile">
            <FooterResponsive />
          </div>
          <div className="reviews">
            <a href="#truspilot" className="truspilot-name">
              Trustpilot Reviews
            </a>
            <div className="stars">
              <div className="star">
                <img
                  className="star-img"
                  height={14}
                  src={StarIcon}
                  alt="star"
                />
              </div>
              <div className="star">
                <img
                  className="star-img"
                  height={14}
                  src={StarIcon}
                  alt="star"
                />
              </div>
              <div className="star">
                <img
                  className="star-img"
                  height={14}
                  src={StarIcon}
                  alt="star"
                />
              </div>
              <div className="star">
                <img
                  className="star-img"
                  height={14}
                  src={StarIcon}
                  alt="star"
                />
              </div>
              <div className="star">
                <img
                  className="star-img"
                  height={14}
                  src={StarIcon}
                  alt="star"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2017 - 2020 Chicksgold.com. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer