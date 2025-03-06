interface ModalProps {
  children: React.ReactElement;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal h-[200] w-[180] bg-zinc-300 rounded-sm">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
