import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import patternBg from '../assets/images/pattern-bg.jpg';
import person1 from '../assets/images/person1.jpg';
import person2 from '../assets/images/person2.jpg';
import comma from '../assets/images/comma.png';
import portfolioImage1 from '../assets/images/portfolioImage1.jpg';
import portfolioImage2 from '../assets/images/portfolioimage2.jpg';
import portfolioImage3 from '../assets/images/portfolioImage3.jpg';
import newsimage from '../assets/images/newsimage.jpg';
import newsimage2 from '../assets/images/newsimage2.jpg';
import aws from '../assets/images/aws.png';
import ifs from '../assets/images/ifs.png';
import syscolabs from '../assets/images/syscolabs.png';
import virtusa from '../assets/images/virtusa.png';
import wso2 from '../assets/images/wso2.png';
import x99 from '../assets/images/99x.png';
import event1 from '../assets/images/event1.jpg';
import event2 from '../assets/images/event2.jpg';

import './HomePage.css';


const HomePage = () => {
  const services = [
    {
      id: "01",
      title: "Software Solutions",
      description: "Innovative, scalable software tailored for your unique needs."
    },
    {
      id: "02",
      title: "App Development",
      description: "Crafting user-centric, high-performance applications for every platform."
    },
    {
      id: "03",
      title: "AI Power Applications",
      description: "Intelligent solutions to drive smarter decisions and automation."
    },
    {
      id: "04",
      title: "Cloud Based AI",
      description: "Intelligent solutions to drive smarter decisions and automation."
    },
    {
      id: "05",
      title: "AI Consultation and Custom AI...",
      description: "Personalized AI strategies and training for unparalleled business growth."
    },
    {
      id: "06",
      title: "Trading Solutions",
      description: "Data-driven AI tools for smarter, faster trading decisions."
    }
  ];

  const testimonials = [
    {
      projectName: "PROJECT NAME",
      content: "Lorem ipsum dolor sit amet consectetur. A congue faucibus adipiscing non massa. Egestas elementum id. Sit eu pellentesque lacus sem in nulla nulla. Id tristique aliquet ultrices nunc consectetur. Nibh consequat leo id.",
      comma : comma,
      customerName: "Customer Name",
      designation: "Customer About or Designation",
      image: person1

    },
    {
      projectName: "PROJECT NAME",
      content: "Lorem ipsum dolor sit amet consectetur. A congue faucibus adipiscing non massa. Egestas elementum id. Sit eu pellentesque lacus sem in nulla nulla. Id tristique aliquet ultrices nunc consectetur. Nibh consequat leo id.",
      comma : comma,
      customerName: "Customer Name",
      designation: "Customer About or Designation",
      image:person2
    }
  ];

  const portfolioWorks = [
    {
      title: "Smart inventory management system",
      description: "Developed an AI-powered inventory management app hosted on the cloud. The app analyzed sales patterns, predicted demand, and automated stock replenishment",
      image:portfolioImage1,
      link: "/inventory"
    },
    {
      title: "AI driven trading assistance",
      description: "Developed an AI-powered inventory management app hosted on the cloud. The app analyzed sales patterns, predicted demand, and automated stock replenishment",
      image: portfolioImage2,
      link: "/trading"
    },
    {
      title: "Fitness app - with AI coaching",
      description: "Developed an AI-powered inventory management app hosted on the cloud. The app analyzed sales patterns, predicted demand, and automated stock replenishment",
      image: portfolioImage3,
      link: "/fitness"
    }
  ];

  const latestNews = [
    {
      title: "AI driven trading assistance",
      description: [
        "Developed an AI-powered inventory management app hosted on the cloud.",
        "The app analyzed sales patterns, predicted demand, and automated stock replenishment"
      ],
      image: newsimage,
      publisher: {
        name: "Publisher Name",
        avatar:  person1,
        date: "Jan 25, 2025"
      }
    },
    {
      title: "AI driven trading assistance",
      description: [
        "Developed an AI-powered inventory management app hosted on the cloud.",
        "The app analyzed sales patterns, predicted demand, and automated stock replenishment"
      ],
      image: newsimage2,
      publisher: {
        name: "Publisher Name",
        avatar: person1,
        date: "Jan 25, 2025"
      }
    }
  ];

  const clients = [
    { name: 'AWS', logo: aws},
    { name: 'WSO2', logo: wso2 },
    { name: 'Virtusa', logo: virtusa },
    { name: 'Sysco LABS', logo: syscolabs},
    { name: 'IFS', logo: ifs },
    { name: '99X', logo: x99 }
  ];

  const partners = [
    {
      name: 'WSO2',
      logo: wso2,
      description: 'Lorem ipsum dolor sit amet consectetur. A congue faucibus adipiscing non laoreet tristique praesent in.'
    },
    {
      name: 'Virtusa',
      logo: virtusa,
      description: 'Lorem ipsum dolor sit amet consectetur. A congue faucibus adipiscing non laoreet tristique praesent in.'
    },
    {
      name: 'IFS',
      logo: ifs,
      description: 'Lorem ipsum dolor sit amet consectetur. A congue faucibus adipiscing non laoreet tristique praesent in.'
    },

    {
        name: 'AWS',
        logo: aws,
        description: 'Lorem ipsum dolor sit amet consectetur. A congue faucibus adipiscing non laoreet tristique praesent in.'
    },

    {
        name: 'Sysco LABS',
        logo: syscolabs,
        description: 'Lorem ipsum dolor sit amet consectetur. A congue faucibus adipiscing non laoreet tristique praesent in.'
    },

    {
        name: '99X',
        logo: x99,
        description: 'Lorem ipsum dolor sit amet consectetur. A congue faucibus adipiscing non laoreet tristique praesent in.'
    },

  ];

  const pastEvents = [
    {
      title: "Event name",
      date: "Jan 25, 2025",
      description: [
        "Lorem ipsum dolor sit amet consectetur. A congue faucibus adipiscing non laoreet tristique praesent in.Lorem ipsum dolor",
        "sit amet consectetur. A congue faucibus adipiscing non laoreet tristique praesent in.Lorem ipsum dolor sit amet consectetur.",
        "A congue faucibus adipiscing non laoreet tristique praesent in."
      ],
      image:event1
    },
    {
      title: "Event name",
      date: "Jan 25, 2025",
      description: [
        "Lorem ipsum dolor sit amet consectetur. A congue faucibus adipiscing non laoreet tristique praesent in.Lorem ipsum dolor",
        "sit amet consectetur. A congue faucibus adipiscing non laoreet tristique praesent in.Lorem ipsum dolor sit amet consectetur.",
        "A congue faucibus adipiscing non laoreet tristique praesent in."
      ],
      image: event2
    }
  ];

  
  return (
    <div className="homepage">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        {/* Left Pattern */}
        <div className="pattern-container left">
          <img 
            src={patternBg} 
            alt="Background pattern" 
            className="hero-background-pattern"
          />
        </div>

        {/* Center Content */}
        <div className="hero-content">
            <div className='hero-paragraph'>
          <h1>Empowering Tomorrow with<br />AI-Driven Innovation.</h1>
          <p>Transform your vision into reality with cutting-edge app development, cloud-based AI solutions, 
             and tailored AI consulting. Elevate your potential, simplify thinking, and shape a smarter future 
             with Nexora Solutions.</p>
          <div className="hero-buttons">
            <button className="explore-btn">Explore Nexora →</button>
            <button className="talk-btn-secondary">Talk to us</button>
          </div>
        </div>
        </div>
        {/* Right Pattern */}
        <div className="pattern-container right">
          <img 
            src={patternBg} 
            alt="Background pattern" 
            className="hero-background-pattern"
          />
        </div>
      </section>
      
      

      {/* Services Section */}
      <section className="services">
        <h2>Services What we Provide</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
               <div className='service-number-content'> 
              <div className="service-number">{service.id}
              <div className="service-number-bg"></div>
              </div>
              <div className='services-paragraph'>
              <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Are they think About us?</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <h3>{testimonial.projectName}</h3>
              <div className="testimonials-paragraph">
                <p >{testimonial.content}</p>
                </div>
                <div className="testimonials-comma">
                <img src={testimonial.comma}  />
                </div>
              <div className="customer-info">
                <img src={testimonial.image} alt={testimonial.customerName} />
                <div>
                  <h4>{testimonial.customerName}</h4>
                  <p>{testimonial.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <h2>Some Of Our Best Works</h2>
        <div className="portfolio-container">
          <div className="portfolio-main">
            <div className="portfolio-card large">
          
            <img src={portfolioImage1} alt={portfolioWorks[0].title} />
            <a href={portfolioWorks[0].link} className="arrow-btn">
                  <span className='arrow'>→</span>
                </a>
              <div className="portfolio-content">
                <h3>{portfolioWorks[0].title}</h3>
                <p>{portfolioWorks[0].description}</p>
               
              </div>
            </div>
          </div>
          <div className="portfolio-secondary">
            {portfolioWorks.slice(1).map((work, index) => (
              <div key={index} className="portfolio-card">
                <img src={work.image} alt={work.title} />
                <a href={work.link} className="arrow-btn">
                    <span className='arrow'>→</span>
                  </a>
                <div className="portfolio-content">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="view-more-btn">View More</button>
      </section>

      {/* Latest News Section */}
      <section className="latest-news">
        <h2>Latest From Nexora</h2>
        <div className="news-container">
          {latestNews.map((news, index) => (
            <article key={index} className="news-card">
              <div className="news-content-wrapper">
                <div className="news-image">
                  <img src={news.image} alt={news.title} />
                </div>
                <div className="news-details">
                  <h3>{news.title}</h3>
                  {news.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                  <div className="publisher-info">
                    <img src={news.publisher.avatar} alt={news.publisher.name} />
                    <div className="publisher-details">
                      <span className="publisher-name">{news.publisher.name}</span>
                      <span className="publish-date">{news.publisher.date}</span>
                    </div>
                  </div>
                </div>
                <button className="news-arrow-btn" aria-label="Read more">
                  <span className='arrow'>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
        <button className="view-news-btn">View News</button>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <h2>Our Clients</h2>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <h2>Partners</h2>
        <div className="partners-slider">
          <div className="partners-track">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <img src={partner.logo} alt={partner.name} className="partner-logo" />
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="past-events">
        <h2>Events Just Passed</h2>
        <div className="events-container">
          {pastEvents.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-content">
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <span className="event-date">{event.date}</span>
                  <div className="event-description">
                    {event.description.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <button className="event-arrow-btn" aria-label="View event details">
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage; 