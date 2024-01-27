import { FunctionComponent, useState } from 'react';
import cls from './SwitchTabs.module.scss';

interface SwitchTabsProps {
    text: string[];
    onTabChange: (el: string) => void;
}

const SwitchTabs: FunctionComponent<SwitchTabsProps> = (props) => {
    const { text, onTabChange } = props;
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTab = (el: string, idx: number): void => {
        setLeft(idx * 100);
        setTimeout(() => {
            setSelectedTab(idx);
        }, 300);
        onTabChange(el);
    };

    return (
        <div className={cls.SwitchTabs}>
            <div className={cls.switcher}>
                {
                    text.map((el: string, idx: number) => (
                        <span
                            key={idx + el}
                            className={selectedTab === idx ? cls.switchElActive : cls.switchEl}
                            onClick={() => activeTab(el, idx)}
                        >
                            {el}
                        </span>
                    ))
                }
                <span className={cls.movingBg} style={{ left }}/>
            </div>
        </div>
    );
};

export default SwitchTabs;
