import { Suggestion } from "../../models";
import AdressItem from "./AdressItem";
interface Props {
  data: Suggestion[] | null;
}

function AdressResult({ data }: Props): JSX.Element {
  return (
    <div className="adress-res">
      <h1>Адреса</h1>
      <ul>
        {data?.map((data) => (
          <AdressItem adress={data.value} key={data.unrestricted_value} />
        ))}
      </ul>
    </div>
  );
}

export default AdressResult;
