"use client";

import React from "react";

export function Gallery9() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="md:mb-18 mb-12 text-center lg:mb-20">
          <h2 className="text-h2 mb-5 font-bold md:mb-6">Our work</h2>
          <p className="text-medium">
            Real jobs from around Western Sydney, finished and cleaned up.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-2 grid-rows-2 gap-6 md:auto-cols-auto md:grid-cols-[2fr_1fr_1fr] md:gap-8">
          <a
            href="#"
            className="inline-block size-full col-start-1 col-end-2 row-start-1 row-end-3"
          >
            <div className="size-full">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-12.jpg"
                alt="Relume placeholder image 1"
                className="rounded-image aspect-square size-full object-cover"
              />
            </div>
          </a>
          <a href="#" className="inline-block size-full">
            <div className="size-full">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-30.jpg"
                alt="Relume placeholder image 2"
                className="rounded-image aspect-square size-full object-cover"
              />
            </div>
          </a>
          <a href="#" className="inline-block size-full">
            <div className="size-full">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-47.jpg"
                alt="Relume placeholder image 3"
                className="rounded-image aspect-square size-full object-cover"
              />
            </div>
          </a>
          <a href="#" className="inline-block size-full">
            <div className="size-full">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-32.jpg"
                alt="Relume placeholder image 4"
                className="rounded-image aspect-square size-full object-cover"
              />
            </div>
          </a>
          <a href="#" className="inline-block size-full">
            <div className="size-full">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-29.jpg"
                alt="Relume placeholder image 5"
                className="rounded-image aspect-square size-full object-cover"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
