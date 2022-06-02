import { Link } from 'react-router-dom';

export default function AppBreadcrumbs ({item}) {
  return (
    <div>
      <Link to={'/'}>
        <span>Productos</span>
      </Link>
      {item && <><span> / </span> <span>{item}</span></>}
    </div>
  )
}