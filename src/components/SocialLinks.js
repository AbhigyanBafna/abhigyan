import {AnimatedSocialIcon} from 'react-animated-social-icons'

export default function SocialLinks() {
    return(
        <div>
            <div className="absolute bottom-28 left-9 flex flex-col space-y-[-15px]">
                <AnimatedSocialIcon
                brandName="github"
                url="https://github.com/AbhigyanBafna"
                animation="grow"
                defaultColor="gray"
                hoverColor="white"
                width="2em"
                animationDuration={0.8}
                />
                <AnimatedSocialIcon
                brandName="instagram"
                url="https://github.com/AbhigyanBafna"
                animation="grow"
                defaultColor="gray"
                hoverColor="white"
                width="2em"
                animationDuration={0.8}
                />
            </div>

            <div className="absolute bottom-0 left-16 w-1 h-28 bg-gray-500 rounded-t"></div>
        </div>
    )
}