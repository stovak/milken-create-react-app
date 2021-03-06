import { MediaInterface } from "../../DataTypes/Media";
import MediaVideo from "../../DataTypes/MediaVideo";
import MediaImage from "../../DataTypes/MediaImage";
import MediaReport from "../../DataTypes/MediaReport";
import MediaPodcastEpisode from "../../DataTypes/MediaPodcastEpisode";

/**
 * Create the Data Model
 *
 * @param incoming: MediaInterface
 */
export function MediaDataFactory(incoming: MediaInterface): MediaInterface {
  console.debug("MediaDataFactory", incoming);
  switch (incoming.type) {
    case "media--video":
      return new MediaVideo(incoming);
    case "media--image":
      return new MediaImage(incoming);
    case "media--report":
      return new MediaReport(incoming);
    case "media--podcast_episode":
      return new MediaPodcastEpisode(incoming);
    default:
      console.error("Cannot determine Data Class", incoming);
      throw new Error("Cannot Determine Data Class for ".concat(incoming.type));
  }
}

export default MediaDataFactory;
