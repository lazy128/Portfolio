import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body, spotifyId, onPlay }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
      )}
      onClick={() => onPlay(spotifyId)}  // ✅ click để phát
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white/10"
          width="32"
          height="32"
          alt={`${name} avatar`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>

      {/* Icon nhạc */}
      <div className="absolute bottom-3 right-3 text-white/30 text-xs flex items-center gap-1">
        🎵 Play
      </div>
    </figure>
  );
};

export default function Testimonial() {
  const [currentTrack, setCurrentTrack] = useState(null);

  const handlePlay = (spotifyId) => {
    setCurrentTrack(spotifyId);
  };

  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">My Favorite Lyrics</h2>

      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} onPlay={handlePlay} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} onPlay={handlePlay} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary" />
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary" />
      </div>

      {/* ✅ Spotify Player — hiện khi có bài đang chọn */}
      {currentTrack && (
        // Đã bỏ overflow-hidden ở đây
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 shadow-2xl rounded-xl">
          <div className="relative">
            <button
              onClick={() => setCurrentTrack(null)}
              className="absolute -top-3 -right-3 z-10 bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs hover:bg-gray-600 cursor-pointer"
            >
              ✕
            </button>
            <iframe
              // Đã fix cú pháp $ và dùng link embed chính thức của Spotify, có kèm autoplay
              src={`https://open.spotify.com/embed/track/${currentTrack}?utm_source=generator&theme=0&autoplay=1`}
              width="400"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl" // Đưa bo góc trực tiếp vào iframe
            />
          </div>
        </div>
      )}
    </div>
  );
}