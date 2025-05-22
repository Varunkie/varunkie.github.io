import images from "../../resources/images";

import { useResizeObserver } from '../../utils/hooks/useWindow';

export const BlobHeader = ({ className = "", containerRef = {} }) => {
    const containerSize = useResizeObserver(containerRef);

    return (
        <div className={`${className} absolute -z-10`}
            style={containerRef.current ? { height: containerSize.height + 25 } : {}}>
            <div className="absolute w-full h-full bg-contain bg-no-repeat bg-right-top"
                style={{ backgroundImage: `url(\"${images.blobs.blob_top_right}\")` }} />

            <div className="absolute w-full h-full bg-contain bg-no-repeat bg-left-bottom translate-y-25"
                style={{ backgroundImage: `url(\"${images.blobs.footer_bottom_left}\")` }} />
        </div>
    );
};
