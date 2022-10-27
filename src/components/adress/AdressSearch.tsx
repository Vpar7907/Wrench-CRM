import find from "../../image/find.svg";

interface Props {
  query: string;
  setQuery: (param: string) => void;
  setSend: (param: string) => void;
}

function AdressSearch({ query, setQuery, setSend }: Props): JSX.Element {
  return (
    <div className="adress">
      <form action="search">
        <h2>Поиск адресов</h2>
        <p className="p">Введите интересующий вас адрес</p>
        <div className="find">
          <input
            type="text"
            placeholder="Введите интересующий вас адрес"
            value={query}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(event.target.value);
            }}
          />
          <button
            onClick={(event: React.FormEvent<HTMLButtonElement>) => {
              event.preventDefault();
              setSend(query);
            }}
          >
            <img src={find} alt="find" />
            <span>Поиск</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdressSearch;
