interface Props {
  cartItemsCount: number;
}

const Navbar = ({ cartItemsCount }: Props) => {
  return (
    <div className="flex">
      Navbar:<p>{cartItemsCount}</p>
    </div>
  );
};

export default Navbar;
