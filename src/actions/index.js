export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const VIDEOS_RECEIVED = 'VIDEOS_RECIEVED';

export const fetchVideos = (searchCriteria) => ({
    type: 'FETCH_VIDEOS',
    searchCriteria
});
