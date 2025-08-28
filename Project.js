import React, { useRef, useState, useEffect } from "react"
import { useWindowSize } from "react-use"

import { HashLink } from "react-router-hash-link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const Carousel = ({ images }) => {
    if (images.length == 0) return null

    if (images.length == 1) return (
        <div className={"carousel"}>
            <div className={"images"}>
                <img src={images[0]} />
            </div>
        </div>
    )

    const carouselRef = useRef()
    const [focusIndex, setFocusIndex] = useState(0)
    
    const imageComponents = []
    const dotComponents = []

    images.forEach((image, index) => {
        imageComponents.push(
            <img key={index} src={image} />
        )
        dotComponents.push(
            <div key={index} className={index == focusIndex ? "dot-focused" : "dot-unfocused"} onClick={() => setFocusIndex(index)} />
        )
    })

    const { width } = useWindowSize()

    const itemWidth = Math.min(600, width - 80)

    let timer = null
    
    const handleScroll = (e) => {
        if (timer != null) clearTimeout(timer)

        timer = setTimeout(() => {
            const scrollIndex = Math.round(e.target.scrollLeft / itemWidth)

            if (scrollIndex == focusIndex) carouselRef.current.scrollTo({ left: focusIndex * itemWidth, behavior: "smooth" })

            else setFocusIndex(scrollIndex)
        }, 250)
    }

    useEffect(() => {
        carouselRef.current.scrollTo({ left: focusIndex * itemWidth, behavior: "smooth" })
    }, [focusIndex])

    return (
        <div className={"carousel"}>
            <div ref={carouselRef} onScroll={handleScroll} className={"images"}>
                {
                    imageComponents
                }
            </div>
            <div className={"controls"}>
                {
                    dotComponents
                }
            </div>
        </div>
    )
}

const Project = ({ info, images, languages, tags, description }) => {
    const languagesComponents = []

    languages.forEach((language, index) => {
        languagesComponents.push(
            <HashLink smooth key={index} to={"#" + language.id} className={"descriptor"}>
                {
                    language.label
                }
            </HashLink>
        )
    })

    const tagsComponents = []

    tags.forEach((tag, index) => {
        tagsComponents.push(
            <HashLink smooth key={index} to={"#" + tag.id} className={"descriptor"}>
                {
                    tag.label
                }
            </HashLink>
        )
    })

    return (
        <article id={info.id} className={"project"}>
            <div className={"info"}>
                <h2>
                    {
                        info.label
                    }
                    {
                        info.url && <a target={"_blank"} href={info.url}><FontAwesomeIcon icon={faLink} /></a>
                    }
                </h2>
                {
                    languages.length != 0 && (
                        <div className={"descriptors"}>
                            Languages:
                            {
                                languagesComponents
                            }
                        </div>
                    )
                }
                {
                    tags.length != 0 && (
                        <div className={"descriptors"}>
                            Tags:
                            {
                                tagsComponents
                            }
                        </div>
                    )
                }
                <div className={"description"}>
                    {
                        description
                    }
                </div>
            </div>
            <Carousel images={images} />
        </article>
    )
}

export default Project