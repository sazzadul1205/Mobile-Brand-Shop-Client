const Loader = () => {
  const loaderStyle = {
    width: "500px",
    height: "20px",
    background:
      "linear-gradient(90deg, transparent, green) left -50px top 0/50px 20px no-repeat lightblue",
    animation: "l2 1s infinite linear",
  };

  const keyframesStyle = `
    @keyframes l2 {
      100% { background-position: right -50px top 0 }
    }
  `;

  return (
    <div className="bg-gradient-to-b from-green-300 to-green-100 h-screen">
      <div className="pt-96">
        <div className="mx-auto " style={loaderStyle}></div>
        <style>{keyframesStyle}</style>
      </div>
    </div>
  );
};

export default Loader;
