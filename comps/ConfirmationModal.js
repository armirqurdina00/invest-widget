import { useContext } from "react";
import Context from "./widget/Context";

const ConfirmationModal = () => {
    const context = useContext(Context)
    return (
        <>
            <div className="modal absolute top-0 left-0 w-full h-full text-white flex justify-center items-center">
                <div className="text-3xl text-white">Coming soon...</div>
                <div className="m-3 absolute top-0 right-0" onClick={() => context.setConfirmationModal(false)}><i class="fa-solid fa-xmark text-xl cursor-pointer"></i></div>
            </div>
        </>
    );
}
 
export default ConfirmationModal;