import React, { useState, useEffect } from 'react';
import className from 'classnames';
import MenuItem, { MenuItemType } from './Item';
import { useRouter } from 'next/router';

import styles from './style.less';

const list: MenuItemType[] = [
  {
    icon: '../home.png',
    title: 'HOME',
    checked: true,
    path: { url: '/' },
  },
  {
    icon: '../js.png',
    title: 'JAVASCRIPT',
    path: { url: '/article/[category]', as: '/article/js' },
  },
  {
    icon: '../react.png',
    title: 'REACT',
    path: { url: '/article/[category]', as: '/article/react' },
  },
  {
    icon: '../vuejs.png',
    title: 'VUE',
    path: { url: '/article/[category]', as: '/article/vue' },
  },
  {
    icon: '../article.png',
    title: 'OTHER',
    path: { url: '/article/[category]', as: '/article/other' },
  },
  {
    icon: '../chat.png',
    title: 'CHAT',
    path: { url: '/article/[category]', as: '/article/chat' },
  },
  {
    icon: '../github.png',
    title: 'GITHUB',
    path: { url: '/article/[category]', as: '/article/github' },
  },
];

const MainMenu: React.FunctionComponent<{}> = () => {
  const router = useRouter();

  const [menuList, setMenuList] = useState(list);
  const [fold, setFold] = useState(false);

  const handleNavigate = (menu: MenuItemType) => {
    menuList.some((item) => {
      if (item.title === menu.title) {
        const {
          path: { url, as },
        } = menu;
        router.replace(url, as);
        return true;
      }
    });
    setMenuList([...menuList]);
  };

  // 监听路由，判断被选中的菜单
  const listenUrl = (newUrl: string) => {
    menuList.forEach((menu) => {
      const {
        path: { url, as },
      } = menu;
      menu.checked = newUrl === url || newUrl === as;
    });
    setMenuList([...menuList]);
  };

  useEffect(() => {
    router.events && router.events.on('routeChangeStart', listenUrl);
    return () => {
      router.events && router.events.off('routeChangeStart', listenUrl);
    };
  }, []);

  return (
    <div className={styles.mainMenuContainer} style={fold ? { width: 75 } : {}}>
      <div
        className={className(styles.headerRow, styles.mainTitle)}
        onClick={() => setFold(!fold)}
        style={fold ? { fontSize: 24, color: 'rgba(140, 140, 140, 0.4)' } : {}}
      >
        Yu Jian
      </div>
      {menuList.map((item) => (
        <MenuItem {...item} key={item.title} onNavigate={handleNavigate} fold={fold} />
      ))}
      <div className={styles.diver}></div>
    </div>
  );
};

export default MainMenu;
