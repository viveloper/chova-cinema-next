// TODO: 에러 화면 고도화
const ErrorScreen = () => {
  return (
    <div
      className="center"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#6B6B6B',
      }}
    >
      <h1>Something went wrong.</h1>
    </div>
  );
};

export default ErrorScreen;
