import ProjectsCard from '../../components/ProjectsCard';
import { Container, Row } from '../../infra/components';

const Projects = ({ githubData }) => {
  return (
    <section className="section section-lg">
      <Container>
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-laptop text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Projetos</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          {githubData.map((data, i) => {
            return <ProjectsCard key={i} data={data} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
