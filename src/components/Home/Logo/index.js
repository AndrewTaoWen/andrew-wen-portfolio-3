import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        const outlineLogo = outlineLogoRef.current

        gsap.set(outlineLogo, {
            strokeDasharray: outlineLogo.getTotalLength(),
            strokeDashoffset: outlineLogo.getTotalLength(),
        })

        gsap
            .timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
            .to(outlineLogo, {
                duration: 4,
                strokeDashoffset: 0,
            })
    }, [])
    

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className="solid-logo"
                ref={solidLogoRef}
                src={LogoS}
                alt="JavaScript,  Developer"
            />

            <svg version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="1376.000000pt"
                height="1234.000000pt"
                viewBox="0 0 1376.000000 1234.000000"
            >
                <g
                    className="svg-container"
                    transform="translate(5 1250) scale(.1 -.1)"
                    fill="none"
                >
                    <path ref={outlineLogoRef}
                        d="M3570 11848 l0 -224 108 -11 c233 -25 391 -103 570 -280 205 -205
369 -504 570 -1039 60 -159 282 -836 282 -859 0 -6 -61 -87 -136 -181 -326
-404 -728 -935 -951 -1256 -96 -138 -415 -630 -565 -873 -572 -921 -1117
-1963 -1530 -2925 -377 -877 -646 -1704 -808 -2484 -91 -439 -139 -821 -156
-1248 l-7 -168 2547 0 c2035 0 2546 3 2540 13 -5 6 -40 48 -79 92 -221 249
-542 701 -742 1045 -271 465 -467 865 -648 1325 -75 190 -235 644 -235 666 0
5 523 9 1284 9 l1284 0 10 -27 c106 -297 192 -503 309 -737 295 -593 703
-1145 1130 -1528 601 -540 1206 -837 1933 -951 114 -17 182 -21 440 -21 319
-1 400 5 659 50 792 136 1482 534 1947 1123 70 88 81 107 71 121 -7 9 -71 79
-144 155 l-132 138 -83 -72 c-473 -412 -1047 -391 -1465 53 -149 158 -255 336
-377 636 -294 727 -503 1395 -926 2960 -407 1506 -729 2582 -917 3060 -388
986 -1033 1843 -1850 2457 -322 242 -548 379 -924 562 -491 238 -1033 412
-1609 517 -291 53 -709 99 -985 109 -88 3 -217 8 -287 11 l-128 5 0 -223z
m1808 -3293 c193 -646 255 -859 522 -1800 268 -942 320 -1122 536 -1850 102
-342 297 -969 321 -1031 4 -12 -159 -14 -1264 -14 l-1269 0 -18 73 c-273 1119
-294 2139 -61 3022 70 265 180 552 304 790 120 229 193 343 490 755 85 118
190 266 234 328 44 62 84 109 88 105 4 -5 57 -174 117 -378z"/>
                </g>
            </svg>
        </div>
    )
}

export default Logo

