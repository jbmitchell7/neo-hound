const Asteroid = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 744.09 1052.4"
        >
            <defs>
                <filter id="filter6415" colorInterpolationFilters="sRGB">
                    <feGaussianBlur
                        in="SourceGraphic"
                        result="result5"
                        stdDeviation="3"
                    ></feGaussianBlur>
                    <feTurbulence
                        baseFrequency="0.02"
                        numOctaves="3"
                        result="result1"
                        seed="0"
                        type="fractalNoise"
                    ></feTurbulence>
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="result1"
                        result="result3"
                        scale="30"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    ></feDisplacementMap>
                    <feComposite
                        in="result3"
                        in2="result1"
                        operator="out"
                        result="result4"
                    ></feComposite>
                    <feComposite
                        in2="result4"
                        k1="0.3"
                        k2="1"
                        k3="0.3"
                        operator="arithmetic"
                        result="result6"
                    ></feComposite>
                    <feComposite in="result6" in2="result5" operator="over"></feComposite>
                </filter>
            </defs>
            <g>
                <path
                    fill="#535353"
                    strokeWidth="0"
                    d="M141.99 707.9c15.644 25.549 264.75 159.82 291.81 132.76 10.71-10.71 58.229-34.176 74.923-34.176 48.468 0 131.15-63.897 165.62-46.663 6.383 3.191 60.882-41.816 55.836-36.77-9.854 9.854-12.76-72.507 64.436-111.1 71.847-35.923 193.94-329.21 100.55-422.59-9.684-9.684 19.408-28.569 12.487-35.49-57.52-57.524-114.56-132.32-180.74-198.49-41.136-41.136-93.345-35.5-191.91-84.782-26.729-13.364-123.42 27.08-125.53 24.974-4.871-4.871-133.9-10.692-134.07-10.516-52.79 52.779-159.21 103.99-196.51 141.3-25.633 25.627-7.592 91.05-32.864 116.32-22.804 22.804-57.178 40.424-57.178 84.782 0 30.087-83.488 193.86-46.006 231.34 79.574 79.574 147.65 168.99 199.14 249.09z"
                    filter="url(#filter6415)"
                    transform="translate(109.36 257.32) scale(.51274)"
                ></path>
            </g>
        </svg>
    );
}

export default Asteroid;
