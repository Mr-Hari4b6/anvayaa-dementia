
import React from 'react';
import { Layout, Menu, theme, Radio, Select } from 'antd';
import { Input } from 'antd';
import{Form} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { NavLink } from 'react-router-dom';

import { DatePicker, Space } from 'antd';

const { Header, Content, Sider } = Layout;
const { TextArea } = Input;

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];


const Profile: React.FC = () => {
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
 <div id="container" style={{ padding: '10px', color: 'purple' }}>
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
    <span style={{marginRight:'10rem'}}>Responder Name</span>
      <Input placeholder="respondername" />
    </Form.Item>
    <Form.Item  style={{ marginBottom: '5px', color: 'purple' }}>
    <span style={{marginRight:'10rem'}}>Responder Relation</span>
      <Input placeholder="responderrelation" />
    </Form.Item>
    <Form.Item  style={{ marginBottom: '5px', color: 'purple' }}>
    <span style={{marginRight:'10rem'}}>Primary Care  Giver  Name</span>
      <Input placeholder="primarycaregivername" />
    </Form.Item>
    <Form.Item  style={{ marginBottom: '5px', color: 'purple' }}>
    <span style={{marginRight:'10rem'}}>Current Home Care Attender</span>
      <Input placeholder="currenthomecareattender" />
    </Form.Item>
    <Form.Item label="Selectlanguages" name="area">
  <Select>
    <Select.Option value="Telugu">Telugu</Select.Option>
    <Select.Option value="Hindi">Hindi</Select.Option>
    <Select.Option value="English">English</Select.Option>
  </Select>
</Form.Item>
</div>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Profile;


