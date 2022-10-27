import AdressResult from "./AdressResult";
import AdressSearch from "./AdressSearch";
import React, { useState, useEffect } from "react";
import { IData, Suggestion } from "../../models";
import "../../styles/adress.scss";

const URL =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const TOKEN = "af78591a8cea2103df2d245dd771595a4a6c53d1";

function Adress(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [send, setSend] = useState<string>("");
  const [data, setData] = useState<Suggestion[] | null>([]);
  useEffect(() => {
    fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + TOKEN,
      },
      body: JSON.stringify({ query: send }),
    })
      .then((response) => response.json())
      .then((result: IData) => {
        if (result.suggestions.length !== 0) {
          setData(result.suggestions);
        } else {
          setData(null);
        }
      })
      .catch((error) =>
        setData([
          {
            value: `Ошибка запроса ${error.message}`,
            unrestricted_value: "",
          },
        ])
      );
  }, [send]);

  return (
    <>
      <AdressSearch query={query} setQuery={setQuery} setSend={setSend} />
      {data !== null ? <AdressResult data={data} /> : null}
    </>
  );
}

export default Adress;
