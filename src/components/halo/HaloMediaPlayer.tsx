"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from "lucide-react";

const haloMediaPlayerVariants = cva(
  "relative flex flex-col gap-2 w-full rounded-lg overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-[rgba(var(--halo-bg-elev),0.8)] border border-[rgba(var(--halo-fg),0.1)]",
        glass: "halo-glass border border-[rgba(var(--halo-fg),0.2)]",
        minimal: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface HaloMediaPlayerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof haloMediaPlayerVariants> {
  src: string;
  type?: "audio" | "video";
  title?: string;
  poster?: string;
}

const HaloMediaPlayer = React.forwardRef<HTMLDivElement, HaloMediaPlayerProps>(
  ({ className, variant, src, type = "video", title, poster, ...props }, ref) => {
    const mediaRef = React.useRef<HTMLVideoElement | HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isMuted, setIsMuted] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [volume, setVolume] = React.useState(1);

    const togglePlay = () => {
      if (mediaRef.current) {
        if (isPlaying) {
          mediaRef.current.pause();
        } else {
          mediaRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

    const toggleMute = () => {
      if (mediaRef.current) {
        mediaRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    };

    const handleTimeUpdate = () => {
      if (mediaRef.current) {
        setCurrentTime(mediaRef.current.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      if (mediaRef.current) {
        setDuration(mediaRef.current.duration);
      }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
      const time = parseFloat(e.target.value);
      if (mediaRef.current) {
        mediaRef.current.currentTime = time;
        setCurrentTime(time);
      }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const vol = parseFloat(e.target.value);
      if (mediaRef.current) {
        mediaRef.current.volume = vol;
        setVolume(vol);
        setIsMuted(vol === 0);
      }
    };

    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const handleSkip = (seconds: number) => {
      if (mediaRef.current) {
        mediaRef.current.currentTime = Math.max(0, Math.min(duration, currentTime + seconds));
      }
    };

    return (
      <div
        ref={ref}
        className={cn(haloMediaPlayerVariants({ variant }), className)}
        {...props}
      >
        {title && (
          <div className="px-4 pt-4">
            <h3 className="font-semibold text-[rgb(var(--halo-fg))]">{title}</h3>
          </div>
        )}

        {/* Media Element */}
        <div className="relative bg-black">
          {type === "video" ? (
            <video
              ref={mediaRef as React.RefObject<HTMLVideoElement>}
              src={src}
              poster={poster}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="w-full aspect-video"
            />
          ) : (
            <audio
              ref={mediaRef as React.RefObject<HTMLAudioElement>}
              src={src}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="hidden"
            />
          )}
        </div>

        {/* Controls */}
        <div className="p-4 space-y-3">
          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[rgb(var(--halo-muted))] min-w-[40px]">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-1 bg-[rgba(var(--halo-fg),0.2)] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-eco-orange"
            />
            <span className="text-xs text-[rgb(var(--halo-muted))] min-w-[40px]">
              {formatTime(duration)}
            </span>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSkip(-10)}
                className="p-2 rounded-lg hover:bg-[rgba(var(--halo-fg),0.1)] transition-colors"
                aria-label="Skip backward"
              >
                <SkipBack className="w-4 h-4 text-[rgb(var(--halo-fg))]" />
              </button>
              
              <button
                onClick={togglePlay}
                className="p-3 rounded-full bg-eco-orange hover:bg-eco-orange/90 transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-eco-black fill-eco-black" />
                ) : (
                  <Play className="w-5 h-5 text-eco-black fill-eco-black" />
                )}
              </button>

              <button
                onClick={() => handleSkip(10)}
                className="p-2 rounded-lg hover:bg-[rgba(var(--halo-fg),0.1)] transition-colors"
                aria-label="Skip forward"
              >
                <SkipForward className="w-4 h-4 text-[rgb(var(--halo-fg))]" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2 rounded-lg hover:bg-[rgba(var(--halo-fg),0.1)] transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-[rgb(var(--halo-fg))]" />
                ) : (
                  <Volume2 className="w-4 h-4 text-[rgb(var(--halo-fg))]" />
                )}
              </button>
              
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-[rgba(var(--halo-fg),0.2)] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-eco-orange"
              />

              {type === "video" && (
                <button
                  onClick={() => mediaRef.current?.requestFullscreen?.()}
                  className="p-2 rounded-lg hover:bg-[rgba(var(--halo-fg),0.1)] transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize className="w-4 h-4 text-[rgb(var(--halo-fg))]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

HaloMediaPlayer.displayName = "HaloMediaPlayer";

export default HaloMediaPlayer;
