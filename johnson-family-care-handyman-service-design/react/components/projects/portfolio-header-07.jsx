"use client";

import { Badge } from "@/components/ui/badge";
import React from "react";

export function PortfolioHeader7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-12 md:mb-18 md:grid-cols-[1.5fr_1fr] lg:mb-20 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-h1 font-bold md:mb-6">Our work</h1>
            <p className="text-medium">
              Real jobs from real homes across Western Sydney. We take pride in
              every one.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Carpentry</a>
              </Badge>
              <Badge>
                <a href="#">Decking</a>
              </Badge>
              <Badge>
                <a href="#">Renovation</a>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-h6 font-bold">Client</h3>
              <p>Margaret Whitfield</p>
            </div>
            <div>
              <h3 className="mb-2 text-h6 font-bold">Date</h3>
              <p>March 2023</p>
            </div>
            <div>
              <h3 className="mb-2 text-h6 font-bold">Role</h3>
              <p>Homeowner</p>
            </div>
            <div>
              <h3 className="mb-2 text-h6 font-bold">Website</h3>
              <a href="#" target="_blank" rel="noopener" className="underline">
                johnsonpropertysolutions.com.au
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
