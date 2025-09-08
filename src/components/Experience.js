import React, { useRef, useState, useEffect } from "react"
import { useWindowSize } from "react-use"
import { HashLink } from "react-router-hash-link"

const Carousel = ({ images }) => {
  if (!images || images.length === 0) return null

  if (images.length === 1) {
    return (
      <div className={"carousel"}>
        <div className={"images"}>
          <img src={images[0]} />
        </div>
      </div>
    )
  }

  const carouselRef = useRef(null)
  const timerRef = useRef(null)
  const [focusIndex, setFocusIndex] = useState(0)
  const { width } = useWindowSize()
  const itemWidth = Math.min(600, width - 80)

  const handleScroll = (e) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      const scrollIndex = Math.round(e.target.scrollLeft / itemWidth)
      if (scrollIndex === focusIndex) {
        carouselRef.current?.scrollTo({ left: focusIndex * itemWidth, behavior: "smooth" })
      } else {
        setFocusIndex(scrollIndex)
      }
    }, 250)
  }

  useEffect(() => {
    carouselRef.current?.scrollTo({ left: focusIndex * itemWidth, behavior: "smooth" })
  }, [focusIndex, itemWidth])

  return (
    <div className={"carousel"}>
      <div ref={carouselRef} onScroll={handleScroll} className={"images"}>
        {images.map((img, i) => <img key={i} src={img} />)}
      </div>
      <div className={"controls"}>
        {images.map((_, i) => (
          <div
            key={i}
            className={i === focusIndex ? "dot-focused" : "dot-unfocused"}
            onClick={() => setFocusIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

const Experience = ({ title, images = [], projects = [], tags = [], description }) => {
  return (
    // IMPORTANT: reuse Project card styling by including "project"
    <article className={"project experience"}>
      <div className={"info"}>
        <h2>{title}</h2>

        {projects.length !== 0 && (
          <div className={"descriptors"}>
            <span className="label">Projects:</span>
            {projects.map((p, i) => (
              <HashLink smooth key={i} to={`#${p.id}`} className={"descriptor"}>
                {p.label}
              </HashLink>
            ))}
          </div>
        )}

        {tags.length !== 0 && (
          <div className={"descriptors"}>
            <span className="label">Tags:</span>
            {tags.map((t, i) => (
              <HashLink smooth key={i} to={`#${t.id}`} className={"descriptor"}>
                {t.label}
              </HashLink>
            ))}
          </div>
        )}

        <div className={"description"}>
          {description}
        </div>
      </div>

      <Carousel images={images} />
    </article>
  )
}

export default Experience

