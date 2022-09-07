import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import style from '../GoBackLink/GoBackLink.module.css';

export function GoBackLink() {
  const location = useLocation();
  return (
    <Link className={style.GoBackLink} to={location.state?.from ?? '/Home'}>
      Go back
    </Link>
  );
}