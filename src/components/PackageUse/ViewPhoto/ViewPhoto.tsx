import { useEffect } from "react";
import tw, { styled } from "twin.macro";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const Container = styled.div`
  ${tw`relative py-8 px-2 max-w-[1200px] m-auto`}
  .pswp-gallery {
    ${tw`grid grid-cols-4 grid-rows-2 gap-4 `}
    a:first-child {
      ${tw`col-span-2 row-span-2`}
    }
    a {
      ${tw`w-full pb-[100%] relative block`}
      img {
        ${tw`absolute top-0 left-0 w-full h-full object-cover`}
      }
    }
  }
`;

type imagesType = {
  largeURL: string;
  thumbnailURL: string;
  width: number;
  height: number;
};

const galleryID = "my-test-gallery";

const aespaImg: imagesType[] = [
  {
    largeURL: "https://i.im.ge/2025/08/11/JxwnML.aespa-dirty-work-members.webp",
    thumbnailURL:
      "https://i.im.ge/2025/08/11/JxYKKP.aespa-dirty-work-members.webp",
    width: 3840,
    height: 2160,
  },
  {
    largeURL: "https://i.im.ge/2025/08/11/JxwfNr.winter.webp",
    thumbnailURL: "https://i.im.ge/2025/08/11/JxY8pC.winter.webp",
    width: 2560,
    height: 1440,
  },
  {
    largeURL: "https://i.im.ge/2025/08/11/JxwHr0.karina.webp",
    thumbnailURL: "https://i.im.ge/2025/08/11/JxYZwp.karina.webp",
    width: 2560,
    height: 1440,
  },
  {
    largeURL: "https://i.im.ge/2025/08/11/Jxwvgc.ningning.webp",
    thumbnailURL: "https://i.im.ge/2025/08/11/JxYW2q.ningning.webp",
    width: 2560,
    height: 1440,
  },
  {
    largeURL: "https://i.im.ge/2025/08/11/JxwkVW.giselle.webp",
    thumbnailURL: "https://i.im.ge/2025/08/11/JxYgA4.giselle.webp",
    width: 2560,
    height: 1440,
  },
];

function ViewPhoto() {
  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
      wheelToZoom: true,
    });

    lightbox.init();

    return () => {
      (lightbox as PhotoSwipeLightbox).destroy();
      lightbox = null;
    };
  }, []);

  return (
    <>
      <Container>
        <div className="pswp-gallery" id={galleryID}>
          {aespaImg.map((image, index) => (
            <a
              href={image.largeURL}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              data-cropped="true"
              key={galleryID + "-" + index}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image.thumbnailURL} alt="" />
            </a>
          ))}
        </div>
      </Container>
    </>
  );
}

export default ViewPhoto;
