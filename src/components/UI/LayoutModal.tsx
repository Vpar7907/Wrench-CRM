import "../../styles/layoutModal.scss";

interface Props {
  setOpenMenu: (arg: boolean) => void;
}

function LayoutModal({ setOpenMenu }: Props) {
  return (
    <div
      className="LayoutModal"
      onClick={() => {
        setOpenMenu(false);
      }}
    ></div>
  );
}

export default LayoutModal;
