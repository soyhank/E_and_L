import Wave from "react-wavify";

const Waving = () => {
  return (
    <Wave
      fill="white"
      paused={false}
      className="absolute bottom-0 left-0 w-full flex"
      options={{
        height: 10,
        amplitude: 10,
        speed: 0.45,
        points: 6,
      }}
    />
  );
};

export default Waving;
