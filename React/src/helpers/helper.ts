import { NumberRange } from "../@types/global"

export const API_URL = import.meta.env.VITE_API_URL + "/graphql"
export const API_URL_NYT = import.meta.env.VITE_API_URL + "/api/articles/nyt"

export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

export const html_loading = (loadingPercent: NumberRange<101>[number] = 100) => {
  return `<div class="preLoaderSpinner" style="opacity: ${loadingPercent}%">
    <div>
        <div class="spinner-chase">
            <div class="chase-dot"></div>
            <div class="chase-dot"></div>
            <div class="chase-dot"></div>
            <div class="chase-dot"></div>
            <div class="chase-dot"></div>
            <div class="chase-dot"></div>
        </div>
    </div>
  </div>
  <style type="text/css">
    .preLoaderSpinner {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #bababa88;
        z-index: 9999999999;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        pointer-events: all;
    }

    .spinner-chase {
        margin: 0 auto;
        width: 40px;
        height: 40px;
        position: relative;
        -webkit-animation: spinner-chase 2.5s infinite linear both;
        animation: spinner-chase 2.5s infinite linear both;
    }

    .chase-dot {
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        -webkit-animation: chase-dot 2.0s infinite ease-in-out both;
        animation: chase-dot 2.0s infinite ease-in-out both;
    }

    .chase-dot:before {
        content: '';
        display: block;
        width: 25%;
        height: 25%;
        background-color: var(--swiper-navigation-color);
        border-radius: 100%;
        -webkit-animation: chase-dot-before 2.0s infinite ease-in-out both;
        animation: chase-dot-before 2.0s infinite ease-in-out both;
    }

    .chase-dot:nth-child(1) {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }

    .chase-dot:nth-child(1):before {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }

    .chase-dot:nth-child(2) {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    .chase-dot:nth-child(2):before {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    .chase-dot:nth-child(3) {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }

    .chase-dot:nth-child(3):before {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }

    .chase-dot:nth-child(4) {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }

    .chase-dot:nth-child(4):before {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }

    .chase-dot:nth-child(5) {
        -webkit-animation-delay: -0.7s;
        animation-delay: -0.7s;
    }

    .chase-dot:nth-child(5):before {
        -webkit-animation-delay: -0.7s;
        animation-delay: -0.7s;
    }

    .chase-dot:nth-child(6) {
        -webkit-animation-delay: -0.6s;
        animation-delay: -0.6s;
    }

    .chase-dot:nth-child(6):before {
        -webkit-animation-delay: -0.6s;
        animation-delay: -0.6s;
    }

    @-webkit-keyframes spinner-chase {
        100% {
            -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
        }
    }

    @keyframes spinner-chase {
        100% {
            -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
        }
    }

    @-webkit-keyframes chase-dot {
        80%, 100% {
            -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
        }
    }

    @keyframes chase-dot {
        80%, 100% {
            -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
        }
    }

    @-webkit-keyframes chase-dot-before {
        50% {
            -webkit-transform: scale(0.4);
            transform: scale(0.4);
        }
        100%, 0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes chase-dot-before {
        50% {
            -webkit-transform: scale(0.4);
            transform: scale(0.4);
        }
        100%, 0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
  </style>`
}

export const append_and_get_loading = (loadingPercent: NumberRange<101>[number] = 100) => {
  document.body?.insertAdjacentHTML("beforeend", html_loading(loadingPercent))
  return document.querySelectorAll(".preLoaderSpinner")
}

export const setItem = (key: string, value: string) => localStorage.setItem(key, value)
export const getItem = (key: string) => localStorage.getItem(key)

export function sliceIntoChunks(str: string, chunkSize: number) {
  const words = str.split(" ")
  const noEmptyStrsArr = words.filter(item => item.length > 0)

  if (chunkSize > noEmptyStrsArr.length) return str

  //   const res = []
  //   for (let i = 0; i < noEmptyStrsArr.length; i += chunkSize) {
  const chunk = noEmptyStrsArr.slice(0, chunkSize)
  // res.push(chunk)
  //   }
  const res = chunk

  return res.join(" ") + "..."
}
