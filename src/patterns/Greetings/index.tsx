import React, { useEffect } from 'react'
import { greetings } from '../../../portfolio'
import DisplayLottie from '../../components/DisplayLottie'
import SocialLinks from '../../components/SocialLinks'
import { Button, Col, Container, Row } from '../../infra/components'

const Greetings = () => {
    useEffect(() => {
        document.documentElement.scrollTop = 0
        document.scrollingElement.scrollTop = 0
    })
    return (
        <main>
            <div className='position-relative'>
                <section className='section section-lg section-shaped'>
                    <div className='shape shape-style-1 bg-gradient-info'>
                        <span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
                    </div>
                    <Container className='py-lg-md d-flex'>
						<div className='col px-0'>
							<Row>
								<Col lg="6">
									<h1 className="display-3 text-white">
										{greetings.title + " "}
									</h1>
									<p className="lead text-white">
										{greetings.description}
									</p>
									<SocialLinks />
									<div className="btn-wrapper my-4">
										<Button
											className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
											color="default"
											href={greetings.resumeLink}
										>
											<span className="btn-inner--icon mr-1">
												<i className="fa fa-file" />
											</span>
											<span className="btn-inner--text">
												Veja meu resumo
											</span>
										</Button>
									</div>
								</Col>
								<Col lg="6">
									<DisplayLottie animationPath="/lottie/coding.json" />
								</Col>
							</Row>
						</div>
					</Container>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E8DED2" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,128C672,139,768,149,864,154.7C960,160,1056,160,1152,133.3C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </section>
            </div>
        </main>
    )
}

export default Greetings