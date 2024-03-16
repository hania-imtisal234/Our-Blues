import React from 'react';
import { Layout, Card, Row, Col } from 'antd';
import WebHeader from '../../../components/WebApp/WebHeader/WebHeader';
import AppFooter from '../../../components/Shared/AppFooter/AppFooter';
const { Content } = Layout;

const ViewHealthblog = () => {
  const articles = [
    {
      id: 1,
      title: 'About Mental Health',
      content: 'Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make healthy choices.',
      link: 'https://www.cdc.gov/mentalhealth/learn/index.htm#:~:text=Mental%20health%20includes%20our%20emotional,others%2C%20and%20make%20healthy%20choices.',
    },
    {
      id: 2,
      title: 'Societal Norm?',
      content: 'No one should have to live in silence when it comes to their mental health. We may all have the capacity for resilience, but sometimes, we need a bit of help along the way. That may be why understanding social norms and how they can affect access to treatment can be so important.',
      link: 'https://www.betterhelp.com/advice/inclusive-mental-health/breaking-down-social-norms/'
    },
    {
      id: 3,
      title: 'Mental Health Tips',
      content: 'Trying new things can sometimes feel uncomfortable, but they usually get easier the more we practise them. One thing to remember: none of us is perfect. We all have our limits. What’s good enough for you is great.',
      link: 'https://www.mentalhealth.org.uk/explore-mental-health/publications/our-best-mental-health-tips#:~:text=Just%20talking%20things%20through%20with,in%20ways%20you%20find%20helpful.'
    },
    {
      id: 4,
      title: 'Panic Attack & Anxiety',
      content: 'An anxiety attack tends to occur in response to certain stressors and may build gradually while panic attacks can occur unexpectedly and abruptly. Both may indicate an underlying health condition.',
      link: 'https://www.healthline.com/health/panic-attack-vs-anxiety-attack'
    },
  ];
  return (
    <Layout className="mainLayout bg-sea-salt min-h-screen">
      <WebHeader />
      <Content className="flex justify-center bg-sea-salt">
        <div className="w-[2/3] h-[2/3] p-10">
          <div className="flex justify-center text-2xl font-bold mb-8 text-yale-blue">MENTAL HEALTH ARTCLES</div>
          <Row gutter={[16, 16]} justify="center">
            {articles.map(article => (
              <Col key={article.id} xs={24} sm={12} md={8}>
                <Card
                  title={<h2 className="flex justify-center text-lg text-white font-bold bg-yale-blue mx-0 rounded">{article.title}</h2>}
                  className="h-full bg-carolina-blue font-bold"
                  hoverable
                >
                  <p>{article.content}</p>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="underline text-yale-blue">
                    Read more
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
      <Layout>
        <AppFooter />
      </Layout>
    </Layout>
  );
};
export default ViewHealthblog;
