
import React, {ReactNode} from 'react';

import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Radio, Select } from 'antd';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { DatePicker, Space } from 'antd';

const { Header, Content, Sider } = Layout;
// const { TextArea } = Input;

const { RangePicker } = DatePicker;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const items2: MenuProps['items'] = [
  {
    key: 'profile',
    label: 'Profile',
    path:"/profile",
    
  },
  {
    key: 'password',
    label: 'Password',
  },
  {
    key: 'assessments',
    label: 'Assessments',   
  },
  {
    key: 'Activities',
    label: 'Activities',
  },
  {
    key: 'Adding Remainders',
    label: 'Adding Remainders',
  },
  {
    key: 'View Details',
    label: 'View Details',
  },
  {
    key: 'Completed Activites',
    label: 'Completed Activites',
  },
];
interface SidebarProps {
    children: ReactNode;
}
 
const DashBoard: React.FC<SidebarProps> = ({children}) => {
  const { token } = theme.useToken();

  const handleMenuItemClick = (key: string | number) => {
    // Handle click logic for each menu item
    console.log(`Clicked on ${key}`);
  };


  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ flex: 1, minWidth: 0 }} />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Layout style={{ padding: '24px 0', background: token.colorBgContainer, borderRadius: token.borderRadiusLG }}>
          <Sider style={{ background: token.colorBgContainer }} width={200}>
            <Menu mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2.map((item:any) => ({
                ...item,
                onClick: () => handleMenuItemClick(item.key),
              }))}
            />
          </Sider>
            
 {/* <div id="container" style={{ padding: '10px', color: 'purple' }}>
  <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
    <Form.Item  style={{ marginBottom: '5px', color: 'purple' }}>
    <span  style={{marginRight:'10rem'}}>PWD Name</span>
      <Input placeholder="PWD Name" />
    </Form.Item>

    <Form.Item  style={{ marginBottom: '5px', color: 'purple' }}>
    <span  style={{marginRight:'10rem'}}>Age</span>
      <Input placeholder="Age" />
    </Form.Item>

   
    <Form.Item style={{ marginBottom: '5px', color: 'purple' }}>
    <span  style={{marginRight:'10rem'}}>Address</span>
          <TextArea rows={4} />
        </Form.Item>

    <Form.Item  style={{ marginBottom: '5px', color: 'purple' }}>
      <Space direction="vertical" size={12}>
        <span  style={{marginRight:'10rem'}}>Date of Birth</span>
        <DatePicker
          defaultValue={dayjs('01/01/2015', dateFormatList[0])}
          format={dateFormatList}
        />
      </Space>
    </Form.Item>
    <Form.Item  style={{ marginBottom: '5px', color: 'purple' }}>
    <span style={{marginRight:'10rem'}}>Occupation</span>
      <Input placeholder="occupation" />
    </Form.Item>
    <Form.Item  label="Gender"style={{ marginBottom: '5px', color: 'purple',marginRight:'10rem' }}>
         <Radio.Group>
            <Radio value="Male"> Male </Radio>
            <Radio value="Female"> Female </Radio>
          </Radio.Group>
    </Form.Item>
  </Form>
</div>  
<div>
<Form.Item  style={{ marginBottom: '5px', color: 'purple' }}>
    <span style={{marginRight:'10rem'}}>Occupation</span>
      <Input placeholder="occupation" />
    </Form.Item>
    <Form.Item  style={{ marginBottom: '5px', color: 'purple' }}>
    <span style={{marginRight:'10rem'}}>Occupation</span>
      <Input placeholder="occupation" />
    </Form.Item>
    <Form.Item  style={{ marginBottom: '5px', color: 'purple' }}>
    <span style={{marginRight:'10rem'}}>Occupation</span>
      <Input placeholder="occupation" />
    </Form.Item>
    <Form.Item  style={{ marginBottom: '5px', color: 'purple' }}>
    <span style={{marginRight:'10rem'}}>Occupation</span>
      <Input placeholder="occupation" />
    </Form.Item>
    <Form.Item label="Area">
          <Select>
            <Select.Option value="area">Area</Select.Option>
          </Select>
        </Form.Item>
</div> */}

        </Layout>
        <main>{children}</main>
      </Content>
    </Layout>
  );
};

export default DashBoard;
