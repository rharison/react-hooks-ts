import { useState } from "react";

export default function useModal() {
    const [isPopupOpened, setIsOpened] = useState(false);

    const openPopup = () => setIsOpened(true);
    const closePopup = () => setIsOpened(false);

    return {
        isPopupOpened,
        openPopup,
        closePopup
    }
}
