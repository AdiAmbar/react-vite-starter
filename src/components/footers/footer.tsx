import React from "react";

import { cn } from "@/utils/cn";

import { Link } from "../ui/link";


export function Footer({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn(`bg-brand-secondary px-3 pt-10 pb-3`, className)}
      {...props}
    >

      {/* <div
        className={`
          mt-6 flex flex-col justify-between gap-6
          xs:flex-row
        `}
      >
        <div
          className={`
            grid grid-cols-1 items-start justify-items-start gap-4
            md:grid-cols-[max-content_max-content_max-content_max-content_max-content_max-content]
          `}
        > */}

          <Link
            to={"https://google.com"}
            className={`p-0 font-semibold text-white`}
          >
            test link
          </Link>

        {/* </div>
      </div> */}
    </footer>
  );
}
