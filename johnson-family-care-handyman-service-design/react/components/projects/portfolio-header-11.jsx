"use client";

import { Badge } from "@/components/ui/badge";
import React from "react";

export function PortfolioHeader11() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-6 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-20">
          <div>
            <h1 className="mb-5 text-h1 font-bold md:mb-6">
              The Whitfield deck
            </h1>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Carpentry</a>
              </Badge>
              <Badge>
                <a href="#">Decking</a>
              </Badge>
              <Badge>
                <a href="#">Pergola</a>
              </Badge>
            </div>
          </div>
          <div>
            <p className="text-medium">
              Margaret had an old concrete slab that was cracking and sloping
              toward the house. She wanted a proper timber deck where the
              grandkids could play. We built her a new merbau deck with a
              pergola over the back door. The job took four days and we cleaned
              up every afternoon before we left.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            alt="Relume placeholder image 1"
            className="w-full rounded-image"
          />
        </div>
      </div>
    </section>
  );
}
