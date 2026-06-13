import * as React from "react"
import { SVGProps } from "react"
const ContactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 17"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.502 15.44a5.876 5.876 0 0 0-5.876-5.876m0 0A5.876 5.876 0 0 0 .75 15.44m5.876-5.876a4.407 4.407 0 1 0 0-8.814 4.407 4.407 0 0 0 0 8.814Z"
    />
  </svg>
)
export default ContactIcon
