import React from 'react';
import classNames from 'classnames';
import { Tooltip } from 'antd';
import { UrlObject } from 'url';
import styles from './style.less';

type Url = UrlObject | string;

export interface MenuItemType {
  icon: string;
  title: string;
  path: { url: Url; as?: Url; options?: {} };
  fold?: boolean;
  checked?: boolean;
  onNavigate?: (params: MenuItemType) => void;
}

const MenuItem: React.FC<MenuItemType> = (props) => {
  const { icon, title, checked, onNavigate, fold } = props;
  const handleClick = () => {
    onNavigate && onNavigate(props);
  };
  return (
    <div className={styles.itemWrap} onClick={handleClick}>
      <div className={classNames(styles.itemContainer, { [styles.activeItem]: checked })}>
        <img src={icon} className={styles.itemIcon} />
        <div
          className={classNames(styles.titleColor, { [styles.mainTitleTxt]: checked })}
          style={{
            fontSize: 13,
          }}
        >
          {title}
        </div>
        <div className={classNames(styles.tipBar)} style={{ left: checked ? 0 : -5 }}></div>
      </div>

      {fold && (
        <Tooltip title={title} placement="right">
          <div className={styles.fakerBlock}></div>
        </Tooltip>
      )}
    </div>
  );
};

export default MenuItem;
