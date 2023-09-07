type ModalProps = {
  isOpen: boolean;
  onClose(): void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 ">
      <div className="bg-white w-96 p-4 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Titulo da modal</h2>
        <p>Conteudo da modal</p>
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
