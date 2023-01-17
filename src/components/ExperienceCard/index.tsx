import Image from 'next/image';

import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Fade,
} from '../../infra/components';

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <Fade left duration={2000}>
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
        >
          <CardBody>
            <Image
              src={data.companylogo}
              style={{
                objectFit: 'cover',
                left: 0,
                right: 0,
                top: '7rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '50%',
              }}
              width={128}
              height={128}
              className="shadow mb-3"
              alt={data.companylogo}
            />
            <CardTitle tag="h4" className="mb-2">
              {data.company}
            </CardTitle>
            <CardSubtitle tag="h5" className="mb-2">
              {data.role}
            </CardSubtitle>
            <CardSubtitle>{data.date}</CardSubtitle>
            <CardText tag="div" className="description my-3 text-left">
              {data.desc}
              <ul>
                {data.descBullets
                  ? data.descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ExperienceCard;
