import { ModalPopup } from "../../components/layouts/ModalContainer";

const Page = ({ image, setImage }) => {
  return (
    <ModalPopup className="p-8 md:p-16 items-center overflow-y-auto z-200" 
      id="modal" onClose={setImage}>
      <div className="w-fit h-fit cursor-default">
        <img className="object-contain select-none"
          alt={image.alt} src={image.src} />
      </div>
    </ModalPopup>
  );
};

export default Page;
