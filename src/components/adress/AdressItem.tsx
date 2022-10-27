interface Props {
  adress: string;
}

function AdressItem({ adress }: Props): JSX.Element {
  return <li>{adress}</li>;
}

export default AdressItem;
