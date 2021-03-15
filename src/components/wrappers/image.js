import React from "react";

export function Image({ image }) {
  const { url } = image;
  const urlwebp = url.replace(/\.[a-z0-9]+$/i,'.webp')
  return (
    <picture>
      <source type="image/webp" srcset={urlwebp}/>
      <source type="image/jpeg" srcset={url} />
      <img src={url} alt="" />
    </picture>
  );
}
