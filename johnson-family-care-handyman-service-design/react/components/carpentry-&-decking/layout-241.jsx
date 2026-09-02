"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout241() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="flex flex-col">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Services</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                What we build and repair
              </h2>
              <p className="text-medium">
                From new decks to structural fixes, we do the work properly.
                Every job is measured twice and built once.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/pergola.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Custom timber decks and pergolas
              </h3>
              <p>
                Designed for your yard and built to handle the Western Sydney
                sun and rain.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/pergola.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Structural timber repairs and framing
              </h3>
              <p>
                Rotten joists, sagging beams, and damaged framing fixed properly
                and safely.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/shelves.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Custom built-ins and finish work
              </h3>
              <p>
                Bookshelves, window seats, and storage that fit your home like
                they were always there.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
            <Button variant="secondary">Quote</Button>
            <Button
              iconRight={<ChevronRight className="text-scheme-text" />}
              variant="link"
              size="link"
            >
              Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
