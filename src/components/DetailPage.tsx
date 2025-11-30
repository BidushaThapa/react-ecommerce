import { useParams } from "react-router-dom";

export const DetailPage = () => {
  const { newname } = useParams();
  return <div>DetailPage of {newname}</div>;
};
