import React from 'react';
import { Layout, Card, Row, Col, Button } from 'antd';
import WebHeader from '../../../components/WebApp/WebHeader/WebHeader';
import AppFooter from '../../../components/Shared/AppFooter/AppFooter';
const { Content } = Layout;

const ViewHealthblog = () => {
  const articles = [
    {
      id: 1,
      title: 'About Mental Health',
      content: 'Mental health includes our emotional, psychological, and social well-being.',
      links: [
        'https://www.cdc.gov/mentalhealth/learn/index.htm#:~:text=Mental%20health%20includes%20our%20emotional,others%2C%20and%20make%20healthy%20choices.',
        'https://www.mentalhealth.org.uk/explore-mental-health/publications/our-best-mental-health-tips#:~:text=Just%20talking%20things%20through%20with,in%20ways%20you%20find%20helpful.',
        'https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response'
      ]
    },
    {
      id: 2,
      title: 'Societal Norms',
      content: 'Societal norms play a crucial role in shaping behavior and attitudes towards mental health issues.',
      links: [
        'https://www.betterhelp.com/advice/inclusive-mental-health/breaking-down-social-norms/',
        'https://www.unicef.org/media/111061/file/Social-norms-definitions-2021.pdf',
        'https://pubmed.ncbi.nlm.nih.gov/18575793/',
      ]
    },
    {
      id: 3,
      title: 'Mental Health Tips',
      content: 'Explore some helpful tips for maintaining good mental health and well-being.',
      links: [
        'https://www.mhanational.org/taking-good-care-yourself',
        'https://www.mind.org.uk/information-support/tips-for-everyday-living/',
        'https://www.psychologytoday.com/us/blog/skinny-revisited/201805/seven-tips-taking-care-your-mental-health'
      ]
    },
    {
      id: 4,
      title: 'Panic Attack & Anxiety',
      content: 'Learn about the differences between panic attacks and anxiety, and how to manage them effectively.',
      links: [
        'https://www.healthline.com/health/panic-attack-vs-anxiety-attack',
        'https://adaa.org/understanding-anxiety/panic-disorder-agoraphobia/symptoms',
        'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/panic-attacks/'
      ]
    }
  ];

  return (
    <Layout className="mainLayout bg-sea-salt min-h-screen">
      <WebHeader />
      <Content className="flex justify-center bg-sea-salt">
        <div className="w-[2/3] h-[2/3] p-10">
          <div className="flex justify-center text-2xl font-bold mb-8 text-yale-blue">MENTAL HEALTH ARTICLES</div>
          <Row gutter={[16, 16]} justify="center">
            {articles.map((article, index) => (
              <Col key={article.id} xs={24} sm={12} md={8}>
                <Card
                  title={<h2 className="flex justify-center text-lg text-white font-bold bg-yale-blue mx-0 rounded">{article.title}</h2>}
                  className="h-full bg-carolina-blue font-bold"
                  hoverable
                >
                  <p>{article.content}</p>
                  <div className="mt-4">
                    <Row gutter={[16, 16]} justify="center">
                      <Col xs={12} sm={12} md={12} lg={12} >
                        <Card className="mb-2" style={{ width: '90px', height: '70px', marginLeft:"30px"}}>
                          <a href={article.links[0]} target="_blank" rel="noopener noreferrer" className="underline text-yale-blue block">
                            Link 1
                          </a>
                        </Card>
                        <Card className="mb-2" style={{ width: '90px', height: '70px',  marginLeft:"30px" }}>
                          <a href={article.links[1]} target="_blank" rel="noopener noreferrer" className="underline text-yale-blue block">
                            Link 2
                          </a>
                        </Card>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12}>
                        <Card className="mb-2" style={{ width: '90px', height: '70px',  marginRight:"30px" }}>
                          <a href={article.links[2]} target="_blank" rel="noopener noreferrer" className="underline text-yale-blue block">
                            Link 3
                          </a>
                        </Card>
                        <Card className="mb-2" style={{ width: '90px', height: '70px',  marginRight:"30px"}}>
                          <a href={article.links[3]} target="_blank" rel="noopener noreferrer" className="underline text-yale-blue block">
                            Link 4
                          </a>
                        </Card>
                      </Col>
                    </Row>
                  </div>
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
