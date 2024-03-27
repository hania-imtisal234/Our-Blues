import React, { useState,useEffect } from 'react';
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
  const [showQuotes, setShowQuotes] = useState({
    red: false,
    blue: false,
    green: false,
    purple: false
  });
  const [breathingTimer, setBreathingTimer] = useState(0);
  const [breathingState, setBreathingState] = useState('inhale');
  const [circleSize, setCircleSize] = useState(24);

  useEffect(() => {
    let interval;
    if (breathingTimer < 5) {
      interval = setInterval(() => {
        setBreathingTimer(prev => prev + 1);
        if (breathingState === 'inhale') {
          setCircleSize(prev => prev - 1);
        } else {
          setCircleSize(prev => prev + 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
      if (breathingState === 'inhale') {
        setBreathingState('exhale');
        setBreathingTimer(0);
      } else {
        setBreathingState('inhale');
        setBreathingTimer(0);
      }
    }
    return () => clearInterval(interval);
  }, [breathingTimer, breathingState]);

  
  const quotes = [
    "Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity.",
    "You dont have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared, or anxious. Having feelings doesnt make you a negative person. It makes you human.",
    "Self-care is how you take your power back.",
    "You are worth the quiet moment. You are worth the deeper breath. You are worth the time it takes to slow down, be still, and rest.",
    "You are allowed to feel messed up and inside out. It doesn't mean you're defective - it just means you're human.",
  ];

  const handleBalloonClick = (balloonColor) => {
    setShowQuotes({ ...showQuotes, [balloonColor]: true });
    setTimeout(() => setShowQuotes({ ...showQuotes, [balloonColor]: false }), 4000);
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
        <Title style={{ color: '#0F4C81', textAlign: 'center', marginBottom: '40px', fontWeight: 'bold', fontSize: "20px" }}>POP THE BALLOON</Title>
        <div className="flex justify-center">
          <div className="mt-8 space-x-4 flex">
            <Transition
              show={!showQuotes.red}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <button className="focus:outline-none relative" onClick={() => handleBalloonClick('red')}>
                <img src={red} alt="Balloon" className="h-16 cursor-pointer balloon" style={{ width: '200px', height: '100px', animation: 'floatRed 2s infinite' }} />
              </button>
            </Transition>
            <Transition
              show={!showQuotes.blue}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <button className="focus:outline-none relative" onClick={() => handleBalloonClick('blue')}>
                <img src={blue} alt="Balloon" className="h-16 cursor-pointer balloon" style={{ width: '100px', height: '100px', animation: 'floatBlue 2s infinite' }} />
              </button>
            </Transition>
            <Transition
              show={!showQuotes.green}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <button className="focus:outline-none relative" onClick={() => handleBalloonClick('green')}>
                <img src={green} alt="Balloon" className="h-16 cursor-pointer balloon" style={{ width: '180px', height: '100px', animation: 'floatGreen 2s infinite' }} />
              </button>
            </Transition>
            <Transition
              show={!showQuotes.purple}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <button className="focus:outline-none relative" onClick={() => handleBalloonClick('purple')}>
                <img src={purple} alt="Balloon" className="h-16 cursor-pointer balloon" style={{ width: '100px', height: '100px', animation: 'floatPurple 2s infinite' }} />
              </button>
            </Transition>
          </div>
        </div>
        {showQuotes.red && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Paragraph style={{ color: '#0F4C81', textAlign: 'center', fontSize: '16px', margin: 0 }}>
                {quotes[Math.floor(Math.random() * quotes.length)]}
              </Paragraph>
            </div>
          </div>
        )}
        {showQuotes.blue && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Paragraph style={{ color: '#0F4C81', textAlign: 'center', fontSize: '16px', margin: 0 }}>
                {quotes[Math.floor(Math.random() * quotes.length)]}
              </Paragraph>
            </div>
          </div>
        )}
        {showQuotes.green && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Paragraph style={{ color: '#0F4C81', textAlign: 'center', fontSize: '16px', margin: 0 }}>
                {quotes[Math.floor(Math.random() * quotes.length)]}
              </Paragraph>
            </div>
          </div>
        )}
        {showQuotes.purple && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Paragraph style={{ color: '#0F4C81', textAlign: 'center', fontSize: '16px', margin: 0 }}>
                {quotes[Math.floor(Math.random() * quotes.length)]}
              </Paragraph>
            </div>
          </div>
        )}
        <Divider style={{ backgroundColor: '#000000', marginTop: '40px' }} />
        <Title style={{ color: '#0F4C81', textAlign: 'center', marginBottom: '40px', fontWeight: 'bold', fontSize: "20px" }}>STOP, BREATHE & THINK</Title>
        <div className="flex flex-col items-center mt-8">
      <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center transition duration-500 ease-in-out transform hover:scale-110">
        <div className={`w-24 h-24 rounded-full ${breathingState === 'inhale' ? 'bg-blue-600' : 'bg-red-500'} animate-pulse`} />
      </div>
      <Paragraph className="mt-4 text-center">
        {breathingState === 'inhale' ? 'Inhale Slowly' : 'Exhale Slowly'}
      </Paragraph>
      <div className="mt-4">
        <Button type="primary" onClick={() => setBreathingTimer(0)}>Restart</Button>
      </div>
      <div className="mt-4">
        <Paragraph>
          {breathingTimer}s
        </Paragraph>
      </div>
    </div>
    <footer style={{ bottom: 0, width: '100%' }}>
          <AppFooter />
        </footer>
      </div>
      
      <style>
        {`
          @keyframes floatRed {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          @keyframes floatBlue {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          @keyframes floatGreen {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          @keyframes floatPurple {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
      
    </Layout>
  );
};

export default SelfCare;
