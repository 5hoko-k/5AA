function Test(props) {
  const entries = props.entries;
  console.log(entries);
  return (
    <>
      <div className="grid mx-auto max-w-6xl px-6 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-6 gap-y-10">
        {entries.map(({ id, progress, media, mediaId, updatedAt }) => (
          <div
            key={id}
            className="rounded-sm drop-shadow relative"
          >
            <img className="h-full" src={media.coverImage.extraLarge} alt={media.title.english} />
            <div className="absolute bottom-0 inset-x-0 bg-emerald-950/70 py-2 px-3 text-slate-200 flex flex-col justify-center">
              <h3 className="text-sm">{media.title.english}</h3>
              <p className="text-xs text-slate-400">Progress: EP <span>{progress}</span></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Test;
