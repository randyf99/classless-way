export default (React, PropTypes) => {
  const hello = ({ helloClass, subject = 'World' }) => {
    return <p className={helloClass}>Hello, {subject}!</p>;
  };

  hello.propTypes = {
    helloClass: PropTypes.string.isRequired,
    subject: PropTypes.string
  };

  return hello;
};
