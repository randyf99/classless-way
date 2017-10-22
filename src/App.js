import createHello from './components/hello';
import createHeader from './components/header';

export default (React, PropTypes) => ({ baz, ...props }) => {
  const Hello = createHello(React, PropTypes);
  const Header = createHeader(React, PropTypes);

  const helloProps = {
    ...props
  };

  return (
    <div className="content">
      <Header {...props} />
      <Hello {...helloProps} />
      <p>Give me some content right here baby: {baz}</p>
    </div>
  );
};
