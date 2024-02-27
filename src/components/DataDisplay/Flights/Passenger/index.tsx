  import React, { useState } from 'react';
  import { Button, Popover } from 'antd';
  import { Para14, Para16 } from '@/components/Common/Paragraph';
  import type { RadioChangeEvent } from 'antd';
import { Input, Radio, Space } from 'antd';

  interface PassengerProps {
    userAgent: Array<{
      title?: string;
      age?: string;
    }>;
  }

  const Passenger: React.FC<PassengerProps> = ({ userAgent }) => {
    const [counts, setCounts] = useState(() => userAgent.map(() => 0));
    const [value, setValue] = useState(1);
  
    const increment = (index: number) => {
      setCounts(counts => {
        const newCounts = counts.map((count, i) => (i === index ? count + 1 : count));
        // console.log("Increment Index:", index, "New Counts:", newCounts);
        return newCounts;
      });
    };
  
    const decrement = (index: number) => {
      setCounts(counts => {
        const newCounts = counts.map((count, i) => (i === index && count > 0 ? count - 1 : count));
        // console.log("Decrement Index:", index, "New Counts:", newCounts);
        return newCounts;
      });
    };
    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    const content = (
      <div className='p-2 space-y-3'>
        {userAgent.map((passenger, index) => (
          <div className='flex justify-between' key={index}>
            <div>
              <Para16 className='font-medium' title={passenger.title} />
              <Para14 className='font-medium' title={passenger.age} />
            </div>
            <div className="counter">
              <button className='bg-primary-orange-200 hover:bg-primary-orange-300' onClick={() => decrement(index)}>-</button>
              <span>{counts[index]}</span>
              <button className='bg-primary-orange-200 hover:bg-primary-orange-300' onClick={() => increment(index)}>+</button>
            </div>
          </div>
        ))}
        <hr/>
        <div className='mt-5'>
        <Radio.Group onChange={onChange} value={value} className='w-full'>
      <Space className='w-full' direction="vertical">
        <Radio.Button className='w-full'  value={1}>Business</Radio.Button>
        <Radio.Button className='w-full'  value={2}>Economy</Radio.Button>
        <Radio.Button className='w-full'  value={3}>First Class</Radio.Button>
        
      </Space>
    </Radio.Group>
        </div>
      </div>
    );

    return (
      <Popover className='w-full' placement="bottom" trigger="click" content={content} >
        <Button className='w-full bg-transparent' type="text">Passenger</Button>
      </Popover>
    );
  }

  export default Passenger;
