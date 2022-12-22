type NumericDisplayProps = {
  hours: number;
  minutes: number;
  seconds: number;
};
const NumericDisplay = ({ hours, minutes, seconds }: NumericDisplayProps) => {
  return (
    <div className="flex flex-row gap-2 justify-center text-2xl">
      {!!hours && <span>{hours} h </span>}
      <span>{minutes} min </span>
      <span>{seconds} s</span>
    </div>
  );
};

export default NumericDisplay;
