import Modal from "../../components/layouts/ModalContainer";

const Viewport = ({ image, setImage }) => {
  return (
    <Modal className="p-8 items-center justify-center" onClose={setImage}>
      <div className="w-fit h-fit cursor-default overflow-y-hidden">
        <img className="object-cover"
          alt={image.alt} src={image.src} />
      </div>
    </Modal>
  );
};

export default Viewport;
