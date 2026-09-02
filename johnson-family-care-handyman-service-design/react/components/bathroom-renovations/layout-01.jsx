"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Refits</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              One team for the whole bathroom
            </h1>
            <p className="text-medium">
              A bathroom renovation is a big job. You need a plumber, a tiler, a
              carpenter, and a waterproofing specialist. Or you need us. We
              manage the entire refit from first fix to final clean so you deal
              with one family and one phone number.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Quote" variant="secondary">
                Quote
              </Button>
              <Button
                title="Projects"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Projects
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
