import "@dotlottie/player-component";

interface DotLottiePlayerProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
}

export default function DotLottiePlayer({
  src,
  autoplay = true,
  loop = true,
  className,
}: DotLottiePlayerProps) {
  return (
    // @ts-ignore
    <dotlottie-player
      src={src}
      autoplay={autoplay}
      loop={loop}
      className={className}
    />
  );
}
