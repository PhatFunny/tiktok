import styles from '~/assets/components/sidebar/Sidebar.modules.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <h2>Sidebar page</h2>
    </aside>
  );
}

export default Sidebar;
