interface ModalProps {
  children: React.ReactElement;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className="modal h-[200] w-[180] bg-white shadow-xl rounded-sm py-[20] px-[5]">
      <div className="modal-content">{children}</div>
    </div>
  );
};
