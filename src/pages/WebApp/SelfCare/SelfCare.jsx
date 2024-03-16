import React, { useState } from 'react';
import { Typography, Divider, Row, Col, Card, Button, Layout } from 'antd';
import { Transition } from '@headlessui/react';
import birds from "../../../assets/birds.mp3";
import waves from "../../../assets/waves.mp3";
import blue from "../../../assets/blue.jpeg";
import green from "../../../assets/green.jpeg";
import red from "../../../assets/red.jpg";
import purple from "../../../assets/purple.jpeg"
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader.jsx";
import AppFooter from "../../../components/Shared/AppFooter/AppFooter.jsx";

const { Title, Paragraph } = Typography;

const SelfCare = () => {
  const [showQuote, setShowQuote] = useState(false);

  const quotes = [
    "Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity.",
    "You dont have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared, or anxious. Having feelings doesnt make you a negative person. It makes you human.",
    "Self-care is how you take your power back.",
    "You are worth the quiet moment. You are worth the deeper breath. You are worth the time it takes to slow down, be still, and rest.",
    "You are allowed to feel messed up and inside out. It doesn't mean you're defective - it just means you're human.",
  ];

  const handleBalloonClick = () => {
    setShowQuote(true);
    setTimeout(() => setShowQuote(false), 4000); 
  };

  return (
    <Layout className="mainLayout bg-white h-screen">
      <WebHeader />
      <div style={{ minHeight: '100vh', padding: '20px' }}>
        <Title style={{ color: '#0F4C81', textAlign: 'center', marginBottom: '40px', fontWeight: 'bold', fontSize: "24px" }}>SELF CARE ACTIVITIES</Title>
        <Divider style={{ backgroundColor: '#000000' }} />
        <Paragraph style={{ color: '#0F4C81', textAlign: 'center', fontSize: '16px', marginBottom: '20px' }}>
          Close your eyes, take a deep breath, and lets indulge in some self-care activities to unwind and rejuvenate.
        </Paragraph>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              style={{ backgroundColor: '#0F4C81', border: '1px solid #000000' }}
              actions={[
                <Button type="primary" icon={<i className="fas fa-play"></i>} key="play">Play</Button>
              ]}
            >
              <Title level={4} style={{ color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold' }}>Calm sounds of birds</Title>
              <audio controls style={{ width: '100%' }}>
                <source src={birds} type="audio/mp3" />
              </audio>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              style={{ backgroundColor: '#0F4C81', border: '1px solid #000000' }}
              actions={[
                <Button type="primary" icon={<i className="fas fa-play"></i>} key="play">Play</Button>
              ]}
            >
              <Title level={4} style={{ color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold' }}>Soothing waves</Title>
              <audio controls style={{ width: '100%' }}>
                <source src={waves} type="audio/mp3" />
              </audio>
            </Card>
          </Col>
        </Row>
        <Divider style={{ backgroundColor: '#000000', marginTop: '40px' }} />
        {/* Balloons */}
        <Title style={{ color: '#0F4C81', textAlign: 'center', marginBottom: '40px', fontWeight: 'bold', fontSize: "20px" }}>POP THE BALOON</Title>
        <div className="flex justify-center">
          <div className="mt-8 space-x-4">
            <Transition
              show={!showQuote}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <button className="focus:outline-none" onClick={handleBalloonClick}>
                <img src={red} alt="Balloon" className="h-16 cursor-pointer" style={{ width: '200px', height:'100px' }}/>
              </button>
              <button className="focus:outline-none" onClick={handleBalloonClick}>
                <img src={blue} alt="Balloon" className="h-16 cursor-pointer" style={{ width: '100px', height:'100px' }} />
              </button>
              <button className="focus:outline-none" onClick={handleBalloonClick}>
                <img src={green} alt="Balloon" className="h-16 cursor-pointer" style={{ width: '180px', height:'100px' }} />
              </button>
              <button className="focus:outline-none" onClick={handleBalloonClick}>
                <img  src={purple} alt="Balloon" className="h-16 cursor-pointer" style={{ width: '100px', height:'100px' }} />
              </button>
            </Transition>
            <Transition
              show={showQuote}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <Paragraph style={{ color: '#0F4C81', textAlign: 'center', fontSize: '16px', margin: 0 }}>
                    {quotes[Math.floor(Math.random() * quotes.length)]}
                  </Paragraph>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
      <Layout style={{ marginTop: "10vh" }}>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default SelfCare;
