import type { Component } from "solid-js";
import { f } from "../styles";

const SVG = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.20001C8.24837 2.20001 5.2002 5.24818 5.2002 9.00001V13.7578L3.33456 16.5563C3.24695 16.6877 3.2002 16.8421 3.2002 17V18C3.2002 18.4418 3.55837 18.8 4.0002 18.8H9.20639L9.20088 18.933C9.20042 18.944 9.2002 18.9551 9.2002 18.9661C9.2002 20.5139 10.4457 21.8 12.0002 21.8C13.5546 21.8 14.8002 20.5139 14.8002 18.9661V18.8H20.0002C20.442 18.8 20.8002 18.4418 20.8002 18V17C20.8002 16.8421 20.7534 16.6877 20.6658 16.5563L18.8002 13.7578V9.00001C18.8002 5.24818 15.752 2.20001 12.0002 2.20001ZM13.2002 18.8H10.8078L10.8003 18.9807C10.808 19.6633 11.3592 20.2 12.0002 20.2C12.6457 20.2 13.2002 19.6557 13.2002 18.9661V18.8ZM19.172 17.2L17.3346 14.4438C17.2469 14.3124 17.2002 14.158 17.2002 14V9.00001C17.2002 6.13184 14.8684 3.80001 12.0002 3.80001C9.13202 3.80001 6.8002 6.13184 6.8002 9.00001V14C6.8002 14.158 6.75344 14.3124 6.66584 14.4438L4.82834 17.2H19.172Z" fill="currentColor"/>
</svg>
`;

const IconBell: Component = () => <div class={f.flex} innerHTML={SVG} />;

export default IconBell;
