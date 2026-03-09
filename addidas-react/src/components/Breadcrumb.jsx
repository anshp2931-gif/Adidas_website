import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <div className="px-5 md:px-10 py-5 text-sm">
      {items.map((item, index) => (
        <span key={index}>
          {item.link ? (
            <Link to={item.link} className="hover:underline">{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
