import React, { SVGProps } from 'react';

const SharesightIcon = (props: SVGProps<SVGSVGElement>) => (
    //   <svg fill="none" viewBox="0 0 64 64" {...props}>
    //     <path
    //       d="M32.003.019C14.203.019.019 14.203.019 32 .019 49.797 14.203 63.987 32 63.987c17.797 0 31.984-14.184 31.984-31.984 0-17.8-14.181-31.984-31.981-31.984zM6.97 32.28l24.754 24.755c-13.629 0-24.754-11.126-24.754-24.755zm30.594 24.197L7.528 26.44C10.027 15.315 20.043 6.97 32 6.97a25.27 25.27 0 0120.304 10.294l-3.613 3.056a20.419 20.419 0 00-16.966-8.899 20.147 20.147 0 00-19.192 13.627l26.144 26.147c6.4-2.227 11.403-7.787 12.795-14.464H40.624v-4.728h16.41c0 11.96-8.343 21.973-19.469 24.474z"
    //       fill="#542C85"
    //     />
    //   </svg>
    <svg fill="none" height="416" viewBox="0 0 1027 416" width="1027" xmlns="http://www.w3.org/2000/svg"><path d="m107.345 324.642c0 13.47-4.87 24.038-14.6101 31.706-9.7397 7.667-23.1751 11.501-40.306 11.501s-31.1534-2.659-42.0675-7.978v-23.417c6.9077 3.247 14.2298 5.802 21.9663 7.667 7.8056 1.866 15.0586 2.798 21.759 2.798 9.8089 0 17.0273-1.865 21.6554-5.595 4.6972-3.73 7.0458-8.738 7.0458-15.024 0-5.664-2.1413-10.465-6.4241-14.403-4.2827-3.937-13.1245-8.6-26.5253-13.988-13.8152-5.595-23.555-11.984-29.2192-19.168-5.6643-7.184-8.4964-15.819-8.4964-25.904 0-12.641 4.4899-22.588 13.4699-29.841 8.9799-7.253 21.0337-10.879 36.1614-10.879 14.506 0 28.943 3.177 43.3108 9.532l-7.8747 20.205c-13.4698-5.664-25.4891-8.496-36.0578-8.496-8.0128 0-14.0916 1.761-18.2361 5.284-4.1446 3.454-6.2169 8.047-6.2169 13.781 0 3.937.8289 7.322 2.4868 10.154 1.6578 2.763 4.3863 5.388 8.1855 7.875 3.7992 2.486 10.6377 5.767 20.5156 9.843 11.1213 4.628 19.2723 8.945 24.453 12.952 5.1808 4.006 8.9796 8.531 11.3976 13.573 2.418 5.043 3.627 10.983 3.627 17.822zm121.065 41.135h-24.453v-70.458c0-8.842-1.796-15.438-5.388-19.79-3.523-4.352-9.153-6.528-16.889-6.528-10.223 0-17.753 3.074-22.588 9.222-4.766 6.078-7.15 16.302-7.15 30.67v56.884h-24.349v-161.224h24.349v40.928c0 6.562-.414 13.573-1.243 21.033h1.554c3.316-5.526 7.91-9.809 13.781-12.848 5.941-3.039 12.848-4.559 20.723-4.559 27.769 0 41.653 13.988 41.653 41.964zm99.099 0-4.87-15.957h-.829c-5.526 6.977-11.086 11.743-16.682 14.299-5.595 2.487-12.779 3.73-21.551 3.73-11.26 0-20.067-3.039-26.422-9.118-6.286-6.079-9.429-14.679-9.429-25.8 0-11.812 4.386-20.723 13.159-26.732 8.773-6.01 22.139-9.291 40.099-9.844l19.79-.621v-6.114c0-7.322-1.727-12.779-5.181-16.371-3.384-3.661-8.669-5.491-15.853-5.491-5.871 0-11.501.863-16.889 2.59s-10.568 3.765-15.542 6.113l-7.875-17.407c6.217-3.247 13.021-5.699 20.412-7.357 7.392-1.727 14.368-2.59 20.931-2.59 14.575 0 25.558 3.178 32.949 9.533 7.46 6.355 11.19 16.336 11.19 29.944v77.193zm-36.265-16.578c8.842 0 15.922-2.453 21.241-7.357 5.388-4.974 8.082-11.916 8.082-20.827v-9.947l-14.713.622c-11.467.415-19.825 2.349-25.075 5.803-5.181 3.384-7.771 8.6-7.771 15.645 0 5.112 1.52 9.084 4.559 11.916 3.039 2.763 7.598 4.145 13.677 4.145zm139.302-100.092c4.904 0 8.945.345 12.122 1.036l-2.383 22.692c-3.453-.829-7.045-1.244-10.776-1.244-9.739 0-17.649 3.178-23.727 9.533-6.01 6.355-9.015 14.61-9.015 24.764v59.889h-24.349v-114.598h19.065l3.212 20.205h1.243c3.8-6.838 8.738-12.261 14.817-16.267 6.148-4.007 12.745-6.01 19.791-6.01zm77.029 118.742c-17.822 0-31.775-5.181-41.86-15.542-10.016-10.431-15.025-24.764-15.025-43 0-18.72 4.663-33.433 13.988-44.14 9.326-10.707 22.139-16.06 38.441-16.06 15.128 0 27.078 4.594 35.851 13.781s13.159 21.828 13.159 37.923v13.159h-76.364c.346 11.121 3.35 19.686 9.015 25.696 5.664 5.941 13.642 8.911 23.935 8.911 6.769 0 13.055-.622 18.857-1.865 5.872-1.313 12.158-3.454 18.858-6.424v19.79c-5.94 2.832-11.95 4.835-18.029 6.01-6.078 1.174-13.021 1.761-20.826 1.761zm-4.456-100.299c-7.736 0-13.953 2.453-18.65 7.357-4.628 4.904-7.391 12.054-8.289 21.448h52.014c-.138-9.463-2.418-16.613-6.838-21.448-4.421-4.904-10.5-7.357-18.237-7.357z" fill="#ffa044" /><g fill="#13101b"><path clip-rule="evenodd" d="m641.64 357.939c8.151-6.01 12.226-14.61 12.226-25.8 0-5.526-1.036-10.258-3.108-14.195-2.073-4.007-5.25-7.53-9.533-10.569s-11.156-6.39-20.619-10.051c-11.26-4.352-18.582-7.771-21.966-10.258-3.316-2.486-4.974-5.526-4.974-9.118 0-7.322 6.424-10.983 19.272-10.983 8.428 0 18.824 2.556 31.188 7.668l7.875-18.34c-12.019-5.457-24.764-8.186-38.234-8.186-13.608 0-24.384 2.729-32.327 8.186-7.875 5.388-11.812 12.986-11.812 22.795 0 8.151 2.314 14.782 6.942 19.894 4.697 5.112 13.642 10.223 26.836 15.335 6.769 2.625 12.054 4.974 15.853 7.046s6.528 4.075 8.185 6.009c1.658 1.935 2.487 4.352 2.487 7.253 0 9.049-7.495 13.574-22.484 13.574-11.605 0-24.142-3.108-37.612-9.325v21.033c9.256 4.628 21.517 6.943 36.783 6.943 15.197 0 26.871-2.971 35.022-8.911zm32.164 6.838h24.349v-114.597h-24.349zm149.559-101.231v-13.366h-39.684c-1.796-.484-4.49-.933-8.082-1.347-3.523-.484-6.908-.726-10.154-.726-14.506 0-25.697 3.42-33.571 10.258-7.806 6.839-11.709 16.475-11.709 28.909 0 7.736 1.831 14.506 5.492 20.308 3.73 5.733 8.565 9.878 14.506 12.434-4.767 2.901-8.359 5.837-10.776 8.807-2.418 2.97-3.627 6.597-3.627 10.88 0 3.384 1.036 6.631 3.109 9.739 2.141 3.04 4.835 5.25 8.082 6.632-8.013 1.865-14.265 5.18-18.755 9.947-4.42 4.835-6.631 10.776-6.631 17.821 0 10.224 4.11 18.098 12.33 23.624 8.22 5.527 20.136 8.29 35.747 8.29 20.24 0 35.713-3.523 46.419-10.569 10.707-7.046 16.061-17.062 16.061-30.048 0-10.155-3.281-17.926-9.844-23.314-6.562-5.387-16.163-8.081-28.804-8.081h-19.998c-6.562 0-11.087-.657-13.574-1.969-2.417-1.313-3.626-3.281-3.626-5.906 0-4.352 2.625-8.151 7.875-11.398 2.97.553 6.286.829 9.947.829 14.298 0 25.523-3.385 33.674-10.154 8.151-6.77 12.227-16.06 12.227-27.872 0-3.938-.587-7.668-1.762-11.191-1.174-3.523-2.659-6.493-4.455-8.911zm-82.995 131.176c-4.697-2.832-7.046-6.873-7.046-12.123 0-5.595 2.038-10.051 6.113-13.366 4.145-3.247 9.706-4.87 16.682-4.87h18.444c9.67 0 16.267 1.036 19.79 3.108 3.592 2.142 5.388 5.699 5.388 10.673 0 6.285-3.247 11.328-9.74 15.127s-16.371 5.699-29.633 5.699c-8.566 0-15.232-1.416-19.998-4.248zm8.911-90.87c-3.661-3.868-5.492-9.394-5.492-16.578 0-7.668 1.796-13.505 5.388-17.511 3.661-4.007 9.015-6.01 16.06-6.01 7.115 0 12.4 2.038 15.853 6.113 3.523 4.007 5.285 9.74 5.285 17.2 0 15.059-7.046 22.588-21.138 22.588-6.907 0-12.226-1.934-15.956-5.802zm165.309 60.925h24.453v-74.706c0-27.976-13.885-41.964-41.653-41.964-7.875 0-14.783 1.52-20.723 4.559-5.872 3.04-10.465 7.323-13.781 12.849h-1.554c.829-7.461 1.243-14.472 1.243-21.034v-40.928h-24.349v161.224h24.349v-56.884c0-14.368 2.383-24.591 7.15-30.67 4.835-6.148 12.364-9.222 22.587-9.222 7.737 0 13.367 2.176 16.89 6.528 3.592 4.352 5.388 10.949 5.388 19.79zm112.362-20.412c-5.94 1.865-11.88 2.798-17.82 2.798-4.77 0-8.64-1.382-11.607-4.145-2.901-2.832-4.352-7.184-4.352-13.055v-61.34h32.639v-18.443h-32.639v-25.489h-15.024l-8.289 24.245-16.786 8.911v10.776h15.646v61.754c0 24.315 11.536 36.473 34.612 36.473 4.55 0 8.94-.415 13.15-1.244 4.29-.76 7.78-1.727 10.47-2.901z" fill-rule="evenodd" /><path clip-rule="evenodd" d="m787.111 175.922c30.655-2.597 53.401-29.553 50.805-60.208-2.597-30.656-29.553-53.4023-60.208-50.8057-30.656 2.5965-53.402 29.5526-50.806 60.2077 2.597 30.656 29.553 53.402 60.209 50.806zm-1.516-14.475c23.001-1.836 40.158-21.971 38.322-44.971-1.837-23.0011-21.971-40.1582-44.972-38.3217-23.001 1.8364-40.158 21.9707-38.322 44.9717 1.837 23.001 21.971 40.158 44.972 38.321z" fill-rule="evenodd" /><rect height="24" rx="12" transform="matrix(.70710678 -.70710678 .70710678 .70710678 42.8339 536.534182)" width="79.7401" x="669.071" y="216.562" /><rect height="10.027" rx="5.0135" transform="matrix(.70710678 -.70710678 .70710678 .70710678 72.418072 555.516691)" width="52.4531" x="706.777" y="190.342" /><rect height="26.7386" rx="3.34233" width="17.8258" x="752.927" y="138.148" /><rect height="42" rx="3.34233" width="18" x="776" y="123" /><rect height="56" rx="3.34233" width="18" x="800" y="106" /></g></svg>

);

export default SharesightIcon;