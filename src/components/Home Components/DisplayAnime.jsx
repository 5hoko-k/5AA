import { useContext } from "react";
import { Link } from "react-router-dom";
import { TitleIsEnglish } from "../../App";

function DisplayAnime({ entries }) {
  console.log(entries);

  const titleIsEnglish = useContext(TitleIsEnglish);

  return (
    <>
      <div className="grid mx-auto max-w-6xl px-10 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-6 gap-y-10">
        {entries.map(({ id, progress, media, mediaId, updatedAt }) => (
          <div
            key={id}
            className="rounded-md drop-shadow-2xl relative overflow-hidden"
          >
            <Link to={`/library/${mediaId}`}>
              <img
                className="h-full"
                src={media.coverImage.extraLarge}
                alt={media.title.english}
              />
              <div className="absolute bottom-0 inset-x-0 bg-emerald-950/70 py-2 px-3 text-slate-200 flex flex-col justify-center">
                <h3 className="text-sm">
                  {titleIsEnglish
                    ? media.title.english
                      ? media.title.english
                      : media.title.romaji
                    : media.title.romaji}
                </h3>
                <p className="text-xs text-slate-400">
                  Progress: EP <span>{progress}</span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default DisplayAnime;
