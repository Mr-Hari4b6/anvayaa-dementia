import React, { useEffect, useState } from 'react';
import { Layout, Menu, theme, Image, Drawer, Button, Avatar, Dropdown, Divider } from 'antd';
import { EditOutlined, LogoutOutlined } from '@ant-design/icons';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { EditProfileModal } from '../../components/EditProfileModal';
import profile from '../../assets/profile.jpg';
import logo from '../../assets/pwdlogo.png';
import './style.scss';

const { Header, Content, Sider } = Layout;


const menuItems = [
  {
    key: 'profile',
    label: 'Profile',
    path: '/layout/profile/profileDetails',
  },
  {
    key: 'assessments',
    label: 'Assessments',
  },
  {
    key: 'activities',
    label: 'Activities',
    path: '/layout/activities/activitiesList',
  },
  {
    key: 'adding remainders',
    label: 'Adding Remainders',
    path: '/layout/remainders'
  },
  {
    key: 'completedActivites',
    label: 'Completed Activites',
  }
];

const LayoutModule = () => {
  const { token } = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState('profile');
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
      if (!isDesktop) {
        setVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  useEffect(() => {
    const pathname = location.pathname;
    const matchingKey = menuItems.find((item) => pathname.startsWith(item.path))?.key || 'profile';
    setSelectedKey(matchingKey);
  }, [location.pathname]);

  const handleSideMenuClick = (key) => {
    setSelectedKey(key);
    if (!isDesktop) {
      setVisible(false);
    }
  };

  const calculateBackgroundColor = (key) => {
    const percentage = key === selectedKey ? 5 : 0;
    return `linear-gradient(90deg, #a26fcb ${percentage}%, ${token.colorBgContainer} ${percentage}%)`;
  };

  const handleHeaderMenuClick = ({ key }) => {
    if (key === 'editProfile') {
      setModalVisible(true);
    } else if (key === 'logout') {
      localStorage.setItem('isLoggedIn', false);
      navigate('/');
    }
  };

  const avatarMenu = (
    <Menu onClick={handleHeaderMenuClick}>
      <Menu.Item key="editProfile" icon={<EditOutlined />}>
        Edit Profile
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100%' }}>
      <Header className="site-layout-background">
        <div className="header-main">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Anvayaa Dementia" style={{ height: '50px', margin: '5px 10px 16px 0px' }} />
            <h2 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Anvayaa Dementia</h2>
          </div>
          {isDesktop && (
            <div style={{ color: 'white', fontWeight: 'bold', display: 'flex', gap: '10px', alignItems: 'center' }}>
              {JSON.parse(localStorage.getItem('user'))?.username}
              <Dropdown overlay={avatarMenu} trigger={['click']}>
                <Avatar size={44} icon={<UserOutlined />} />
              </Dropdown>
            </div>
          )}
          <Button type="primary" onClick={() => setVisible(true)} style={{ marginRight: '10px', display: window.innerWidth <= 768 ? 'block' : 'none' }}>
            ☰
          </Button>
        </div>
        <Drawer
          title="Menu"
          placement="left"
          closable={false}
          onClose={() => setVisible(false)}
          open={visible}
          style={{ zIndex: 1 }}
          width={250}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['profile']}
            style={{ borderRight: 0 }}
            onClick={({ key }) => handleSideMenuClick(key)}
          >
            <Image src={profile} width={200} style={{ borderRadius: '50px', padding: '10px' }} />
            {menuItems.map((item) => (
              <Menu.Item key={item.key} style={{ background: calculateBackgroundColor(item.key), borderRadius: 0 }}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
            <Divider style={{ margin: '10px 0', background: '#fff' }} />
            {isDesktop || (
              <div style={{ fontWeight: 'bold', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Dropdown overlay={avatarMenu} trigger={['click']}>
                  <Avatar size={44} icon={<UserOutlined />} />
                </Dropdown>
                <h5>{JSON.parse(localStorage.getItem('user'))?.username}</h5>
              </div>
            )}
          </Menu>
        </Drawer>
      </Header>
      <Layout style={{ marginTop: 64 }}>
        <Sider
          width={200}
          theme="dark"
          style={{
            background: token.colorBgContainer,
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 64,
            transition: 'width 0.3s',
            zIndex: 1,
            display: window.innerWidth > 768 ? 'block' : 'none',
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['profile']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={({ key }) => handleSideMenuClick(key)}
          >
            <Image src={profile} width={200} style={{ borderRadius: '50px', padding: '10px' }} />
            {menuItems.map((item) => (
              <Menu.Item key={item.key} style={{ background: calculateBackgroundColor(item.key), borderRadius: 0 }}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: window.innerWidth > 768 ? 200 : 0, transition: 'margin-left 0.3s', minHeight: '100%' }}>
          <Content style={{ background: token.colorBgContainer, padding: '5px', overflowY: 'auto' }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <EditProfileModal visible={modalVisible} setVisible={setModalVisible} />
    </Layout>
  );
};


export default LayoutModule;
