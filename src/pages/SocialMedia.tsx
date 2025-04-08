import React from 'react';
import socialMediaData from '../data/social_media.json';

const SocialMediaGallery: React.FunctionComponent = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-2 text-gray-800">Social Media Gallery</h1>
            <p className="text-gray-600 mb-6">
                Explore our collection of videos showcasing the Noctura Pillow in action and its benefits.
            </p>

            {socialMediaData.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-500">No videos available at this time.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {socialMediaData.map((video, index) => (
                        <div key={index}
                             className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="aspect-w-16 aspect-h-9">
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    preload="metadata"
                                >
                                    <source src={video.local_video_url} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">
                                    <a
                                        href={video.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-noctura-blue hover:underline"
                                    >
                                        {video.title}
                                    </a>
                                </h2>
                                <p className="text-gray-600 text-sm">{video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SocialMediaGallery;
