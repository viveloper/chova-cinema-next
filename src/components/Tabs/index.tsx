import clsx from 'clsx';
import classes from './Tabs.module.css';

interface TabsProps {
  tabs: Array<{
    name: string;
    value: string;
  }>;
  activeTab: string;
  onClick: (value: string, index: number) => void;
}

const Tabs = ({ activeTab, tabs, onClick }: TabsProps) => {
  return (
    <div className={classes['tabs']}>
      {tabs.map((item, index) => (
        <button
          key={item.value}
          className={clsx(classes['tab'], activeTab === item.value && classes['active'])}
          onClick={() => onClick(item.value, index)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
