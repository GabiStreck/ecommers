import { startTransition, useCallback, useState } from "react";

const useDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = useCallback(() => {
        startTransition(() => {
            setIsOpen((prevIsOpen) => !prevIsOpen);
        });
    }, []);

    return {
        isOpen,
        toggleDrawer
    };
};

export default useDrawer