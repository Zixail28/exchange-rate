const flagsStyle = "h-5 w-6 mr-2";

export const Icons = {
  Chevron: function () {
    return (
      <svg
        aria-hidden="true"
        className="w-4 h-4 ml-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  },
  USA: function () {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 7410 3900"
        className={`${flagsStyle}`}
      >
        <path fill="#b22234" d="M0 0h7410v3900H0z" />
        <path
          d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
          stroke="#fff"
          strokeWidth="300"
        />
        <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
        <g fill="#fff">
          <g id="d">
            <g id="c">
              <g id="e">
                <g id="b">
                  <path
                    id="a"
                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                  />
                  <use xlinkHref="#a" y="420" />
                  <use xlinkHref="#a" y="840" />
                  <use xlinkHref="#a" y="1260" />
                </g>
                <use xlinkHref="#a" y="1680" />
              </g>
              <use xlinkHref="#b" x="247" y="210" />
            </g>
            <use xlinkHref="#c" x="494" />
          </g>
          <use xlinkHref="#d" x="988" />
          <use xlinkHref="#c" x="1976" />
          <use xlinkHref="#e" x="2470" />
        </g>
      </svg>
    );
  },
  Belarus: function () {
    return (
      <svg
        viewBox="0 0 900 450"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={`${flagsStyle}`}
      >
        <rect fill="#D22730" width="100%" height="100%" />
        <path d="M5 0h100v450H5z" fill="#fff" />
        <g id="b">
          <path
            id="a"
            d="M572 0v163h-44V0zM10 285h79v-65h40v-79h56V72h46V0h139v72h45v69h56v79h40v65h61v101h-61v65h-40v79h-56v69h-45v74h-32v62h-75v-62h-32v-74h-46v-69h-56v-79H89v-65H10m0-352h79v90H10m310 27h-41v61h-39v77h-38v95h38v77h39v60h41v-60h39v-77h39v-95h-39v-77h-39zm4 139v90h-49v-90zM10 526h79v97H10m562-88v137h-44V535zM464 687v68h48v70h60v92h-60v71h-48v68h-56v-68h-48v-71h-40v-92h40v-70h48v-68zM10 825h79v-70h48v-68h55v68h48v70h40v92h-40v71h-48v68h-55v-68H89v-71H10m447-90h-41v87h41zm-271 0h-41v87h41zm16 1441v-47h-34v-71h-45v-43H89v-69H10v-160h79v46h34v67h45v80h64v-72h47v-53h34v-63h45v-67h33v-68h32v-70h43v-94h-57v-85h-62v-51H243v74h60v67h-40v82h-47v72h-59v-72h-49v-82H78v-67H10v-127h79v-82h30v-63h28v-72h40v-71h39v-47h47v-71h57v71h47v47h40v71h39v72h32v62h32v54h52v397h-59v67h-17v70h-44v68h-27v50h-28v53h-48v52h-69v145m292-1213v137h-44v-137zm-562 26h79v97H10m0 486h79v97H10zm560 246v88h-42v-88zm-58 358v-55h-26v-43h-38v-129h38v52h40v76h44v98m-214 0v-64h42v64"
            fill="#D22730"
            transform="scale(.1)"
          />
          <use transform="matrix(-1 0 0 1 110 0)" xlinkHref="#a" />
        </g>
        <use transform="matrix(1 0 0 -1 0 450)" xlinkHref="#b" />
        <path d="M105 300h795v150H105z" fill="#009739" />
      </svg>
    );
  },
  Russia: function () {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 9 6"
        className={`${flagsStyle}`}
      >
        <path fill="#fff" d="M0 0h9v3H0z" />
        <path fill="#DA291C" d="M0 3h9v3H0z" />
        <path fill="#0032A0" d="M0 2h9v2H0z" />
      </svg>
    );
  },
  Poland: function () {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 10"
        className={`${flagsStyle}`}
      >
        <path fill="#fff" d="M0 0h16v10H0z" />
        <path fill="#dc143c" d="M0 5h16v5H0z" />
      </svg>
    );
  },
  Europian: function () {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 810 540"
        className={`${flagsStyle}`}
      >
        <defs>
          <g id="d">
            <g id="b">
              <path id="a" d="M0 0v1h.5z" transform="rotate(18 3.157 -.5)" />
              <use xlinkHref="#a" transform="scale(-1 1)" />
            </g>
            <g id="c">
              <use xlinkHref="#b" transform="rotate(72)" />
              <use xlinkHref="#b" transform="rotate(144)" />
            </g>
            <use xlinkHref="#c" transform="scale(-1 1)" />
          </g>
        </defs>
        <path fill="#039" d="M0 0h810v540H0z" />
        <g fill="#fc0" transform="matrix(30 0 0 30 405 270)">
          <use xlinkHref="#d" y="-6" />
          <use xlinkHref="#d" y="6" />
          <g id="e">
            <use xlinkHref="#d" x="-6" />
            <use xlinkHref="#d" transform="rotate(-144 -2.344 -2.11)" />
            <use xlinkHref="#d" transform="rotate(144 -2.11 -2.344)" />
            <use xlinkHref="#d" transform="rotate(72 -4.663 -2.076)" />
            <use xlinkHref="#d" transform="rotate(72 -5.076 .534)" />
          </g>
          <use xlinkHref="#e" transform="scale(-1 1)" />
        </g>
      </svg>
    );
  },
};
