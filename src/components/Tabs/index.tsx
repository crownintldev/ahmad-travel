"use client"
import React, { useState } from "react";
import { Tabs } from 'antd';
import Button from "@/components/Common/Button";

const { TabPane } = Tabs;

interface TabProps {
  tabsData: Array<{
    key: string;
    title: string;
    content: React.ReactNode;
  }>;
}

const Tab: React.FC<TabProps> = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState<string>('1');

  const onButtonClick = (key: string) => {
    setActiveTab(key);
  };

  return (
    <>
      <div className="flex gap-3 mt-1 mb-1 flex-wrap">
        {tabsData.map(tab => (
          <Button key={tab.key} title={tab.title} onClick={() => onButtonClick(tab.key)} />
        ))}
      </div>

      <Tabs activeKey={activeTab}>
        {tabsData.map(tab => (
          <TabPane tab={tab.title} key={tab.key}>
            {tab.content}
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default Tab;
