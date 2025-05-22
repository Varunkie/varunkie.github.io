import images from "../../resources/images";

import { useResizeObserver } from '../../utils/hooks/useWindow';

export const BlobHeader = ({ className = "", containerRef = {} }) => {
    const containerSize = useResizeObserver(containerRef);

    return (
        <div className={`${className} absolute -z-10`}
            style={containerRef.current ? { height: containerSize.height + 50 } : {}}>

            <div className="absolute w-full h-full bg-no-repeat bg-position-[250px_-150px] top-0 right-0"
                style={{ backgroundImage: `url(\"${images.blobs.blob_top_right}\")` }} />

            <div className="absolute w-full h-full bg-contain bg-no-repeat bg-left-bottom translate-y-5"
                style={{ backgroundImage: `url(\"${images.blobs.footer_bottom_left}\")` }} />
        </div>
    );
};

export const BlobBackground = ({ className = "", containerRef }) => {
    const containerSize = useResizeObserver(containerRef);

    return (
        <div className={`${className} absolute -z-10`}
            style={containerRef && containerRef.current ? { height: containerSize.height + 50 } : {}}>

            <div className="absolute w-full h-full bg-no-repeat bg-position-[250px_-150px] top-0 right-0"
                style={{ backgroundImage: `url(\"${images.blobs.blob_top_right}\")` }} />

            <div className="absolute w-full h-full bg-no-repeat bg-position-[0px_200px]"
                style={{ backgroundImage: `url(\"${images.blobs.blob_bottom_left}\")` }} />

            <div className="absolute w-full h-full bg-no-repeat bg-position-[-750px_1000px]"
                style={{ backgroundImage: `url(\"${images.blobs.blob_middle_center}\")` }} />
        </div>
    );
};
