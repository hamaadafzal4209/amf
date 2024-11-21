import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialCard({
  content,
  author,
  role,
  avatarSrc,
  backgroundImage,
}) {
  return (
    <Card className="relative overflow-hidden h-full">
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <CardContent className="relative z-10 p-6 bg-white/90 dark:bg-gray-800/90 h-full">
        <div className="flex flex-col items-center text-center h-full justify-between">
          <Avatar className="w-20 h-20 mb-4 border-4 border-white dark:border-gray-800">
            <AvatarImage src={avatarSrc} alt={author} />
            <AvatarFallback>
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <blockquote className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 flex-grow">
            "{content}"
          </blockquote>
          <cite className="not-italic mt-auto">
            <strong className="font-semibold text-main">{author}</strong>
            <span className="block text-sm text-gray-500 dark:text-gray-400">
              {role}
            </span>
          </cite>
        </div>
      </CardContent>
    </Card>
  );
}
