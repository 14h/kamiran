import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

export default function Grid({projects}) {
    return (
        <SRLWrapper options={{
            buttons: {
                showDownloadButton: false,
                showFullscreenButton: false,
                showThumbnailsButton: false,
                showAutoplayButton: false,
            }
        }}>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-32 p-4 pb-32 mt-20 mx-2 lg:mx-20">
                {
                    projects.map(
                        (project, i) => (
                            <a
                                href={project.image.url}
                                key={`project-${i}`}
                            >
                                <img
                                    src={project.image.url}
                                    alt={project.name}
                                />
                            </a>
                        )
                    )
                }
            </div>
        </SRLWrapper>
    )
}
