import CountUp from "react-countup";

const AnimatedNumber = ({ number }: { number: number }) => {
  return (
    <CountUp
      start={0}
      end={number}
      duration={3}
      separator=","
      enableScrollSpy
    />
  );
};

export default AnimatedNumber;
