import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const footerData = {
    company: [
      { name: 'About', link: '/about' },
      { name: 'Portfolio', link: '/portfolio' },
      { name: 'Careers', link: '/careers' },
      { name: 'Blog', link: '/blog' },
      { name: 'Leadership', link: '/leadership' },
      { name: 'Awards', link: '/awards' },
      { name: 'Branding', link: '/branding' }
    ],
    legal: [
      { name: 'Privacy Policy', link: '/privacy' },
      { name: 'Terms & Conditions', link: '/terms' }
    ],
    services: [
      { name: 'Software Solutions', link: '/services/software' },
      { name: 'App development', link: '/services/app' },
      { name: 'AI Powered Applications', link: '/services/ai-apps' },
      { name: 'Cloud Based AI', link: '/services/cloud-ai' },
      { name: 'AI Consultation and custom AI support', link: '/services/ai-consultation' },
      { name: 'Trading Solutions', link: '/services/trading' }
    ],
    contact: {
      address: [
        'Address Line 01',
        'Address Line 02',
        'Address Line 03',
        'Country'
      ],
      phone: ['+94 11 22 33 44', '+94 22 11 33 44'],
      email: 'nexora@info.com'
    },
    social: [
      { 
        name: 'Facebook', 
        icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/facebook.svg',
        link: 'https://facebook.com',
        color: '#1877F2'
      },
      { 
        name: 'Twitter', 
        icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/twitter.svg',
        link: 'https://twitter.com',
        color: '#1DA1F2'
      },
      { 
        name: 'Instagram', 
        icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/instagram.svg',
        link: 'https://instagram.com',
        color: '#E4405F'
      },
      { 
        name: 'YouTube', 
        icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/youtube.svg',
        link: 'https://youtube.com',
        color: '#FF0000'
      },
      { 
        name: 'Website', 
        icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/internetexplorer.svg',
        link: 'https://nexora.com',
        color: '#0076D6'
      }
    ]
  };

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Ready to join with us?</h2>
        
        <div className="footer-grid">
          {/* Company Section */}
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              {footerData.company.map((item, index) => (
                <li key={index}><Link to={item.link}>{item.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="footer-column">
            <h3>Legal Section</h3>
            <ul>
              {footerData.legal.map((item, index) => (
                <li key={index}><Link to={item.link}>{item.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul>
              {footerData.services.map((item, index) => (
                <li key={index}><Link to={item.link}>{item.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-column">
            <h3>Nexora</h3>
            <div className="contact-info">
              <div className="address">
                {footerData.contact.address.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div className="phone-email">
                {footerData.contact.phone.map((number, index) => (
                  <p key={index}>{number}</p>
                ))}
                <p>{footerData.contact.email}</p>
              </div>
            </div>
          </div>

          {/* Call to Action Card */}
          <div className="footer-cta">
            <div className="cta-card">
              <h3>Let's talk about Your Idea</h3>
              <p>Bring your idea to life</p>
              <button className="cta-arrow-btn" aria-label="Contact us">
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="social-links">
            {footerData.social.map((platform, index) => (
              <a 
                key={index} 
                href={platform.link} 
                aria-label={platform.name}
                className="social-link"
                style={{'--hover-color': platform.color}}
              >
                <img 
                  src={platform.icon} 
                  alt={platform.name} 
                  className="social-icon"
                />
              </a>
            ))}
          </div>
          <p className="copyright">@2025 Nexora. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
