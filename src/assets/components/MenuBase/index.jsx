import { Link, useLocation } from 'react-router-dom';

export default function MenuBase({ children, to }) {
	const local = useLocation();
	return <Link to={to}>{children}</Link>;
}
