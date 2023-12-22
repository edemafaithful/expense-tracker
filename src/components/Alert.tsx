import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show">
        {children}
        <button onClick={onClose}  className="btn-close" data-bs-dismiss="alert"></button>
      </div>
    </>
  );
};

export default Alert;
