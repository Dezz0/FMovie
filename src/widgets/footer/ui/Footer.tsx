import { FunctionComponent } from 'react';
import cls from './Footer.module.scss';
import { ContentWrapper } from '../../../shared/ui/contentWrapper';
import { FaGithub, FaTelegram, FaVk } from 'react-icons/fa';

const Footer: FunctionComponent = () => {

    return (
        <div className={cls.Footer}>
            <ContentWrapper className="ContentWrapperFooter">
                <div className={cls.infoText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className={cls.socialIcons}>
                    <a
                        href="https://t.me/D3zzo"
                        className={cls.icon}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTelegram/>
                    </a>
                    <a
                        href="https://vk.com/d3zzo69"
                        className={cls.icon}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaVk/>
                    </a>
                    <a
                        href="https://github.com/Dezz0"
                        target="_blank"
                        className={cls.icon}
                        rel="noreferrer"
                    >
                        <FaGithub/>
                    </a>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Footer;
