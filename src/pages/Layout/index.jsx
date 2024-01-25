import React, { ReactNode, useEffect, useState } from 'react';
import { Layout, Menu, theme, Image, Drawer, Button } from 'antd';
import { Outlet, Link, useLocation } from 'react-router-dom';
import profile from '../../assets/profile.jpg';
import logo from '../../assets/pwdlogo.png';

const { Header, Content, Sider } = Layout;

const items2 = [
  {
    key: 'profile',
    label: 'Profile',
    path: '/layout/profile',
  },
  {
    key: 'password',
    label: 'Password',
    path: '/layout/password',
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
  },
  {
    key: 'viewDetails',
    label: 'View Details',
  },
  {
    key: 'completedActivites',
    label: 'Completed Activites',
  },
  {
    key: 'logout',
    label: 'Logout',
    path: '/',
  },
];

const LayoutModule = () => {
  const { token } = theme.useToken();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState('profile');
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
    const matchingKey = items2.find((item) => pathname.startsWith(item.path))?.key || 'profile';
    console.log('matchingKey', matchingKey)
    setSelectedKey(matchingKey);
  }, [location.pathname]);

  const handleMenuItemClick = (key) => {
    setSelectedKey(key);
    if (!isDesktop) {
      setVisible(false);
    }
  };

  const calculateBackgroundColor = (key) => {
    const percentage = key === selectedKey ? 5 : 0;
    return `linear-gradient(90deg, #a26fcb ${percentage}%, ${token.colorBgContainer} ${percentage}%)`;
  };

  return (
    <Layout style={{ minHeight: '100%' }}>
      <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#a26fcb', width: '100%', position: 'fixed', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Anvayaa Dementia" style={{ height: '50px', margin: '5px 10px 16px 0px' }} />
            <h2 style={{ color: 'white', margin: 0, fontSize: '16px' }}>Anvayaa Dementia</h2>
          </div>
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
            onClick={({ key }) => handleMenuItemClick(key)}
          >
            <Image src={profile} width={200} style={{ borderRadius: '50px', padding: '10px' }} />
            <Menu.Item><Link to={''}>Rajasekhar Reddy</Link></Menu.Item>
            {items2.map((item) => (
              <Menu.Item key={item.key} style={{ background: calculateBackgroundColor(item.key), borderRadius: 0 }}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
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
            onClick={({ key }) => handleMenuItemClick(key)}
          >
            <Image src={profile} width={200} style={{ borderRadius: '50px', padding: '10px' }} />
            <Menu.Item><Link to={''}>Rajasekhar Reddy</Link></Menu.Item>
            {items2.map((item) => (
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
    </Layout>
  );
};

export default LayoutModule;
