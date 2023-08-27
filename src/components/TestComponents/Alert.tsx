import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true" />
      </button>
    </div>
  );
};

export default Alert;
