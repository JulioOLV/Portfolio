import Image from 'next/image';
import SocialLinks from '../../components/SocialLinks';
import { Card, Col, Container, Row } from '../../infra/components';
import IGithubProfileCard from './IGithubProfileCard';

const GithubProfileCard = ({ profile }: IGithubProfileCard) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <Image
                src={profile.avatar_url}
                width={200}
                height={200}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Bora bater um papo!</h2>
              <p className="lead text-white mt-3">
                QUER DISCUTIR SOBRE UM PROJETO OU SOMENTE DAR UM ALÔ? MINHAS
                REDES ESTÃO ABERTAS A TODOS
              </p>
              <p className="text-white mt-3">{profile.bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                {profile.location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
