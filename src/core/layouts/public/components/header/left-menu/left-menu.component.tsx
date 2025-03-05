'use client';
import Link from 'next/link';
import css from './left-menu.module.scss';
import Image from 'next/image';
import img from '../../../../../../assets/images/profile.png'

const LeftMenuComponent = () => {

  return (
    <div className={css.leftMenu}>
      <div className={css.menuContainer}>
        <div className={css.profileContainer}>
          <div>
            <div className={css.profileImg}>
              <Image src={img} alt={''} />
            </div>
            <p>Chris Evans</p>
            <span> Senior Software Engineer</span>
          </div>
          <div className={css.socialIcons}>social icons</div>
        </div>
        <div className={css.menu}>
          <ul className={css.menuList}>
            <Link href='/'>About me</Link>
            <Link href='/'>About me</Link>
            <Link href='/'>About me</Link>
            <Link href='/'>About me</Link>
            <Link href='/'>About me</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftMenuComponent;
