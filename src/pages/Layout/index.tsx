
import React, { ReactNode } from 'react';
import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Radio, Select, Input, Form, DatePicker, Space } from 'antd';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { UploadOutlined } from '@ant-design/icons';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';


const { Header, Content, Sider } = Layout;

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};


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
  const navigate = useNavigate(); // Use useNavigate hook from React Router

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();


  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

//   const handleMenuItemClick = (key: string | number) => {
//     // Handle click logic for each menu item
    
//     console.log(`Clicked on ${key}`);
    
//   };
const [selectedMenuItem, setSelectedMenuItem] = useState<string>('1'); // State to track the selected menu item
const handleMenuItemClick = (key: string | number) => {
    setSelectedMenuItem(key.toString()); // Update the state with the selected menu item key

    // Navigate to the corresponding path when clicking on "Profile"
    if (key === 'profile') {
       navigate('/profile');
    }
  };
 


  return (
  
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' ,background: '#7530AC', padding: '0 16px', height: '50px' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ flex: 1, minWidth: 0 }} /> 
      </Header>
      <Content >
         <Layout style={{ marginRight:'10px'}}> 
          <Sider style={{ background: token.colorBgContainer, height: '50rem',marginRight:'40rem' }} width={200}>
          <Upload
         name="avatar"
     listType="picture-circle"
  className="avatar-uploader"
  showUploadList={false}
  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
  beforeUpload={beforeUpload}
  onChange={handleChange}
>
  {imageUrl ? (
    <div
      style={{
        width: 100, // Adjust the width as needed
        height: 100, // Adjust the height as needed
        borderRadius: '100%',
        overflow: 'hidden',
       
      }}
    >
      <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  ) : (
    uploadButton
  )}
</Upload>

            {/* <Menu mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2.map((item:any) => ({
                ...item,
                onClick: () => handleMenuItemClick(item.key),
              }))}
            /> */}
            <Menu
              mode="inline"
              selectedKeys={[selectedMenuItem]} // Set the selected menu item based on the state
             style={{ height: '100%' }}
              items={items2?.map((item: any) => ({
                ...item,
                onClick: () => handleMenuItemClick(item.key),
              }))}
            />
          </Sider>
        </Layout>
        <main>{children}</main>
      </Content>
    </Layout>
  );
};

export default DashBoard;
// // background: token.colorBgContainer, borderRadius: token.borderRadiusLG 
