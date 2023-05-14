import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './header-link.module.css';

type PropsType = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

const HeaderLink = ({ children, href, className, ...props }: PropsType) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          styles.link,
          {
            [styles.active]: isActive,
          },
          className
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};

export { HeaderLink };
