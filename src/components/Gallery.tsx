import { ui } from '../data/content';

export default function Gallery() {
  const photos: string[] = Array.isArray(ui.galleryPhotos) ? ui.galleryPhotos : [];

  return (
    <section className="gallery section" id="gallery" data-fade>
      <div className="container">
        <h2 className="section-title">{ui.galleryHeading}</h2>
        <p className="section-subtitle">{ui.gallerySub}</p>
        <div className="gallery-grid">
          {ui.galleryLabels.map((label, i) => {
            const photoId = photos[i];
            const isEven = i % 2 === 0;
            const badgeLabel = isEven ? ui.galleryBadgeEven : ui.galleryBadgeOdd;
            const tagClass = isEven ? 'after' : 'before';
            return (
              <div key={i} className="gallery-item">
                {photoId && (
                  <img
                    src={`https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=800&q=75`}
                    alt={label}
                    loading="lazy"
                  />
                )}
                <div className="gallery-scrim" />
                <div className="gallery-content">
                  <span className={'gallery-tag gallery-tag--' + tagClass}>
                    {badgeLabel}
                  </span>
                  <span className="gallery-label">{label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
