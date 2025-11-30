import { Heading } from "./Molecules/TextComponent";
import { FaStar } from "react-icons/fa6";

const RateLabel = ({ count }:{count:number}) => {
  return (
    <div className="flex gap-2 pt-4">
      <input type="checkbox" />

      {Array.from({ length: count }, (_, i) => i).map(() => (
        <FaStar />
      ))}
    </div>
  );
};

export const Rating = () => {
  return (
    <div>
      <Heading>Rating</Heading>
      <div>
        <RateLabel count={5} />
        <RateLabel count={4} />

        <RateLabel count={3} />

        <RateLabel count={2} />

        <RateLabel count={1} />
      </div>
    </div>
  );
};
