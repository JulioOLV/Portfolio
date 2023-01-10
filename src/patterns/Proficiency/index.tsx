import DisplayLottie from '../../components/DisplayLottie'
import { Col, Container, Fade, Progress, Row } from '../../infra/components'

const Proficiency = ({ skillBars }) => {
    return (
        <Container className='section section-lg'>
			<Fade bottom duration={2000} >
				<Row>
					<Col lg='6'>
						<h1 className='h1'>Proficiency</h1>
						{skillBars.map((skill) => {
							return (
								<div
									className='progress-info'
									key={skill.stack}
								>
									<div className='progress-label'>
										<span>{skill.stack}</span>
									</div>
									<div className='progress-percentage'>
										<span>{skill.progressPercentage}%</span>
									</div>
									<Progress
										max='100'
										value={skill.progressPercentage}
										color='info'
										role='progressbar'
										aria-label={skill.stack}
									/>
								</div>
							);
						})}
					</Col>
					<Col lg='6'>
						<DisplayLottie animationPath='/lottie/build.json' />
					</Col>
				</Row>
			</Fade>
		</Container>
    )
}

export default Proficiency