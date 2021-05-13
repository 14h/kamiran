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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-20 mt-20">
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
