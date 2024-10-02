import { Link, NavLink, Outlet } from 'react-router-dom'
import { Flex, Layout, Popover } from 'antd'
import { InstagramOutlined, MenuOutlined } from '@ant-design/icons'
import './assets/fonts/f.woff2'
import './assets/fonts/fb.woff2'

const { Content, Footer, Header } = Layout

const menuItems = [
  {
    key: 'film',
    label: 'Film',
  }, {
    key: 'stage-design',
    label: 'Stage Design',
  }, {
    key: 'about',
    label: 'About',
  },
]

const layoutStyle = {
  width: 'calc(100% - 10px)',
}
const headerStyle = {
  height: '74px',
  background: '#fff',
}

function MyLayout() {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle} className="px-4 py-2 drop-shadow-md">
        <Flex justify="space-between">
          <Link className="!text-black hover:!text-black hover:no-underline" rel="author" to="/">
            <div className="w-full text-3xl uppercase leading-[1.4] tracking-wider" style={{ fontFamily: 'fb' }}>
              Angela Bravo
            </div>
            <div className="text-[10px] uppercase leading-[1.4]" style={{ fontFamily: 'f', letterSpacing: '0.08rem' }}>
              Art Director + Production Designer
            </div>
          </Link>
          <>
            <ul className="text-black flex items-center space-x-4 text-right my-2 ml-0 mr-1" style={{ fontFamily: 'f' }}>
              {menuItems.map((item: any) => (
                <li key={item.key} className="list-none hidden font-bold sm:text-sm sm:block sm:uppercase pr-3 my-0">
                  <NavLink
                    to={item.key}
                    className={({ isActive }) => `${isActive ? 'underline' : 'no-underline'} border-0 text-black hover:text-gray-300 focus:underline active:underline`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="list-none hidden font-bold sm:text-sm sm:block sm:uppercase pr-3 my-0">
                <a
                  className="no-underline border-0 text-black hover:text-gray-300 focus:text-gray-300 active:text-gray-300"
                  href="https://instagram.com/angela.bravomar"
                  target="_blank"
                >
                  <InstagramOutlined className="mt-[3px] text-xl" />
                </a>
              </li>
            </ul>
            <Popover
              className="menu-icon sm:visible md:hidden lg:hidden"
              placement="bottomRight"
              trigger="click"
              content={(
                <div className="w-full">
                  TODO!
                </div>
              )}
            >
              <MenuOutlined className="mt-[3px] text-xl" />
            </Popover>
          </>
        </Flex>
      </Header>
      <Content><Outlet /></Content>
      <Footer>Made with ❤️ by <a href="https://yvanvolochine.com" target="_blank">yv</a></Footer>
    </Layout>
  )
}

export default MyLayout
