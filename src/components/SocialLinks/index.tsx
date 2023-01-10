import { Button } from "../../infra/components"

const SocialLinks = ({ socialLinks }) => {
    return (
        <div className="btn-wrapper text-lg">
            {
                socialLinks.map((socialLink, index) => {
                    return (
                        <Button
                            className='btn-icon-only rounded-circle ml-1'
                            color={socialLink.color}
                            rel="noopener"
                            aria-label={socialLink.name}
                            href={socialLink.url}
                            target="_blank"
                            key={index}
                        >
                            <span className="btn-inner--icon">
                                <i className={`fa ${socialLink.icon}`} />
                            </span>
                        </Button>
                    )
                })
            }
        </div>
    )
}

export default SocialLinks